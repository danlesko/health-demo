// src/components/NavBar.js

import React, {useEffect} from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    if(!loading) {
      loginWithRedirect({})
    }
  });

  return (
      <div>
        {!isAuthenticated && (
            <div>...Loading</div>
        )}

        {isAuthenticated && (
            <span>
        <Link to="/">Home</Link>&nbsp;
              <Link to="/profile">Profile</Link>
      </span>
        )}

        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      </div>
  );
};

export default NavBar;