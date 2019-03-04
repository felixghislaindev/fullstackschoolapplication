import React, { Component } from "react";
import Axios from "axios";
class courseButton extends Component {
  state = {};
  //will delete the course and and redirect to the home page
  deleteCourse(id) {
    console.log(id);
  }
  render() {
    const { courseId } = this.props;
    return (
      <React.Fragment>
        <hr />

        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100">
              <span>
                <a className="button" href={`/courses/${courseId}/update`}>
                  Update Course
                </a>
                <a
                  className="button"
                  onClick={() => this.deleteCourse(courseId)}
                >
                  Delete Course
                </a>
              </span>
              <a className="button button-secondary">Return to List</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default courseButton;
