import React from 'react';
import styled, { css } from 'styled-components';
import MaterialIcon from 'material-icons-react';
import { fullWidth } from '../../styles/helpers';
import { filterKeys } from '../../libs/helpers';

const ButtonStyle = styled.button`
  background-color: ${props => props.theme.accent};
  padding: 0.5rem 15px;
  white-space: nowrap;
  height: 38px;
  font-size: 13px;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  color: white;
  font-family: var(--heading-font, 'Quicksand');

  .material-icons {
    margin-right: .5rem;
  }

  ${props =>
    props.primary &&
    css`
      background-color: ${props => props.theme.primary};
    `}
  ${props =>
    props.danger &&
    css`
      background-color: ${props => props.theme.danger};
    `}

  ${props =>
    props.circle &&
    css`
      width: 50px;
      height: 50px;
      border-radius: 50%;
    `}
  ${fullWidth()}
`;

export const Button = props => {
  return <ButtonStyle {...props}>{props.children}</ButtonStyle>;
};

const iconProps = props => filterKeys(props, ['color', 'icon'])

export const IconButton = props => {
  return (
    <Button {...props}>
      <MaterialIcon {...iconProps(props)} />
      <span>{props.children}</span>
    </Button>
  );
};

export const CircleButton = props => {
  return (
    <Button circle {...props}>
      <MaterialIcon {...iconProps(props)} />
    </Button>
  );
};

export const BookButton = () => {
  return (<IconButton color="white" icon="add">BOOK</IconButton>)
}
