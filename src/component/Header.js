import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="nav-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                  }}
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                  }}
                  className="nav-link"
                  to="/List"
                >
                  List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                  }}
                  className="nav-link"
                  to="/Contact"
                >
                  Contact
                </NavLink>
                
              </li>
              
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
