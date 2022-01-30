import { useReducer } from "react";
//

const ACTIONS = {
  CHANGE_KEYWORD: "CHANGE_KEYWORD",
  CHANGE_RATING: "CHANGE_RATING",
  CHANGE_LANG: "CHANGE_LANG",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_KEYWORD:
      return { ...state, keyboard: action.payload };
    case ACTIONS.CHANGE_RATING:
      return { ...state, rating: action.payload };
    case ACTIONS.CHANGE_LANG:
      return { ...state, lang: action.payload };
    default:
      return state;
  }
}

export default function useFormReducer({ initialKeyword, initialRating, initialLang }) {
  const [state, dispatch] = useReducer(reducer, {
    keyboard: initialKeyword,
    rating: initialRating,
    lang: initialLang,
  });

  const updateRating = ({ rating }) => {
    dispatch({ type: ACTIONS.CHANGE_RATING, payload: rating });
  };

  const updateKeyboard = ({ keyword }) => {
    dispatch({ type: ACTIONS.CHANGE_KEYWORD, payload: keyword });
  };

  const updateLang = function ({ language }) {
    dispatch({ type: ACTIONS.CHANGE_LANG, payload: language });
  };

  return {
    state,
    updateRating,
    updateKeyboard,
    updateLang,
  };
}
