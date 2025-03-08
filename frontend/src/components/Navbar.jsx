import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/create-event">
        <h4>Create Event</h4>
      </Link>
      <Link to="/adminpanel">
        <h4>Admin Panel</h4>
      </Link>
      <Link to="/about">
        <h4>About Us</h4>
      </Link>
    </nav>
  );
};

export default Navbar;
