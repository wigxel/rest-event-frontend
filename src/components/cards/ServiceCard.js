import React from 'react';
import t from 'prop-types';
import styled, { css } from 'styled-components';

import { Stack } from '../layouts';
import { color, CardStyle, withProp } from '../../styles/helpers';
import { SkeletonWrapper as Skeleton } from '../layouts/skeleton';

const ServiceStyle = styled(CardStyle({ shadow: true, clickable: true }))`
  width: 163px;
  position: relative;

    &:before {
        content: '';
        top: 5px;
        opacity: 0;
        right: 5px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        position: absolute;
        transform: translateX(-20px);
        transition: all .3s cubic-bezier(.55,.06,.68,.19);
        background: #a5ffa8 center center no-repeat padding-box;
    }

  .title {
    margin-top: 0;
    text-align: center;
    margin-bottom: 0;
  }

  .icon {
    width: 100%;
    height: 65px;
    display: block;
    object-fit: contain;
  }

  .avatars {
    display: none;

    ${withProp('large')(css`
      display: flex;
      justify-content: center;

      .thumbnail {
        z-index: 2;
        width: 20px;
        height: 20px;
        display: block;
        border-radius: 50%;
        box-sizing: padding-box;
        box-shadow: 0 0 0 1px ${color('accent')};
      }

      .thumbnail + .thumbnail {
        margin-left: -6px;
      }
    `)}
  }

  ${withProp('isActive')(css`
    border: solid 2px ${color('primary')};
  `)}

  ${withProp('checked')(css`
    &:before {
      opacity: 1;
      transform: translateX(0);
    }
  `)}

  ${withProp('large')(css`
    width: 220px;
  `)}
`;

export const ServiceCard = props => {
  return (
    <ServiceStyle {...props}>
      <Stack>
        <p className="title">{props.name}</p>
        <img
          lazy="true"
          className="icon"
          src={props.image}
          alt="vendor service"
        />
        <div className="avatars">
          {props.vendors.map((thumbnail, index) => (
            <img
              class="thumbnail"
              alt="vendor thumbnail"
              src={thumbnail}
              style={{ zIndex: props.vendors.length - index }}
            />
          ))}
        </div>
      </Stack>
    </ServiceStyle>
  );
};

ServiceCard.defaultProps = {
  name: 'No Name',
  isActive: false,
  checked: false,
  vendors: []
};

ServiceCard.propTypes = {
  image: t.string.isRequired,
  name: t.string.isRequired,
  vendors: t.arrayOf(t.string),
  checked: t.bool,
  isActive: t.bool
};

ServiceCard.Skeleton = props => {
  return (
    <ServiceStyle
      {...props}
      style={{ boxShadow: 'none', pointerEvents: 'none' }}
    >
      <Stack>
        <Skeleton className="title" width={'40%'} height={20}>
          {props.name}
        </Skeleton>
        <Skeleton
          lazy="true"
          className="icon"
          src={props.image}
          alt="vendor service"
        />
        <div className="avatars">
          <Skeleton width={'70%'} height={20} />
        </div>
      </Stack>
    </ServiceStyle>
  );
};
