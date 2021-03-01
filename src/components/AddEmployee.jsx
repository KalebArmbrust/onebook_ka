import React from "react";
import { connect } from "react-redux";
import { addEmployee } from "../redux/actions";

class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddEmployee = () => {
    this.props.addEmployee(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-employee" onClick={this.handleAddEmployee}>
          Add Employee
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addEmployee }
)(AddEmployee);