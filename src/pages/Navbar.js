import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to='/'>login</NavLink>
      <br />
      <NavLink to='/profile'>prof</NavLink>
    </div>
  );
};

export default Navbar;
