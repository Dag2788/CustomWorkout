import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "fontsource-roboto";
import ExerciseComponent from "./ExerciseComponent";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { isMobile } from "react-device-detect";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import FormControlLabel from "@material-ui/core/FormControlLabel";

/*eslint-disable */
type Props = {
  deleteSet: Function,
  index: Number,
  handleChange: Function
};
/*eslint-enable */

class SetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      expanded: false,
      totalTime: "0 min 0 secs",
      exerciseList: [
        {
          timeInSeconds: 30,
          displayText: "30 seconds",
          exerciseName: ""
        }
      ]
    };
    this.handleName = this.handleName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addNewExercise = this.addNewExercise.bind(this);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.deleteTheSet = this.deleteTheSet.bind(this);
    this.calculateTotalTime = this.calculateTotalTime.bind(this);
  }

  handleInput(value, index) {
    this.setState(prevState => {
      let exerciseList = Object.assign([], prevState.exerciseList);
      exerciseList[index] = value;
      let totalTime = this.calculateTotalTime(exerciseList);
      return { exerciseList, totalTime };
    });
  }

  addNewExercise() {
    let { handleChange, index } = this.props;
    let { exerciseList, name } = this.state;
    exerciseList.push({
      timeInSeconds: 30,
      displayText: "30 seconds",
      exerciseName: ""
    });
    handleChange(exerciseList, index, name);
    this.setState({
      exerciseList,
      totalTime: this.calculateTotalTime(exerciseList)
    });
  }

  deleteExercise(index) {
    let { handleChange } = this.props;
    let { exerciseList, name } = this.state;
    delete exerciseList[index];
    handleChange(exerciseList, index, name);
    this.setState({
      exerciseList,
      totalTime: this.calculateTotalTime(exerciseList)
    });
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  deleteTheSet() {
    let { deleteSet, index } = this.props;
    deleteSet(index);
  }

  calculateTotalTime(exerciseList) {
    let seconds = exerciseList.reduce(function(a, b) {
      return a + parseInt(b.timeInSeconds);
    }, 0);
    let yMin = Math.floor(seconds / 60);
    let ySec = seconds % 60;
    let value = "";
    if (yMin <= 1) {
      value = yMin + " min  " + ySec + " secs";
    } else if (yMin >= 60) {
      let hr = Math.floor(yMin / 60);
      let min = yMin % 60;
      value = hr + " hr " + min + " mins  " + ySec + " secs";
    } else {
      value = yMin + " mins  " + ySec + " secs";
    }
    return value;
  }

  render() {
    let { exerciseList, name, totalTime } = this.state;
    return (
      <div>
        <Grid container justify="center" item xs={12} style={{ marginTop: 10 }}>
          <Grid container justify="center" direction="row" spacing={2}>
            <Accordion
              style={{
                marginBottom: 10
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions1-content"
                id="additional-actions1-header"
              >
                <Grid container justify="center" direction="row" spacing={3}>
                  <Grid item xs={4} sm={4}>
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={event => event.stopPropagation()}
                      onFocus={event => event.stopPropagation()}
                      control={
                        <TextField
                          onChange={this.handleName}
                          onBlur={this.handleName}
                          id="outlined-basic"
                          label="Set Name"
                          variant="outlined"
                          value={name ? name : ""}
                        />
                      }
                      label=""
                    />
                  </Grid>
                  <Grid item xs={5} sm={5}>
                    <Typography
                      style={{
                        marginTop: 15
                      }}
                    >
                      {totalTime}{" "}
                    </Typography>{" "}
                  </Grid>
                  <Grid item xs={2} sm={2}>
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={event => event.stopPropagation()}
                      onFocus={event => event.stopPropagation()}
                      control={
                        <Button onClick={this.deleteTheSet}>
                          <DeleteIcon
                            fontSize="small"
                            style={{
                              marginTop: 10,
                              paddingLeft: isMobile ? -10 : 0,
                              color: "red"
                            }}
                          />
                        </Button>
                      }
                      label=""
                    />
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Grid item xs={12} style={{ marginTop: 10 }}>
                  <Grid>
                    <TextField
                      onChange={this.handleName}
                      onBlur={this.handleName}
                      id="outlined-basic"
                      label="Set Name"
                      variant="outlined"
                      value={name ? name : ""}
                      style={{ width: isMobile ? 150 : 200 }}
                    />

                    {exerciseList.length > 0 &&
                      exerciseList.map((exercise, index) => {
                        return (
                          <Grid
                            container
                            justify="center"
                            direction="row"
                            key={index}
                          >
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
                  </Grid>
                  <Grid container justify="center" direction="row" spacing={1}>
                    <Grid item xs={9} sm={9}>
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
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SetComponent;
