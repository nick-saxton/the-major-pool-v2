import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Tournament from "./Tournament";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  render() {
    return (
      <Router>
        <Navbar />
        <div className="section">
          <div className="container">
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
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
