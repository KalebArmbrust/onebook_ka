import { ADD_EMPLOYEE, TOGGLE_EMPLOYEE, SET_FILTER } from "./actionTypes";

let nextEmployeeId = 0;

export const addEmployee = content => ({
  type: ADD_EMPLOYEE,
  payload: {
    id: ++nextEmployeeId,
    content
  }
});

export const toggleEmployee = id => ({
  type: TOGGLE_EMPLOYEE,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });