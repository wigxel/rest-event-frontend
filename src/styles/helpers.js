import { css } from 'styled-components';

export const fullWidth = () => props =>
  props.fullwidth &&
  css`
    display: block;
    width: 100%;
  `;

const sizes = {
    bigDestktop: 1800, // 1800 above
    tabletLand: 1200,
    tabletPort: 900,
    phone: 600,
}
  
// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `
    
    return acc
}, {});