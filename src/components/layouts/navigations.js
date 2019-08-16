import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { color } from '../../styles/helpers';
import { Container } from '.';
import logo_single from '../../assets/svgs/logo.svg';

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  min-height: 60px;
  position: sticky;
  top: 0;
  z-index: 500;
  align-items: center;
  background-color: ${color('navbar')};

  > div {
    position: relative;
    left: 1rem;

    img {
      width: 50px;
      height: 50px;
    }
  }

  ul.nav-links {
    a {
      position: relative;
      font-family: var(--heading-font);
      display: inline-block;
      line-height: 60px;
      font-weight: bold;
      height: 60px;
      overflow: hidden;
      color: ${color('greylight')};
      font-weight: 500;
      text-transform: uppercase;
      padding: 0 1rem;
      font-size: 16px;

      &::before {
        content: '';
        width: 100%;
        height: 8px;
        border-radius: 4px;
        display: block;
        position: absolute;
        top: -8px;
        left: 0;
        background-color: ${color('primary')};
        transition: top 0.3s;
      }
    }

    a.active {
      color: ${color('primary')};
    }

    a.active:before {
      top: -2px;
    }
  }
`;

export const DashboardNav = () => {
  return (
    <StyledNav className="">
      <div>
        <img src={logo_single} alt="brand_logo" />
      </div>
      <Container>
        <div className="flex justify-between items-center">
          <ul className="nav-links">
            <Link to="/dashboard/overview">Dashboard</Link>
            <Link to="/dashboard/projects">Projects</Link>
            <Link to="/dashboard/account">Account</Link>
          </ul>
          <div>.avatar</div>
        </div>
      </Container>
    </StyledNav>
  );
};
