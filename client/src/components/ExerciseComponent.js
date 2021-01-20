import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "fontsource-roboto";
import TextInput from "./TextInput";
import TimeDropdown from "./TimeDropdown";
import CancelIcon from "@material-ui/icons/Cancel";

/*eslint-disable */
type Props = {
  addExercise: Function,
  deleteExercise: Function,
  index: Number
};
/*eslint-enable */

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
    this.handleInput = this.handleInput.bind(this);
    this.removeExercise = this.removeExercise.bind(this);
  }

  handleInput(key, value) {
    let { addExercise, index } = this.props;
    this.setState(prevState => {
      let exerciseObj = Object.assign({}, prevState.exerciseObj);
      if (key === "time") {
        exerciseObj.timeInSeconds = value.timeInSeconds;
        exerciseObj.displayText = value.displayText;
      } else {
        exerciseObj.exerciseName = value.exerciseName;
      }
      addExercise(exerciseObj, index);
      return { exerciseObj };
    });
  }

  removeExercise() {
    let { deleteExercise, index } = this.props;
    deleteExercise(index);
  }

  render() {
    let { exerciseObj } = this.state;
    return (
      <div>
        <Grid item xs={12} style={{ marginTop: 10 }}>
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
            <Grid item>
              <CancelIcon
                id="deletebutton"
                onClick={this.removeExercise}
                style={{ marginTop: 15, color: "red" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ExerciseComponent;
