import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "fontsource-roboto";
import ExerciseComponent from "./ExerciseComponent";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { isMobile } from "react-device-detect";
import Button from "@material-ui/core/Button";

class SetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseList: [
        {
          timeInSeconds: 30,
          displayText: "30 seconds",
          exerciseName: ""
        }
      ]
    };
    this.handleInput = this.handleInput.bind(this);
    this.addNewExercise = this.addNewExercise.bind(this);
    this.deleteExercise = this.deleteExercise.bind(this);
  }

  handleInput(value, index) {
    this.setState(prevState => {
      let exerciseList = Object.assign([], prevState.exerciseList);
      exerciseList[index] = value;
      console.log(exerciseList);
      return { exerciseList };
    });
  }

  addNewExercise() {
    let { exerciseList } = this.state;
    exerciseList.push({
      timeInSeconds: 30,
      displayText: "30 seconds",
      exerciseName: ""
    });
    this.setState({
      exerciseList
    });
  }

  deleteExercise(index) {
    let { exerciseList } = this.state;
    delete exerciseList[index];
    this.setState({
      exerciseList
    });
  }

  render() {
    let { exerciseList } = this.state;
    return (
      <div>
        <Grid item xs={12} style={{ marginTop: 10 }}>
          {exerciseList.length > 0 &&
            exerciseList.map((exercise, index) => {
              return (
                <Grid container justify="center" direction="row">
                  <Grid item>
                    <ExerciseComponent
                      deleteExercise={this.deleteExercise}
                      index={index}
                      addExercise={this.handleInput}
                    />
                  </Grid>
                </Grid>
              );
            })}
          <Grid container justify="center" direction="row" spacing={2}>
            <Grid item xs={9} sm={3}>
              <Button onClick={this.addNewExercise}>
                <AddCircleIcon
                  fontSize="large"
                  style={{
                    paddingLeft: isMobile ? -10 : 0,
                    marginTop: 15,
                    color: "green"
                  }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SetComponent;
