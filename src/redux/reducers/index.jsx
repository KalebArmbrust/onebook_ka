import { combineReducers } from "redux";
import visibilityFilter from "./filter";
import employees from "./employees";

export default combineReducers({ employees, visibilityFilter });