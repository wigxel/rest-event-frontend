import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import StyledNav from '../styles/StyledNav';
import logo from '../assets/images/logo@2x.png';

const NavLink = props => (
  <Link activeClassName="active" {...props}>
    {props.children}
  </Link>
);

const Nav = () => {
  return (
    <StyledNav className="main-nav">
      <img src={logo} alt="logo" />
      <ul className="tab nav-links">
        <li>
          <NavLink exact to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">LOGIN</NavLink>
        </li>
        <li>
          <NavLink to="/signup">SIGNUP</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
