import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles/helpers';
import Taby from './Tab';
import Stacky from './Stack';

export const Tab = Taby;
export const Stack = Stacky;

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

const SidebarStyle = styled.div`
  background-color: ${color('navbar')};
  min-height: calc(100vh - 60px);
  position: sticky;
  top: 60px;
`;

export const Sidebar = props => {
  return <SidebarStyle>{props.children}</SidebarStyle>;
};

export const TwoColumns = props => {
  const [aside, section] = props.children;

  return (
    <>
      <div className="flex">
        <div className="w-1/5">{aside}</div>
        <div className="flex-1 p-5">{section}</div>
      </div>
    </>
  );
};

export const ThreeColumns = props => {
  const [aside, section, third] = props.children;

  return (
    <section className="flex">
      <aside className="w-1/5">{aside}</aside>
      <section className="flex-1 p-5">{section}</section>
      <aside className="w-1/5">{third}</aside>
    </section>
  );
};

export const FourColumnGrid = props => {
  return <FourColumnGridStyle {...props}>{props.children}</FourColumnGridStyle>;
};

export const VendorGroup = props => {
  const Display = props.grid
    ? FourColumnGridStyle
    : ({ children }) => <Stack>{children}</Stack>;
  return <Display>{props.children}</Display>;
};

const Grid = styled(FourColumnGridStyle)`
  justify-content: flex-start;
  grid-template-columns: repeat(auto-fill, ${a => a.width}px);
`;

export const GridView = props => <Grid {...props} />;
GridView.defaultProps = {
  width: 200
};

export * from './imageHolders';
export * from './navigations';
export * from './sidebars';
