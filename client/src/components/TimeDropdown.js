import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

let timerOptions = {
  5: { value: 5, text: "5 seconds" },
  8: { value: 8, text: "8 seconds" },
  10: { value: 10, text: "10 seconds" },
  15: { value: 15, text: "15 seconds" },
  30: { value: 30, text: "30 seconds" },
  45: { value: 45, text: "45 seconds" },
  60: { value: 60, text: "60 seconds" },
  75: { value: 75, text: "1:15 seconds" },
  90: { value: 90, text: "1:30 seconds" },
  105: { value: 105, text: "1:45 seconds" },
  120: { value: 120, text: "2 minutes" },
  135: { value: 135, text: "2:15 seconds" },
  150: { value: 150, text: "2:30 seconds" },
  165: { value: 165, text: "2:45 seconds" },
  180: { value: 180, text: "3 minutes" },
  195: { value: 195, text: "3:15 seconds" },
  210: { value: 210, text: "3:30 seconds" },
  225: { value: 225, text: "3:45 seconds" },
  240: { value: 240, text: "4 minutes" },
  255: { value: 255, text: "4:15 seconds" },
  270: { value: 270, text: "4:30 seconds" },
  285: { value: 285, text: "4:45 seconds" },
  300: { value: 300, text: "5 minutes" },
  315: { value: 315, text: "5:15 seconds" },
  330: { value: 330, text: "5:30 seconds" },
  345: { value: 345, text: "5:45 seconds" },
  360: { value: 360, text: "6 minutes" },
  375: { value: 375, text: "6:15 seconds" },
  390: { value: 390, text: "6:30 seconds" },
  405: { value: 405, text: "6:45 seconds" },
  420: { value: 420, text: "7 minutes" },
  435: { value: 435, text: "7:15 seconds" },
  450: { value: 450, text: "7:30 seconds" },
  465: { value: 465, text: "7:45 seconds" },
  480: { value: 480, text: "8 minutes" },
  495: { value: 495, text: "8:15 seconds" },
  510: { value: 510, text: "8:30 seconds" },
  525: { value: 525, text: "8:45 seconds" },
  540: { value: 540, text: "9 minutes" },
  555: { value: 555, text: "9:15 seconds" },
  570: { value: 570, text: "9:30 seconds" },
  585: { value: 585, text: "9:45 seconds" },
  600: { value: 600, text: "10 minutes" }
};

class TimeDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 30 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, value) {
    console.log(value);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Autocomplete
        id="timeDropdown"
        options={Object.keys(timerOptions).map(name => name)}
        getOptionLabel={option => timerOptions[option].text}
        onChange={this.handleChange}
        style={{ width: 300 }}
        defaultValue={"30"}
        getOptionSelected={(option, value) => option === value}
        renderInput={params => (
          <TextField {...params} label="Time" variant="outlined" />
        )}
      />
    );
  }
}

export default TimeDropdown;
