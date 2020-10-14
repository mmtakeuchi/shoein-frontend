import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/brands">Brands</NavLink>
      </li>
      <li>
        <NavLink to="/shoes">Shoes</NavLink>
      </li>
      <li>
        <NavLink to="/shoes/new">Create Shoe</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
