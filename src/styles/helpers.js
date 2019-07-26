import { css } from 'styled-components';

export const fullWidth = () => props =>
  props.fullwidth &&
  css`
    display: block;
    width: 100%;
  `;
