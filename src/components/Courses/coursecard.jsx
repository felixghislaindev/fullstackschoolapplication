import React from "react";
import { Link } from "react-router-dom";
const courses = props => {
  return (
    <div className="bounds">
      <div className="grid-33">
        <Link
          className="course--module course--link"
          to={`/courses/${props.courseId}`}
        >
          <h4 className="course--label">Course</h4>
          <h3 className="course--title">{props.courseTile}</h3>
        </Link>
      </div>
    </div>
  );
};

export default courses;
