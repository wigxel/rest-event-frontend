import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H2, P } from '../typography';
import { SkeletonWrapper } from '../layouts/skeleton';
import { color } from '../../styles/helpers';
import { Link } from 'react-router-dom';
// import { log } from '../../libs/helpers';

const StyledVendorList = styled.article`
  width: 100%;
  display: flex;
  border-radius: 12px;
  box-sizing: border-box;
  background-color: ${color('bgcolor')};
  padding: 18px 20px;

  figure {
    width: 100%;
    height: 100%;
    flex: 0 0 250px;
    padding-right: 20px;
    align-self: stretch;
  }

  figure, p { margin: 0 }

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
    flex: 1;
    flex-direction: column;
    color: ${color('paragraph')}
    
    &, .v-info {
      display: flex;
      justify-content: space-between;
    }

    .v-info {
      .vendor-logo {
        border-radius: 50%;
        width: 30px;
        flex: 0 0 30px;
        display: inline-block;
        height: 30px;
        text-align: center;
        background: white;
        line-height: 30px;
        object-fit: cover;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        margin-right: 0.5rem;
      }

      p b {
        color: ${color('accent')}
      }
    }

    .v-title {
      color: ${color('heading')}
      margin-top: 0;
      margin-bottom: 1rem;

      + p {
        height: 80px;
        width: 100%;
        overflow: hidden;
        position: relative;
        line-height: 1.5;

        &::after {
          content: "";
          display: ;
          display: block;
          height: 30px;
          background: linear-gradient(transparent 12px, ${a => a.theme.bgcolor});
          bottom: 0;
          position: absolute;
          width: 100%;
        }
      }
    }
  }
`;
const SkeletonStyle = styled(StyledVendorList)`
  background: transparent;
  pointer-events: none;

  figure .sku {
    border-radius: 12px;
  }

  figcaption {
    .sku:not(:last-child) {
      margin-bottom: 15px;
    }

    & .sku:first-child {
      border-radius: 4px;
    }

    & > .sku:last-child {
      border-radius: 5px;
    }
  }
`;

export const VendorListSkeleton = () => {
  return (
    <SkeletonStyle>
      <figure>
        <SkeletonWrapper className="sku" width={'100%'} height={200} />
      </figure>
      <figcaption>
        <div>
          <SkeletonWrapper className="sku" width={'50%'} height={30} />
          <SkeletonWrapper className="sku" width={'80%'} height={10} />
          <SkeletonWrapper className="sku" width={'80%'} height={10} />
          <SkeletonWrapper className="sku" width={140} height={10} />
        </div>
        <span style={{ marginRight: '.5rem' }}>
          <SkeletonWrapper className="sku" width={30} height={30} />
        </span>
      </figcaption>
    </SkeletonStyle>
  );
};

export const VendorList = (props) => (
  <Link to={props.vendor.getUrl()}>
    <StyledVendorList {...props}>
      <figure>
        <img src={props.vendor.banner} alt="vendor banner" />
      </figure>
      <figcaption>
        <div>
          <H2 className="v-title" title={props.vendor.name}>
            {props.vendor.name}
          </H2>
          <P>{props.vendor.description}</P>
        </div>
        <div className="v-info">
          <P>Rating: <b>{props.vendor.rating}</b>/5</P>
          <div>
            <img className="vendor-logo" src={props.vendor.logo} alt="Lo" />
          </div>
        </div>
      </figcaption>
    </StyledVendorList>
  </Link>
);

VendorList.defaultProps = {
  vendor: {
    isPremium: false,
    rating: 1,
  }
};

VendorList.propTypes = {
  vendor: PropTypes.shape({
    logo: PropTypes.string,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired,
    isPremium: PropTypes.bool,
    description: PropTypes.string.isRequired,
  })
};

export default VendorList;
