import React, { Component } from "react";
import Axios from "axios";
// importing component for the course detail page
import NavSec from "./navSection";
import CourseButtons from "./courseButtons";
import TitleDesc from "./titleAndDesc";
import TimeAndMaterials from "./timeAndMaterial";
class courseDetails extends Component {
  state = {
    course: {},
    user: {}
  };

  componentDidMount() {
    const courseId = this.props.match.params.id;
    Axios.get(`http://localhost:5000/api/courses/${courseId}`)
      .then(res => res)
      .then(course => course.data.Courses)
      .then(course => {
        this.setState({
          course: course,
          user: course.user
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <React.Fragment>
        <NavSec />
        <CourseButtons />
        <div className="bounds course--detail">
          <TitleDesc
            courseTitle={this.state.course.title}
            courseDesc={this.state.course.description}
            author={this.state.user}
          />
          <TimeAndMaterials
            CourseEstimateTime={this.state.course.estimatedTime}
            CourseMaterials={this.state.course.materialsNeeded}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default courseDetails;
