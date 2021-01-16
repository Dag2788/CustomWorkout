import React from "react";
import "./App.css";

import 'fontsource-roboto';
import Container from '@material-ui/core/Container';


// import the ToDoList component
import InputField from "./components/TextInput";
import TimeDropdown from "./components/TimeDropdown";

function App() {
  return (
    <div>
      <Container maxWidth="sm">
        <InputField />
        <TimeDropdown />
      </Container>
    </div>
  );
}
export default App;