import { combineReducers } from "redux";
import searchContent from "./searchContent/reducers";

const rootReducer = combineReducers({
  searchContent,
});

export default rootReducer;
