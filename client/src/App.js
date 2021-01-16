import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import "fontsource-roboto";
import Container from "@material-ui/core/Container";

// import the ToDoList component
import InputField from "./components/TextInput";
import TimeDropdown from "./components/TimeDropdown";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    "padding-top": "50px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <InputField className={classes.paper} />
          </Grid>
          <Grid item>
            <TimeDropdown className={classes.paper} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
