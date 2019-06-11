import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ authenticated, onSignOut }) => {
  const [burgerExpanded, setBurgerExpanded] = useState(false);

  return (
    <nav className="navbar is-success">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item has-text-weight-bold">
          The Major Pool
        </Link>

        <div
          className={`navbar-burger burger ${
            burgerExpanded ? "is-active" : ""
          }`}
          onClick={() => setBurgerExpanded(!burgerExpanded)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={`navbar-menu ${burgerExpanded ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link to="/masters" className="navbar-item">
            The Masters
          </Link>
          <Link to="/pga" className="navbar-item">
            PGA Championship
          </Link>
          <Link to="/us" className="navbar-item">
            U.S. Open
          </Link>
          <Link to="/british" className="navbar-item">
            The Open Championship
          </Link>
          <Link to="/overall" className="navbar-item">
            Overall
          </Link>
        </div>
        <div className="navbar-end">
          {authenticated ? (
            <>
              <Link to="/" className="navbar-item" onClick={onSignOut}>
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup" className="navbar-item">
                Sign Up
              </Link>
              <Link to="/login" className="navbar-item">
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
