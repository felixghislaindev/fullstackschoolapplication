import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

// importing components
import NavBar from "./components/navBar";
import Courses from "./components/Courses/courses";
import NewCourse from "./components/newCourse";
import CourseDetails from "./components/CourseDetails/courseDetails";
import SignIn from "./components/usersPage/singIn";
import SignUp from "./components/usersPage/singUp";
import CreateCourse from "./components/CreateCoure/createCourse";
import UpdateCourse from "./components/UpdateCourse/courseUpdate";
// importing css
import "./styles/global.css";

class App extends Component {
  // creating state for courses
  state = {};

  render() {
    return (
      <Router>
        <React.Fragment>
          {/* setting up app routes to handle */}
          <Route exact path="/" component={Courses} />
          <Route exact path="/courses" component={CreateCourse} />
          <Route exact path="/courses/:id" component={CourseDetails} />
          <Route path="/courses/:id/update" component={UpdateCourse} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          {/* <Route path='/signout' Component={}/> */}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
