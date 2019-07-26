import React from 'react';
import styles from './typography.module.scss';
import styled, { css } from 'styled-components';

const ParagraphStyle = styled.p.attrs(() => ({
  className: styles.paragraph
}))`
  font-size: 16px;

  ${props =>
    props.small &&
    css`
      font-size: 13px;
    `}
`;

export const P = props => {
  return <ParagraphStyle {...props}>{props.children}</ParagraphStyle>;
};
