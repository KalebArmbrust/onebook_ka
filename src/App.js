import React from "react";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import Filters from "./components/Filters";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>Employees</h1>
      <AddEmployee />
      <EmployeeList />
      <Filters />
    </div>
  );
}

export default App;