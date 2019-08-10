import React from 'react';
import t from 'prop-types';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { H3, P } from '../typography';
import { color, CardStyle } from '../../styles/helpers';
import { SkeletonWrapper } from '../layouts/skeleton';

const CardStyled = styled(CardStyle({ shadow: true }))`
  width: 100%;
  display: flex;
  max-width: 300px;
  flex-flow: column;
  justify-content: space-between;

  h3,
  p {
    margin: 0;
  }

  h3 {
    + p {
      font-weight: 300;
      color: ${color('greylight')};
      opacity: 0.5;
    }
  }
  > p {
    color: ${color('greylight')};
    margin: 0;
    font-weight: 300;
    margin-top: 1rem;
  }
`;

export const ProjectCard = props => {
  return (
    <CardStyled>
      <div>
        <H3 title={props.title}>{props.title}</H3>
        <P>{props.category}</P>
      </div>
      <P>
        <i>fews days to event</i>
      </P>
    </CardStyled>
  );
};

const CardSkeleton = styled(CardStyled)`
  box-shadow: none;
  pointer-events: none;

  .sku {
    margin-bottom: 0.5rem;
  }
`;

export const ProjectCardSkeleton = props => {
  return (
    <CardSkeleton>
      <div>
        <SkeletonWrapper height={30} className="sku" />
        <SkeletonWrapper height={10} width={'50%'} />
      </div>
      <div>
        <br />
        <SkeletonWrapper height={10} width={'70%'} />
      </div>
    </CardSkeleton>
  );
};

ProjectCard.Skeleton = ProjectCardSkeleton;
ProjectCard.propTypes = {
  title: t.string.isRequired,
  category: t.string.isRequired
};
