import { VISIBILITY_FILTERS } from "../constants";

export const getEmployeesState = store => store.employees;

export const getEmployeeList = store =>
  getEmployeesState(store) ? getEmployeesState(store).allIds : [];

export const getEmployeeById = (store, id) =>
  getEmployeesState(store) ? { ...getEmployeesState(store).byIds[id], id } : {};

export const getEmployees = store =>
  getEmployeeList(store).map(id => getEmployeeById(store, id));

export const getEmployeesByVisibilityFilter = (store, visibilityFilter) => {
  const allEmployees = getEmployees(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allEmployees.filter(employee => employee.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allEmployees.filter(employee => !employee.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allEmployees;
  }
};