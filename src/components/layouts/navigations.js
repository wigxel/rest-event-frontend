import React from 'react';
import { Container, Tab } from '.';
import styled from 'styled-components';
import { color } from '../../styles/helpers';
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

  .nav-links {
    a {
      position: relative;
      font-family: var(--heading-font);
      display: inline-block;
      line-height: 60px;
      font-weight: bold;
      margin-right: 1rem;
      margin-left: 1rem;
      height: 60px;
      overflow: hidden;
      font-weight: 500;
      padding: 0 1rem;
      font-size: 16px;
      text-transform: uppercase;
      color: ${color('greylight')};

      &::before {
        left: 0;
        top: -8px;
        content: '';
        width: 100%;
        height: 8px;
        display: block;
        position: absolute;
        border-radius: 4px;
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

export const DashboardNav = (props) => {
  return (
    <StyledNav className="">
      <div>
        <img src={logo_single} alt="brand_logo" />
      </div>
      <Container>
        <div className="flex justify-between items-center">
          <Tab className="nav-links">
            {props.children}
          </Tab>
          <div>.avatar</div>
        </div>
      </Container>
    </StyledNav>
  );
};
