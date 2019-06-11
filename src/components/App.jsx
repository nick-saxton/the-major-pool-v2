import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import app from "../base";

import LogIn from "./LogIn";
import Navbar from "./Navbar";
import SignUp from "./SignUp";
import Tournament from "./Tournament";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      data: null,
      loading: true,
      showSignOutSuccess: false,
      wasLoggedIn: false
    };

    this.handleCloseSignOutNotification = this.handleCloseSignOutNotification.bind(
      this
    );
  }

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
          showSignOutSuccess: false,
          wasLoggedIn: true
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
          showSignOutSuccess: true
        });
      }
    });
  }

  handleCloseSignOutNotification() {
    this.setState({
      showSignOutSuccess: false
    });
  }

  handleSignOut() {
    app.auth().signOut();
  }

  render() {
    const {
      authenticated,
      loading,
      showSignOutSuccess,
      wasLoggedIn
    } = this.state;

    return (
      <>
        {!loading && (
          <Router>
            <Navbar
              authenticated={authenticated}
              onSignOut={this.handleSignOut}
            />
            <div className="section">
              <div className="container">
                {showSignOutSuccess && wasLoggedIn && (
                  <div className="notification is-success">
                    <button
                      className="delete"
                      onClick={this.handleCloseSignOutNotification}
                    />
                    You are now logged out.
                  </div>
                )}
                <Route
                  path="/"
                  exact
                  render={() => <Tournament name="PGA Championship" id="033" />}
                />
                <Route
                  path="/masters"
                  render={() => <Tournament name="The Masters" id="014" />}
                />
                <Route
                  path="/pga"
                  render={() => <Tournament name="PGA Championship" id="033" />}
                />
                <Route
                  path="/us"
                  render={() => <Tournament name="U.S. Open" id="026" />}
                />
                <Route
                  path="/british"
                  render={() => (
                    <Tournament name="The Open Championship" id="100" />
                  )}
                />
                <Route
                  path="/overall"
                  render={() => (
                    <Tournament
                      name="Overall"
                      id={["033", "014", "026", "100"]}
                    />
                  )}
                />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={LogIn} />
              </div>
            </div>
          </Router>
        )}
      </>
    );
  }
}

export default App;
