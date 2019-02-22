import React from "react";

const navBar = () => {
  return (
    <div className="header">
      <div className="bounds">
        <h1 className="header--logo">Courses</h1>
        <nav>
          <span className="signup" /> Sign Up
          <span className="signin">Sign In</span>
        </nav>
      </div>
    </div>
  );
};

export default navBar;
