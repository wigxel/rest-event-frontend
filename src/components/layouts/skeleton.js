import React from 'react';
import styled from 'styled-components';

const SkeletonStyle = styled.div`
  background-size: 200px;
  animation: skeleton 1s running infinite forwards linear;
  background: linear-gradient(90deg, #e3dbf2, whitesmoke, #e3dbf2);

  @keyframes skeleton {
    0% {
      background-position-x: 0px;
    }

    50% {
      background-position-x: 50px;
    }

    100% {
      background-position-x: 200px;
    }
  }
`;

export const SkeletonWrapper = props => {
  const { width, height } = props;
  return <SkeletonStyle {...props} style={{ width, height }} />;
};
