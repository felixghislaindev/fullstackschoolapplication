import React from "react";
// importing component for course update feature
import NavSection from "../CourseDetails/navSection";
import UpdateForm from "./UpdateForm";
const courseUpdate = () => {
  return (
    <React.Fragment>
      <NavSection />
      <div className="bounds course--detail">
        <div>
          <h1>Update Course</h1>
          <UpdateForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default courseUpdate;
