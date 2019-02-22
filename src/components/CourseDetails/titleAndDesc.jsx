import React from "react";
const titleDesc = props => {
  const { courseTitle, courseDesc, author } = props;
  return (
    <React.Fragment>
      <div className="grid-66">
        <div className="course--header">
          <h4 className="course--label">Course</h4>
          <h3 className="course--title">{courseTitle}</h3>
          <p>
            By {author.firstName} {author.lastName}
          </p>
        </div>
        <div className="course--description">
          <p>{courseDesc}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default titleDesc;
