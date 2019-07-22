import React from 'react';
import styled from 'styled-components';

const JumbotronStyle = styled.div`
  min-height: calc(100vh - 80px);
  background-color: ${props => props.theme.primary};
`;

export const Jumbotron = props => {
  return <JumbotronStyle {...props}>{props.children}</JumbotronStyle>;
};

export const Container = props => {
  return <div className="container mx-auto">{props.children}</div>;
};
