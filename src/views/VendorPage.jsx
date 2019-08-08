import React, { Fragment } from 'react'
import styled from 'styled-components';
import { color } from '../styles/helpers'
import { Link } from 'react-router-dom';
// import { trace, log } from '../libs/helpers'
import { generateVendors } from '../libs/mocks'
// import logo from '../assets/images/logo@2x.png'

import Footer from '../components/Footer';
import InputRange from 'react-input-range';
import HashTags from '../components/HashTags'
import { GallerySlide } from '../components/Gallery'
import { BookButton, IconButton } from '../components/forms';
import { H1, H3, H4, P } from '../components/typography';
import { VendorCard } from '../components/cards'
import { Container, VendorGroup, CoverImage } from '../components/layouts';

const StyledProfile = styled.aside`
	margin-top: 10vh;

	figure img {
		width: 90px;
		height: 90px;
		border-radius: 50%;
		border: solid 2px ${color('accent')};
	}
`
const vendor = {
  name: 'Diana\'s Buffet',
  group: 'Diana foods',
  category: 'Catering',
  hashtags: ['catering', 'cakes', 'africanDishes'],
  images: Array(5).fill('/images/vendor_banner.png'),
}

export default function VendorProfile() {

  return (
    <Fragment>
			<Container>
				<section className="flex tab tab-larger mb-10">
					<StyledProfile className="w-1/5">
						<figure className="mb-5">
							<img src="/images/vendor_logo.png" alt="vendor group"/>
							<figcaption>
								<H4>{vendor.group}</H4>
								<P><i>Hosted <b>20</b> Events.</i></P>
							</figcaption>
						</figure>
						<P>Rate Vendor</P>
						<InputRange
                minValue={1}
                maxValue={5}
                value={3}
                onChange={e => e}
                formatLabel={value => `${3} star`}
              />
            <br/>
						<Link to="/profile/dianas-food">
							<IconButton icon="add" color="white">MORE FROM VENDOR</IconButton>
						</Link>
						{/*<H4>Calendar</H4>*/}
					</StyledProfile>

					<section className="flex-1 stack">
						<section className="flex justify-between">
							<hgroup>
								<H1>{vendor.name}</H1>
								<HashTags tags={vendor.hashtags} />
							</hgroup>
							<div className="tab">
								<BookButton />
								<IconButton color="white" icon="calendar_today">SCHEDULE</IconButton>
							</div>
						</section>
						<CoverImage />
						<article>
						<H3>Description</H3>
						<P className="md:w-4/5">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great…</P>
						</article>

						<section className="stack">
							<H3>Gallery</H3>
							<GallerySlide images={vendor.images} />
						</section>
					</section>
				</section>

				<section>
					<hgroup className="mb-5">
					<H3>More vendors like {vendor.name}</H3>
					</hgroup>
					<VendorGroup grid>
						{generateVendors(4).map((e, index) => <VendorCard key={index} vendor={e} />)}
					</VendorGroup>
				</section>
			</Container>
			<Footer />
		</Fragment>
  );
}