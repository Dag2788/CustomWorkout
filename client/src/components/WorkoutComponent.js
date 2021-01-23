import React, { Component } from "react";
import { exerciseObj } from "./constants/Workouts";

class WorkoutComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      done: false,
      paused: false,
      exerciseName: "",
      nextExercise: "",
      timeLoop: () => {}
    };
    this.intervalID = 0;
    this.exerciseLoop = this.exerciseLoop.bind(this);
    this.finish = this.finish.bind(this);
    this.pause = this.pause.bind(this);
  }

  exerciseLoop() {
    clearInterval(this.intervalID);

    this.setState({
      done: false,
      paused: false
    });
    let i = 0;
    let y = exerciseObj[i].timeInSeconds;
    let yMin = Math.floor(y / 60);
    let ySec = y % 60;
    let hours = 0;
    let minutes = 0;
    let seconds = -1;
    this.intervalID = setInterval(() => {
      let { done, paused } = this.state;
      //Your code
      if (done) {
        clearInterval(this.intervalID);
        this.setState({
          totalTime: hours + ": " + minutes + " : " + seconds,
          done: false,
          paused: false,
          timeLoop: () => {}
        });
        this.intervalID = 0;
        return;
      } else if (paused) {
      } else if (!paused) {
        if (y === 0 && i + 1 < exerciseObj.length) {
          i++;
          y = exerciseObj[i].timeInSeconds;
          yMin = Math.floor(y / 60);
          ySec = y % 60;
        } else if (i === exerciseObj.length - 1 && y === 0) {
          i = 0;
          y = exerciseObj[i].timeInSeconds;
          yMin = Math.floor(y / 60);
          ySec = y % 60;
        }
        this.setState({
          nextExercise: exerciseObj[i + 1]
            ? exerciseObj[i + 1].exerciseName
            : "",
          exerciseName: exerciseObj[i].exerciseName,
          timeRemaining: yMin + ":  " + ySec + " remaining"
        });
        y--;
        yMin = Math.floor(y / 60);
        ySec = y % 60;
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
        this.setState({
          totalTime: hours + ": " + minutes + " : " + seconds
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  finish() {
    this.setState({
      done: true,
      exerciseName: "REST IT OUT YALL",
      timeRemaining: "That shit was bananas ya'll",
      nextExercise: ""
    });
  }

  pause() {
    let { paused } = this.state;
    if (paused) {
      this.setState({
        paused: !paused
      });
    } else {
      this.setState({
        paused: true
      });
    }
  }

  render() {
    let { totalTime, exerciseName, timeRemaining, nextExercise } = this.state;
    return (
      <div noValidate>
        <button onClick={this.exerciseLoop}>Start Workout</button>
        <h1>{exerciseName}</h1>
        <h1>{timeRemaining}</h1>
        <button onClick={this.finish}>Finish Workout</button>
        <button onClick={this.pause}>Continue Workout</button>
        <h1>{totalTime}</h1>
        {nextExercise && (
          <React.Fragment>
            <h1>Next exercise:</h1>
            <h1>{nextExercise}</h1>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default WorkoutComponent;
