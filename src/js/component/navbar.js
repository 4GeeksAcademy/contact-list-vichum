import React from "react";
import { Link } from "react-router-dom";
import { AddContact } from "../views/addContact";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-container">
      <Link to="/" style={{ color: "transparent" }}>
        <h3>Contact List</h3>
      </Link>
      <div className="ml-auto">
        <Link to="/AddContact" className="btn btn-success navbar-button">
          Add new contact
        </Link>
      </div>
    </nav>
  );
};