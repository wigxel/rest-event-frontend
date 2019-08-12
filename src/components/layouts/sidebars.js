import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { color } from '../../styles/helpers';

const FlatListStyle = styled.div`
  width: 100%;
  box-sizing: border-box;

  li {
    width: auto;
    display: block;

    a {
      display: block;
      border: 0 solid 5px;
      padding: 1rem 1.5rem;
      color: ${color('grey')};
      transition: border 0.3s cubic-bezier(0.74, 1.26, 0.99, 0.97);

      &.active {
        color: ${color('primary')};
        background-color: ${color('whitesmoke')};
        border-left: solid 5px ${color('primary')};
      }
    }
  }
`;

export const FlatList = props => {
  return <FlatListStyle>{props.children}</FlatListStyle>;
};

const FlatListItem = props => {
  return <li>{props.children}</li>;
};

FlatList.Item = FlatListItem;

const FlatListLink = props => {
  return (
    <FlatList.Item>
      <Link {...props}>{props.children}</Link>
    </FlatList.Item>
  );
};
FlatList.Link = FlatListLink;
