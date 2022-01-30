import { useLocation } from "wouter";

import { INTERNAL_ROUTES } from "app/core/const/internal.routes";
import LANGUAGES from "app/core/const/languages";
import RATINGS from "app/core/const/ratings";
//
import useFormReducer from "app/modules/gifs/reducer/useFormReducer";

function SearchForm({ initialKeyword = "", initialRating = RATINGS[0], initialLang = LANGUAGES[0].value }) {
  const changePath = useLocation()[1];

  const { state, updateRating, updateKeyboard, updateLang } = useFormReducer({
    initialKeyword,
    initialRating,
    initialLang
  });

  function handleChangeRating(event) {
    updateRating({rating: event.target.value});
  }

  function handleChangeKeyboard(event) {
    updateKeyboard({keyword: event.target.value});
  }

  function handleChangeLang(event) {
    updateLang({language: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.keyboard !== "") {
      changePath(
        `${INTERNAL_ROUTES.GIF_SEARCH.path}/${state.keyboard}/${state.rating}/${state.lang}`
      );
    }
  };

  return (
    <form className="gify__form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={state.keyboard}
        onChange={handleChangeKeyboard}
      />
      <select value={state.rating} onChange={handleChangeRating}>
        {RATINGS.map((rating) => {
          return (
            <option key={rating} value={rating}>
              {rating.toUpperCase()}
            </option>
          );
        })}
      </select>
      <select value={state.lang} onChange={handleChangeLang}>
        {LANGUAGES.map(({ value, label }) => {
          return (
            <option key={value} value={value}>
              {label.toUpperCase()}
            </option>
          );
        })}
      </select>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
