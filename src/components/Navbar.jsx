import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link style={{ textDecoration: "none" }} to="/">
        Properties
      </Link>
    </nav>
  );
}
