import React from "react";
import { withRouter } from "react-router-dom";

import app from "../base";

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogIn = this.handleLogIn.bind(this);
  }

  async handleLogIn(event) {
    event.preventDefault();

    const { email, password } = event.target.elements;

    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);

      this.props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-half">
          <h1 className="title">Log In</h1>
          <form onSubmit={this.handleLogIn}>
            <div className="field">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="control">
                <input type="email" name="email" className="input" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="control">
                <input type="password" name="password" className="input" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-link">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LogIn);
