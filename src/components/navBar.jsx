import React, { Component } from "react";

class navBar extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    fetch("localhost:5000/api/courses").then(response => console.log(response));
  }
  render() {
    return (
      <div className="header">
        <div className="bounds">
          <h1 class="header--logo">Courses</h1>
          <nav>
            <span className="signup" /> Sign Up
            <span className="signin">Sign In</span>
          </nav>
        </div>
      </div>
    );
  }
}

export default navBar;
