import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form noValidate>
        <TextField
          onChange={this.handleChange}
          onBlur={this.handleSubmit}
          id="outlined-basic"
          label="Exercise"
          variant="outlined"
        />
      </form>
    );
  }
}

export default InputField;
