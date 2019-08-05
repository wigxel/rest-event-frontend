import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
	padding: .5rem 0;
`

const HashTags = ({ tags }) => {
	return (
		<StyledNav className="tab">
			{tags.map((e, i) => <Link key={i} to={`/query/?hashtag=${e}`}>#{e}</Link>)}
		</StyledNav>
	);
}

export default HashTags