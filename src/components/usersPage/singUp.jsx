import React, { Component } from "react";
class signUp extends Component {
  state = {
    newUser: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      confirmPassword: ""
    }
  };
  handleFirstName = e => {
    // first name
    let value = e.target.value;
    // setting the state for the firstname
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        firstName: value
      }
    }));
  };
  handleLastName = e => {
    // last name
    let value = e.target.value;
    // setting the state for the firstname
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        lastName: value
      }
    }));
  };
  handleEmailAddress = e => {
    let value = e.target.value;
    // setting the state for the firstname
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        emailAddress: value
      }
    }));
  };
  handlePassword = e => {
    let value = e.target.value;
    // setting the state for the firstname
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        password: value
      }
    }));
  };
  handlePasswordConfirmation = e => {
    let value = e.target.value;
    // setting the state for the firstname
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        confirmPassword: value
      }
    }));
  };

  handleFormSubmit() {}
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="bounds">
            <h1 className="header--logo">Courses</h1>
            <nav>
              <a className="signup" href="sign-up.html">
                Sign Up
              </a>
              <a className="signin" href="sign-in.html">
                Sign In
              </a>
            </nav>
          </div>
        </div>
        <hr />
        <div className="bounds">
          <div className="grid-33 centered signin">
            <h1>Sign Up</h1>
            <div>
              <form onSubmit={this.props.signupHandle(this.state.newUser)}>
                <div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className=""
                    placeholder="First Name"
                    value={this.state.newUser.firstName}
                    onChange={this.handleFirstName}
                  />
                </div>
                <div>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className=""
                    placeholder="Last Name"
                    value={this.state.newUser.lastName}
                    onChange={this.handleLastName}
                  />
                </div>
                <div>
                  <input
                    id="emailAddress"
                    name="emailAddress"
                    type="text"
                    className=""
                    placeholder="Email Address"
                    value={this.state.newUser.emailAddress}
                    onChange={this.handleEmailAddress}
                  />
                </div>
                <div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className=""
                    placeholder="Password"
                    value={this.state.newUser.password}
                    onChange={this.handlePassword}
                  />
                </div>
                <div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className=""
                    placeholder="Confirm Password"
                    value={this.state.newUser.confirmPassword}
                    onChange={this.handlePasswordConfirmation}
                  />
                </div>
                <div className="grid-100 pad-bottom">
                  <button className="button" type="submit">
                    Sign Up
                  </button>
                  <button
                    className="button button-secondary"
                    // onclick="event.preventDefault(); location.href='index.html';"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            <p>&nbsp;</p>
            <p>
              Already have a user account? <a href="sign-in.html">Click here</a>{" "}
              to sign in!
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default signUp;
