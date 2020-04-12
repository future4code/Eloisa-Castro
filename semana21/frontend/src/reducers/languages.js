const initialState = {
  selectedLanguage: "pt-br"
};

const languages = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return { ...state, selectedLanguage: action.payload.language };
    default:
      return state;
  }
};

export default languages;
