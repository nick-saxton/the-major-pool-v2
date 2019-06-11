import React from "react";
import { withRouter } from "react-router-dom";

import app from "../base";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.handleSignUp = this.handleSignUp.bind(this);
  }

  async handleSignUp(event) {
    event.preventDefault();

    const { name, email, password, passwordConfirm } = event.target.elements;

    if (password.value === passwordConfirm.value) {
      try {
        const user = await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);

        await app
          .firestore()
          .collection("users")
          .doc(user.user.uid)
          .set({
            name: name.value
          });

        this.props.history.push("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Passwords don't match!");
    }
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-half">
          <h1 className="title">Sign Up</h1>
          <form onSubmit={this.handleSignUp}>
            <div className="field">
              <label htmlFor="name" className="label">
                Name
              </label>
              <div className="control">
                <input type="text" name="name" className="input" />
              </div>
            </div>
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
              <label htmlFor="passwordConfirm" className="label">
                Confirm Password
              </label>
              <div className="control">
                <input
                  type="password"
                  name="passwordConfirm"
                  className="input"
                />
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

export default withRouter(SignUp);
