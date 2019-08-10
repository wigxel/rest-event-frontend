import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { H4 } from '../typography/heading';
import { SkeletonWrapper } from '../layouts/skeleton';

const StyledVendorCard = styled.article`
  width: 250px;

  a {
    text-decoration: none;
  }

  figure {
    width: 100%;
    margin: 0;
  }

  figure > img {
    border-radius: 0.5rem;
    width: 100%;
    height: 200px;
    background: whitesmoke;
    display: block;
    color: whitesmoke;
    object-fit: cover;
  }

  figcaption {
    display: flex;
    padding: 0.5rem;
    align-items: center;

    > .vendor-logo {
      border-radius: 50%;
      width: 30px;
      flex: 0 0 30px;
      height: 30px;
      text-align: center;
      background: white;
      line-height: 30px;
      object-fit: cover;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      margin-right: 0.5rem;
    }

    > * {
      white-space: nowrap;
      overflow-x: hidden;
      margin-top: 0;
      margin-bottom: 0;
      text-overflow: ellipsis;
    }

    h4 {
      flex: 1 1 auto;
    }

    p:last-of-type {
      flex: 0 0 30px;
      width: 30px;
      text-align: right;
    }
  }
`;
const SkeletonStyle = styled(StyledVendorCard)`
  pointer-events: none;

  figure .sku {
    border-radius: 12px;
  }
  figcaption {
    & .sku:first-child {
      border-radius: 50%;
    }

    & > .sku:last-child {
      border-radius: 5px;
    }
  }
`;

export const VendorCardSkeleton = () => {
  return (
    <SkeletonStyle>
      <figure>
        <SkeletonWrapper className="sku" width={'100%'} height={200} />
      </figure>
      <figcaption>
        <span style={{ marginRight: '.5rem' }}>
          <SkeletonWrapper className="sku" width={30} height={30} />
        </span>
        <SkeletonWrapper className="sku" width={180} height={30} />
      </figcaption>
    </SkeletonStyle>
  );
};

export const VendorCard = ({ vendor }) => (
  <StyledVendorCard>
    <Link to={vendor.getUrl()}>
      <figure>
        <img src={vendor.banner} alt="vendor banner" />
      </figure>
    </Link>
    <figcaption>
      <img className="vendor-logo" src={vendor.logo} alt="Lo" />
      <H4 title={vendor.name} style={{ color: '#5F5F5F' }}>
        {vendor.name}
      </H4>
      <p>{vendor.rating}</p>
    </figcaption>
  </StyledVendorCard>
);
VendorCard.defaultProps = {
  vendor: {
    rating: 0
  }
};
VendorCard.propTypes = {
  vendor: PropTypes.shape({
    logo: PropTypes.string,
    rating: PropTypes.number,
    name: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired
  })
};

export default VendorCard;
