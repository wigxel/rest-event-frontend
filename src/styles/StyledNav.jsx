import styled from 'styled-components';

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  padding: 0 100px;
  font-family: var(--heading-font);
  background: ${props => props.theme.bgcolor};
  color: ${props => props.theme.color};
  border: ${props => props.theme.border};

  ul {
    list-style: none;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;

    li {
      color: ${props => props.theme.color};
    }

    a {
      font-weight: bold;
      letter-spacing: 4px;
      padding: 0.5rem 15px;
      text-decoration: none;
      display: inline-block;
      box-sizing: border-box;
    }
  }
`;

export default StyledNav;
