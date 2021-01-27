import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';
import UserContext from "./UserContext";

const Navigation = ({ logout }) => {
  const { currentUser } = useContext(UserContext);

  const loggedInNav = (
    <Navbar expand="md" className="Navigation">
      <Navbar.Brand href="/" className="nav-brand">Jobly</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Item className="mr-4">
            <NavLink exact to="/companies">Companies</NavLink>
          </Nav.Item>
          <Nav.Item className="mr-4">
            <NavLink exact to="/jobs">Jobs</NavLink>
          </Nav.Item>
          <Nav.Item className="mr-4">
            <NavLink exact to="/profile">Profile</NavLink>
          </Nav.Item>
          <Nav.Item className="mr-2">
            <NavLink to="/" onClick={logout}>Logout</NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

  const loggedOutNav = (
    <Navbar expand="md" className="Navigation">
      <Navbar.Brand href="/" className="nav-brand">Jobly</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Item className="mr-2">
          <NavLink exact to="/login">Login</NavLink>
        </Nav.Item>
      </Nav>
    </Navbar>
  );

  return (
    <div>
      { currentUser ? loggedInNav : loggedOutNav}
    </div>
  );
}

export default Navigation;

