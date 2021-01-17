import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import "fontsource-roboto";

import TextInput from "./TextInput";
import TimeDropdown from "./TimeDropdown";

class ExerciseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseObj: {
        timeInSeconds: 30,
        displayText: "30 seconds",
        exerciseName: ""
      }
    };

    // this.handleExerciseNameInput = this.handleExerciseNameInput.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(key, value) {
    this.setState(prevState => {
      let exerciseObj = Object.assign({}, prevState.exerciseObj);
      if (key === "time") {
        exerciseObj.timeInSeconds = value.timeInSeconds;
        exerciseObj.displayText = value.displayText;
      } else {
        exerciseObj.exerciseName = value.exerciseName;
      }
      console.log(exerciseObj);
      return { exerciseObj };
    });
  }

  render() {
    let { exerciseObj } = this.state;
    return (
      <div>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <TextInput
                exerciseName={exerciseObj.exerciseName}
                handleInput={this.handleInput}
              />
            </Grid>
            <Grid item>
              <TimeDropdown
                selectedTime={exerciseObj.timeInSeconds}
                handleInput={this.handleInput}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ExerciseComponent;
