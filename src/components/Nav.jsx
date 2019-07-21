import React from 'react';
import { Link } from 'react-router-dom';
import StyledNav from '../styles/StyledNav';

const Nav = () => {
  return (
    <StyledNav>
      <img src="" alt="logo" />
      <ul>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/login">
          <li>LOGIN</li>
        </Link>
        <Link to="/signup">
          <li>SIGNUP</li>
        </Link>
      </ul>
    </StyledNav>
  );
};

export default Nav;
