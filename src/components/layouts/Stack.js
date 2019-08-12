import React from 'react';
import styled, { css } from 'styled-components';
import { withProp } from '../../styles/helpers';

const StackStyle = styled.div`
  --gap: 1rem;

  > * + * {
    margin-top: var(--gap, 0.5rem);
  }

  ${withProp('small')(css`
    --gap: 0.5rem;
  `)}

  ${withProp('large')(css`
    --gap: 1.5rem;
  `)}
`;

const Stack = props => {
  return <StackStyle {...props} />;
};

export default Stack;
