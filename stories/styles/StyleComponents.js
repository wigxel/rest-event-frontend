import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Light } from '../../src/styles/Theme';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Quicksand, sans-serif;
  }
`;

export const Theme = props => (
  <ThemeProvider theme={Light}>
    <>
      {props.children}
      <GlobalStyle />
    </>
  </ThemeProvider>
);
