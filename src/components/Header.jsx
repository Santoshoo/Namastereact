import React, { useState } from "react";
import {Link} from "react-router-dom";
export const Title = () => <h1 id="h1">Food Villa</h1>;

//react component

export const Header = () =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      {<Title />}
      <div className="nav-items">
        <ul className="nav-items-list">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/">
            <li>Contact</li>
          </Link>

          <li>Cart</li>
        </ul>
      </div>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
