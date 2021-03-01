import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleEmployee } from "../redux/actions";

const Employee = ({ employee, toggleEmployee }) => (
  <li className="employee-item" onClick={() => toggleEmployee(employee.id)}>
    {employee && employee.completed}{" "}
    <span
      className={cx(
        "employee-item__text",
        employee && employee.completed && "employee-item__text--completed"
      )}
    >
      {employee.content}
    </span>
  </li>
);

export default connect(
  null,
  { toggleEmployee }
)(Employee);