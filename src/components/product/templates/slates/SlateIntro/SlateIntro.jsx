/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import Article from '../../../../../../../gatsby-theme-jim-components/src/components/containers/Article'
import ScrollDownLineAnimated from '../../../../../../../gatsby-theme-jim-components/src/components/ui/ScrollDownLineAnimated'
import Headline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import SectionGrid from '../../../../../../../gatsby-theme-jim-components/src/components/containers/SectionGrid'

// const StyledHeadline = ({ as, ...props }) => (
// 	<Headline
// 		{...props}
// 		as={as}
// 		sx={{
// 			variant: ['styles.hxxl', null, null, 'styles.hxxxl', null, null],
// 			mb: '0px',
// 		}}
// 	/>
// )

const SlateIntro = ({ sectionBg, ...props }) => (
	<>
		<SectionGrid
			sectionBg={sectionBg}
			justifyContent='start'
			alignItems='center'
			className='intro__section'
		>
			<Article className='intro__article'>
				<Headline
					variant='styles.hxxxl'
					{...props}
					sx={{
						mb: 0,
					}}
				>
					I'm Jamie Johnson,
				</Headline>
				<Headline
					variant='styles.hxxxl'
					as='h1'
					{...props}
					sx={{
						mb: 4,
					}}
				>
					frontend web developer.
				</Headline>
				<Headline
					variant='styles.h2'
					{...props}
					sx={{
						color: 'primary',
					}}
				>
					(and more)
				</Headline>
			</Article>
			<ScrollDownLineAnimated mt={[5, null, null, null, '0px', '0px']} />
		</SectionGrid>
	</>
)
SlateIntro.propTypes = {}

SlateIntro.defaultProps = {}

export default SlateIntro
