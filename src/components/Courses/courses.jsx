import React, { Component } from "react";
import Axios from "axios";
// importing components for the courses page
import NavBar from "../navBar";
import NewCourse from "../newCourse";
import CourseCard from "./coursecard";
class Courses extends Component {
  state = {
    courses: []
  };

  // popularing the the course state which will then be used to render the courses from the backend
  componentDidMount() {
    Axios.get("http://localhost:5000/api/courses")
      .then(res => res)
      .then(course => course.data.Courses)
      .then(courses => {
        this.setState({
          courses: courses
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        {this.state.courses.map((item, i) => {
          return (
            <CourseCard key={i} courseId={item._id} courseTile={item.title} />
          );
        })}
        <NewCourse />
      </React.Fragment>
    );
  }
}

export default Courses;
