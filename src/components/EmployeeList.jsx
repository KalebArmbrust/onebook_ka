import React from "react";
import { connect } from "react-redux";
import Employee from "./Employee";
import { getEmployeesByVisibilityFilter } from "../redux/selectors";
import { VISIBILITY_FILTERS } from "../constants";

const EmployeeList = ({ employees }) => (
  <ul className="employee-list">
    {employees && employees.length
      ? employees.map((employee, index) => {
          return <Employee key={`employee-${employee.id}`} employee={employee} />;
        })
      : "No new Employees"}
  </ul>
);

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const employees = getEmployeesByVisibilityFilter(state, visibilityFilter);
  return { employees };
};
export default connect(mapStateToProps)(EmployeeList);