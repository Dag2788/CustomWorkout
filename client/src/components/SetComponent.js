import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "fontsource-roboto";
import ExerciseComponent from "./ExerciseComponent";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { isMobile } from "react-device-detect";

class SetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setExerciseList: []
    };
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
        <Grid item xs={12} style={{ marginTop: 10 }}>
          <Grid container justify="center" direction="row">
            <Grid item>
              <ExerciseComponent />
            </Grid>
          </Grid>
          <Grid container justify="center" direction="row" spacing={2}>
            <Grid item xs={9} sm={3}>
              <AddCircleIcon
                fontSize="large"
                style={{
                  paddingLeft: isMobile ? -10 : 0,
                  marginTop: 15,
                  color: "green"
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SetComponent;
