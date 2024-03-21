import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUser } from "store/auth/selector";

const NavList = () => {
  const { name } = useSelector(selectUser);
  return (
    <>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink aria-label="Welcome page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink aria-label="Nannies list page" to="/nannies">
            Nannies
          </NavLink>
        </li>
      </ul>

      <ul className="user-inform-list">
        <li className="user-inform-svg">
          <div className="svg-wrap">svg</div>
          <p>{name}</p>
        </li>
        <li className="user-inform-btn">Log Out</li>
      </ul>
    </>
  );
};

export default NavList;
