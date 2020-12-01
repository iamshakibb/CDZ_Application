import { combineReducers } from "redux";
import isModalOpenReducer from "./IsModalOpenReducer";

// combine all the reducer
const allReducer = combineReducers({
  IsModalOpen: isModalOpenReducer,
});

export default allReducer;
