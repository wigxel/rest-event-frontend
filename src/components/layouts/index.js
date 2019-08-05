import React from 'react';
import styled from 'styled-components';
// import { media } from '../../styles/helpers';

const JumbotronStyle = styled.div`
  min-height: calc(100vh - 80px);
  background-color: ${props => props.theme.primary};
`;

const FourColumnGridStyle = styled.section`
  display: grid;
  grid-gap: 1.5rem;
  position: relative;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
`;

export const Jumbotron = props => {
  return <JumbotronStyle {...props}>{props.children}</JumbotronStyle>;
};

export const Container = props => {
  return <div className="container mx-auto">{props.children}</div>;
};

export const FourColumnGrid = props => {
  return <FourColumnGridStyle {...props}>{props.children}</FourColumnGridStyle>;
};

export const VendorGroup = props => {
  const Display = props.grid ? FourColumnGridStyle : ({ children }) => <div className="stack">{children}</div>;
  return <Display>{props.children}</Display>;
};

export * from './imageHolders'
