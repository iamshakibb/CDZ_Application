const FormModalReducer = (state = false, action) => {
  switch (action.type) {
    case "OPEN_THE_FORM_MODAL":
      return !state;
    case "CLOSE_THE_FORM_MODAL":
      return !state;
    default:
      return state;
  }
};

export default FormModalReducer;
