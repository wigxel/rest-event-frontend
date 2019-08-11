import React from 'react';
import styled, { css } from 'styled-components';
import { withProp } from '../../styles/helpers';

const TabStyle = styled.div`
  --tab-gap: 0.5rem;

  > * + * {
    margin-left: var(--tab-gap, 0.5rem);
  }

  ${withProp('large')(css`
    --tab-gap: 1.5rem;
  `)}
`;

const Tab = props => {
  return <TabStyle {...props} className="tab" />;
};

export default Tab;
