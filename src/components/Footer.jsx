import React from 'react';
import StyledFooter from '../styles/StyledFooter';
import { Container } from '../components/layouts';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="flex justify-center items-center">
        <Container />
      </div>
      <div className="base">
        <Container>Copyright Rest Events {new Date().getFullYear()}</Container>
      </div>
    </StyledFooter>
  );
};

export default Footer;
