import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H4 } from '../typography/heading';

const StyledVendorCard = styled.article`
    width: minmax(250px, 100%);

    > img {
        border-radius: .5rem;
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    footer {
        display: flex;
        padding: .5rem 0;
        align-items: center;
        img {
            padding: .2rem;
            border-radius: 50%;
            box-shadow: 0 .1rem .3rem rgba(0, 0, 0, .2);
            margin-right: .5rem;
        }
        p:last-of-type {
            margin-left: auto;
        }
    }
`;

const VendorCard = ({ vendor }) => (
    <StyledVendorCard>
        <img src={vendor.banner} alt="vendor banner"/>
        <footer>
            <img src={vendor.logo} alt="Vendor logo"/>
            <H4 style={{ color: '#5F5F5F'}}>{vendor.name}</H4>
            <p>{vendor.rating}</p>
        </footer>
    </StyledVendorCard>
);

VendorCard.propTypes = {
    vendor: PropTypes.shape({
        logo: PropTypes.string,
        name: PropTypes.string.isRequired,
    })
};

export default VendorCard;