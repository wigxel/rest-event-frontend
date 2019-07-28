import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/helpers';

const JumbotronStyle = styled.div`
  min-height: calc(100vh - 80px);
  background-color: ${props => props.theme.primary};
`;

const FourColumnGridStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  position: relative;
  ${media.tabletLand`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${media.tabletPort`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.phone`
    grid-template-columns: repeat(1, 1fr);
  `}
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