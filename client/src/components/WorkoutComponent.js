import React, { Component } from "react";

/*eslint-disable */

/*eslint-enable */

class WorkoutComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      done: false,
      paused: false,
      i: 0,
      y: 30,
      hours: 0,
      minutes: 0,
      seconds: -1,
      exerciseName: "",
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

    var ex = [
      "Squats",
      "Push Ups",
      "Lounges",
      "Standing Power Jacks",
      "Squat Kicks",
      "Tricep Dips",
      "Leg Raises",
      "Oblique Push Ups",
      "Bicycle Abs",
      "Plank",
      "Rest"
    ];
    let i = 0;
    let y = 30;
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
          i: 0,
          y: 30,
          hours: 0,
          minutes: 0,
          seconds: -1,
          timeLoop: () => {}
        });
        return;
      } else if (paused) {
      } else if (!paused) {
        if (y === 0 && i + 1 < ex.length) {
          i++;
          y = 30;
        } else if (i === ex.length - 1 && y === 0) {
          i = 0;
          y = 30;
        }

        this.setState({
          exerciseName: ex[i],
          timeRemaining: y + " seconds remaining"
        });

        y--;
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
          totalTime: hours + ": " + minutes + " : " + seconds,
          i,
          y,
          hours,
          minutes,
          seconds
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
      timeRemaining: "That shit was bananas ya'll"
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
    let { totalTime, exerciseName, timeRemaining, done } = this.state;
    return (
      <div noValidate>
        <button onClick={this.exerciseLoop}>Start Workout</button>

        <h1>{exerciseName}</h1>

        <h1>{timeRemaining}</h1>

        <button onClick={this.finish}>Finish Workout</button>

        <button onClick={this.pause}>Continue Workout</button>

        <h1>{totalTime}</h1>
      </div>
    );
  }
}

export default WorkoutComponent;
