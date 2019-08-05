import React, { useState } from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
import { CircleButton } from './forms';

const chevronWidth = 25;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1000px;
`;

const SlideItem = styled.figure`
  background: #EEE;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px;
  font-size: 20px;
  font-weight: bold;

  img { 
  	height: 200px;
 	}
`;


export const GallerySlide = ({ images }) => {
	const [index, changeIndex] = useState(0)

	const carouselItems = images.map((src, index) => (
		<SlideItem key={index}>
			<img src={src} alt="The gallery"/>
		</SlideItem>
	));

	return (
		<Wrapper>
			<ItemsCarousel
				gutter={12}
				numberOfCards={3}
				activeItemIndex={index}
				requestToChangeActive={changeIndex}

				rightChevron={<CircleButton color="white" icon="chevron_right"/>}
				leftChevron={<CircleButton color="white" icon="chevron_left"/>}
				chevronWidth={chevronWidth}
				outsideChevron

				children={carouselItems}
        />
		</Wrapper>
	)
}

GallerySlide.propsTypes = {
	images: t.array.isRequired,
}

export default {
	GallerySlide,
}