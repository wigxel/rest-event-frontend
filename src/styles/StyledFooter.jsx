import styled from 'styled-components';

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  padding: 0 100px;
  font-weight: 1px;

  background: ${props => props.theme.bgcolorinverse};
  color: ${props => props.theme.color};
  border: ${props => props.theme.border};

  /* ul {
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
  } */
`;

export default StyledNav;
