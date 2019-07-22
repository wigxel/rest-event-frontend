import React from 'react';
import { Link } from 'react-router-dom';
import StyledNav from '../styles/StyledNav';
import logo from '../assets/images/logo@2x.png';

const Nav = () => {
  return (
    <StyledNav>
      <img src={logo} alt="logo" />
      <ul className="tab">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link to="/signup">SIGNUP</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
