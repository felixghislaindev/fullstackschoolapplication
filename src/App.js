import React, { Component } from "react";

// importing components
import NavBar from "./components/navBar";
import Courses from "./components/courses";
import NewCourse from "./components/newCourse";

// importing css
import "./styles/global.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Courses />
        <Courses />
        <Courses />
        <NewCourse />
      </React.Fragment>
    );
  }
}

export default App;
