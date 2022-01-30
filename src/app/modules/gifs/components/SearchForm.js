import { INTERNAL_ROUTES } from "app/core/const/internal.routes";
import { useRef } from "react";
import { useLocation } from "wouter";

function SearchForm() {
  const input = useRef();
  const changePath = useLocation()[1];

  const handleSubmit = (event) => {
    event.preventDefault();
    changePath(`${INTERNAL_ROUTES.GIF_SEARCH.path}/${input.current.value}`);
  };

  return (
    <form className="gify__form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search..." ref={input} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
