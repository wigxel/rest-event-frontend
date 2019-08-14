import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import MaterialIcon from 'material-icons-react';

import thumbnail from '../../assets/images/vendor_logo.png';
import chevronDown from '../../assets/svgs/arrow-down.svg';
import { color, withProp } from '../../styles/helpers';
import { Tab } from '../layouts';
import FlatList from './FlatList';
import Collapsible from './Collapsible';

const VendorAccordStyle = styled.li`
  width: 100%;
  padding: 1rem 0.5rem 0.5rem;
  box-sizing: border-box;
  display: grid !important;
  transition: all 0.3s ease-out;
  grid-template-columns: 1fr auto;

  & + * {
    border-top: solid 1px ${color('whitesmoke')};
  }

  button {
    border: none;
    cursor: pointer;
    appearance: none;
    background: transparent;
    transform: rotateX(0);
    transition: all 0.3s ease-in-out;
  }

  .thumbnail {
    width: 26px;
    height: 26px;
    margin-right: 0.5rem;
  }

  > div {
    display: flex;
    align-items: center;
  }

  .v-name {
    margin: 0;
  }

  .v-info {
    margin-top: 0.5rem;
  }

  li {
  }

  &:hover {
    cursor: pointer;
    background-color: ${color('whitesmoke')};
  }

  ${withProp('isOpen')(css`
    border-radius: 12px;
    margin-bottom: 0.5rem;
    align-items: flex-start;
    background-color: ${color('whitesmoke')};

    button {
      transform: rotateX(180deg);
    }

    & + * {
      border-top: solid 0 ${color('whitesmoke')};
    }
  `)}
`;

export const VendorAccord = props => {
  const [state, setState] = useState({ open: false });
  const allProps = { ...props, isOpen: state.open };

  return (
    <VendorAccordStyle {...allProps}>
      <Tab>
        <img className="thumbnail" src={thumbnail} alt="" />
        <h5 className="v-name">Micheal Mobs</h5>
      </Tab>
      <Tab>
        <span> 5 </span>
        <MaterialIcon icon="star" size={16} />
        <button onClick={() => setState({ open: !state.open })}>
          <img src={chevronDown} width={10} alt="" />
        </button>
      </Tab>
      <Collapsible className="v-info" open={state.open}>
        <FlatList.Item>User Available for you.</FlatList.Item>
        <FlatList.Item>Working on it.</FlatList.Item>
      </Collapsible>
    </VendorAccordStyle>
  );
};

export default VendorAccord;
