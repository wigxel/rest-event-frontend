import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import MaterialIcon from 'material-icons-react';

import thumbnail from '../../assets/images/vendor_logo.png';
import chevronDown from '../../assets/svgs/arrow-down.svg';
import { color, withProp } from '../../styles/helpers';
import { Tab, Stack } from './';
import { log, trace } from '../../libs/helpers';
import { FlatList } from './sidebars';
import { promisify } from 'util';

const VendorAccordStyle = styled.li`
  width: 100%;
  padding: 1rem 0.5rem 0.5rem;
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

const CollapseStyle = styled.div`
  height: 0;
  padding: 0 0;
  overflow: hidden;
  grid-column: 1 / 3;
  transition: all 0.3s ease-out;

  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    display: block;
  }
`;

// TODO: complete the collapsibla component
//add an morph property
export const Collapsible = props => {
  const container = useRef();
  const [height, setHeight] = useState(0);
  const getHeight = el => el.getBoundingClientRect().height;

  useEffect(() => {
    if (container.current) {
      setHeight(props.open ? getHeight(container.current) : 0);
    }
    log(height, 'height');
  });

  return (
    <CollapseStyle {...props} style={{ height }}>
      <div ref={container}>{props.children}</div>
    </CollapseStyle>
  );
};

Collapsible.defaultProps = {
  morph: false
};

export const VendorAccord = props => {
  const [state, setState] = useState({ open: false });
  const allProps = { ...props, isOpen: state.open };

  return (
    <VendorAccordStyle {...allProps} className="p-2 -mr-5">
      <Tab>
        <img className="thumbnail" src={thumbnail} alt="vendor thumbnail" />
        <h5 className="v-name">Micheal Mobs</h5>
      </Tab>
      <Tab>
        <span role="rating"> 5 </span>
        <MaterialIcon icon="star" size={16} />
        <button onClick={() => setState({ open: !state.open })}>
          <img src={chevronDown} width={10} />
        </button>
      </Tab>
      <Collapsible className="v-info" open={state.open}>
        <FlatList.Item>User Available for you.</FlatList.Item>
        <FlatList.Item>Working on it.</FlatList.Item>
      </Collapsible>
    </VendorAccordStyle>
  );
};
