import React from 'react';
import StyledFooter from '../styles/StyledFooter';

const Footer = () => {
  return (
    <StyledFooter>
      Copyright Rest Events {new Date().getFullYear()}
    </StyledFooter>
  );
};

export default Footer;
