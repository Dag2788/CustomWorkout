import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import Grid from "@material-ui/core/Grid";
import SetComponent from "./SetComponent";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { borders } from "@material-ui/system";

/*eslint-disable */
type Props = {
  exerciseName: String,
  handleInput: Function
};
/*eslint-enable */

class SetListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      setList: [
        {
          name: "",
          exerciseList: []
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.deleteSet = this.deleteSet.bind(this);
    this.addSet = this.addSet.bind(this);
  }

  handleChange(event, index, name) {
    let { setList } = this.state;
    console.log(name);
    if (setList[index]) {
      if (name) {
        setList[index].name = name;
      }
      setList[index].exerciseList = event;
      console.log("SetList");
      console.log(setList);
      this.setState({ setList });
    }
  }

  deleteSet(index) {
    let { setList } = this.state;
    if (setList[index]) {
      delete setList[index];
      this.setState({ setList });
    }
  }

  addSet() {
    let { setList } = this.state;
    let newSet = {
      name: "",
      exerciseList: []
    };
    setList.push(newSet);
    this.setState({
      setList
    });
  }

  render() {
    let { setList } = this.state;
    return (
      <div>
        <Grid container justify="center" item xs={12} style={{ marginTop: 10 }}>
          <Button onClick={this.addSet}>
            <AddCircleIcon
              fontSize="large"
              style={{
                paddingLeft: isMobile ? -10 : 0,
                marginTop: 15,
                color: "green"
              }}
            />
          </Button>
          {setList.length > 0 &&
            setList.map((exercise, index) => {
              return (
                <Grid container justify="center" direction="row" key={index}>
                  <Grid item>
                    <SetComponent
                      deleteSet={this.deleteSet}
                      index={index}
                      handleChange={this.handleChange}
                    />
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
      </div>
    );
  }
}

export default SetListComponent;
