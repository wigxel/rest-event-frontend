import React, { Fragment } from 'react'
import styled from 'styled-components';
import { color } from '../styles/helpers'
// import { trace, log } from '../libs/helpers'
import { generateVendors } from '../libs/mocks'
import logo from '../assets/images/logo@2x.png'

import Footer from '../components/Footer';
import { IconButton } from '../components/forms';
import { H3, H4 } from '../components/typography/heading';
import { VendorList } from '../components/cards'
import { Jumbotron, Container, VendorGroup } from '../components/layouts';

const StyledNav = styled.nav `
	height: 50px;
	position: sticky;
	top: 0;
	z-index: 100;
	margin-bottom: 2rem;
	box-sizing: border-box;

	&, & .v-avatar {
		box-shadow: 0 3px 3px rgba(0,0,0,0.2);
		background: ${props => props.theme.bgcolor};
	}

	.v-avatar {
		width: 100px;
		height: 100px;
		position: absolute;
		object-fit: cover;
		border-radius: 50%;
		transform: translateY(-40px);
		border: solid 2px ${props => props.theme.accent};

		& + h4 {
			margin-left: ${ 100 + 15 }px;
		}
	}

	.vendor-nav {
		display: flex;
		background-color: ${props => props.theme.white};
		justify-content: space-between;
		padding: .3rem 1.5rem;
	}
`
const StyledGallery = styled.section`
	display: grid;
	grid-gap: 12px;
	grid-template-columns: repeat(3, 100px);
	grid-template-rows: repeat(2, 100px);

	> div {
		border-radius: 12px;
		background-color: ${color('whitesmoke')};
	}
`

export default function VendorProfile(props) {
  const vendor = {
    name: 'Diana\'s Events',
  }

  return (
    <Fragment>
			<Jumbotron style={{minHeight: '350px'}}>
			</Jumbotron>
			<StyledNav className="flex items-center">
				<Container>
					<section className="flex justify-between items-center">
						<div className="flex">
							<img className="v-avatar" src={logo} alt="vendor's logo"/>
							<H4><b>{vendor.name.toUpperCase()}</b></H4>
						</div>
						<section className="tab flex"> 
							<IconButton color="white" icon="add" primary>BOOK VENDOR</IconButton>
							<IconButton color="white" icon="message">SEND MESSAGE</IconButton>
						</section>
					</section>
				</Container>
			</StyledNav>
			<Container>
				<section className="flex tab">
					<section className="flex-1">
						<div className="ml-5">
							<H3>Services</H3>
						</div>
						<VendorGroup list>
							{generateVendors(12).map((vendor, index) => 
								<VendorList vendor={vendor} key={index}/>
							)}
						</VendorGroup>
					</section>
					<aside className="w-1/3">
						<H3>Gallery</H3>
						<StyledGallery className="gallery mt-4">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</StyledGallery>
					</aside>
				</section>
			</Container>
			<Footer />
		</Fragment>
  );
}