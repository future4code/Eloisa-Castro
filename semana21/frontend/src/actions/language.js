export const changeLanguageAction = language => {
  return {
    type: "CHANGE_LANGUAGE",
    payload: {
      language: language
    }
  };
};
