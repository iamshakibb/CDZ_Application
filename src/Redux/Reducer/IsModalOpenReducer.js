// modal open or close reducer
const isModalOpenReducer = (state = false, action) => {
  switch (action.type) {
    case "OPEN":
      return !state;
    case "CLOSE":
      return !state;
    default:
      return state;
  }
};

export default isModalOpenReducer;
