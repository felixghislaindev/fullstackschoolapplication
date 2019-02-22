import React from "react";

const timeMaterialNeeded = props => {
  const { CourseEstimateTime, CourseMaterials } = props;
  return (
    <React.Fragment>
      <div className="grid-25 grid-right">
        <div className="course--stats">
          <ul className="course--stats--list">
            <li className="course--stats--list--item">
              <h4>Estimated Time</h4>
              <h3>
                {CourseEstimateTime !== "" ? CourseEstimateTime : "2 Hours"}
              </h3>
            </li>
            <li className="course--stats--list--item">
              <h4>Materials Needed</h4>
              <ul>
                <li>{CourseMaterials}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default timeMaterialNeeded;
