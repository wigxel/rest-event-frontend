import styled from 'styled-components';

const StyledNav = styled.nav`
  background: ${props => props.theme.bgcolor};
  color: ${props => props.theme.color};
  border: ${props => props.theme.border};
  display: flex;
  min-height: 80px;
  padding: 0 100px;
  align-items: center;
  justify-content: space-between;
  font-family: var(--heading-font);

  .nav-links {
    @media screen and (max-width: 450px) {
      bottom: 0;
      z-index: 300;
      color: white;
      position: fixed;
      height: 50px;
      right: 0;
      left: 0;
      background-color: white;

      &::after {
        content: '';
        bottom: 0;
        width: 100%;
        z-index: -1;
        height: 50px;
        position: absolute;
      }
    }
  }

  ul {
    list-style: none;
    align-items: center;
    display: inline-flex;
    justify-content: space-around;

    li {
      color: ${props => props.theme.color};
    }

    a {
      font-weight: bold;
      color: ${a => a.theme.color};
      letter-spacing: 1.2px;
      padding: 0.5rem 15px;
      text-decoration: none;
      display: inline-block;
      box-sizing: border-box;

      &.active {
        color: ${a => a.theme.primary};
      }
    }
  }
`;

export default StyledNav;
