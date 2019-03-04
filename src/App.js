import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";

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
  signInhandler() {
    console.log("will sing user");
  }
  signupHandler = userData => e => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/users", {
      firstName: userData.firstName,
      lastName: userData.lastName,
      emailAddress: userData.emailAddress,
      password: userData.password
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Router>
        <React.Fragment>
          {/* setting up app routes to handle */}
          <Route exact path="/" component={Courses} />
          <Route exact path="/courses" component={CreateCourse} />
          <Route exact path="/courses/:id" component={CourseDetails} />
          <Route path="/courses/:id/update" component={UpdateCourse} />
          <Route path="/signin" component={() => <SignIn myProp="value" />} />
          <Route
            path="/signup"
            component={() => <SignUp signupHandle={this.signupHandler} />}
          />
          {/* <Route path='/signout' Component={}/> */}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
