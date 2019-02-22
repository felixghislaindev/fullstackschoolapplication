import React from "react";
// importing component for course creation
import ErrorMessage from "./errorMeassages";
import NavSection from "../CourseDetails/navSection";
import CourseForm from "./courseForm";
const createCourse = () => {
  return (
    <React.Fragment>
      <NavSection />
      <div className="bounds course--detail">
        <h1>Create Course</h1>
        <div>
          <ErrorMessage />
          <CourseForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default createCourse;
