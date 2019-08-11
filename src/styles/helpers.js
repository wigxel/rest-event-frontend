import styled, { css } from 'styled-components';

export const withProp = key => style => props => props[key] && style;

export const CardStyle = (con = {}) => styled.article`
  cursor: pointer;
  padding: 18px 20px;
  border-radius: 12px;
  box-sizing: border-box;
  background-color: ${color('bgcolor')};
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);

  ${withProp('shadow')(css`
    box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.3);
    &:hover {
      box-shadow: 0 3px 12px -5px rgba(0, 0, 0, 0.3);
    }
  `)(con)}
`;

export const fullWidth = () =>
  withProp('fullwidth')(css`
    display: flex;
    width: 100%;
  `);

export const color = name => props => props.theme[name];

const sizes = {
  bigDestktop: 1800, // 1800 above
  tabletLand: 1200,
  tabletPort: 900,
  phone: 600
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
