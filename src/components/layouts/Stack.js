import React from 'react';
import styled, { css } from 'styled-components';
import { withProp } from '../../styles/helpers';

const propSizes = [
  ['small', '.5rem'],
  ['medium', '1.5rem'],
  ['large', '2rem']
]

const StackStyle = styled.div`
  > * + * {
    margin-top: 1rem;
  }

  ${propSizes.map(([prop, size]) => withProp(prop)(css`
    > * + * {
      margin-top:  ${size};
    }
  `))}
`;

const Stack = props => {
  return <StackStyle {...props} />;
};

export default Stack;
