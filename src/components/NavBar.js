// src/components/NavBar.js

import React, {useEffect} from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    if(!loading && !isAuthenticated) {
      loginWithRedirect({})
    }
  });

  const logoutReset = () => {
    logout()
  }

  return (
      <div>
        {!isAuthenticated && (
            <div>...Loading</div>
        )}

        {isAuthenticated && (
          <Nav fill defaultActiveKey="/" as="ul">
            <Nav.Item as="li">

                <Button variant="link">
                  <Link to="/">Home</Link>
                </Button>

            </Nav.Item>
            <Nav.Item as="li">

                <Button variant="link">
                  <Link to="/profile">Profile</Link>
                </Button>

            </Nav.Item>
            <Nav.Item as="li">

                <Button variant="link" onClick={() => logoutReset()}>Logout</Button>

            </Nav.Item>
          </Nav>
        )}

        {/*{isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}*/}
      </div>
  );
};

export default NavBar;