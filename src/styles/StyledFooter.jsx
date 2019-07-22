import styled from 'styled-components';

const StyledNav = styled.div`
  > * {
    padding: 15px;
  }

  .base {
    color: ${props => props.theme.primary};
    background: ${props => props.theme.whitesmoke};
  }
`;

export default StyledNav;
