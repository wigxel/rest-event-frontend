import styled from 'styled-components';

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  padding: 0 100px;

  background: ${props => props.theme.bgcolor};
  color: ${props => props.theme.color};
  border: ${props => props.theme.border};

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 300px;

    a {
      text-decoration: none;

      li {
          color: ${props => props.theme.color};
      }
    }
  }
`;

export default StyledNav;
