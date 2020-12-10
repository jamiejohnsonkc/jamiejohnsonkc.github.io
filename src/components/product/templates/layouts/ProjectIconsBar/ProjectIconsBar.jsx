/** @jsx jsx */
import { jsx, Text, Grid } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

import exact from 'prop-types-exact'
// import DevIcon from '../../../designElements/icons/DevIcon'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
import IconWrapper from '../../../../../../../gatsby-theme-jim-components/src/components/containers/IconWrapper'

// import ReactGlyph from '../../../../../svg/assets/serviceGlyphs/reactGlyph.svg'

//TODO reorg

const ProjectIconsBar = ({
	iconFill,
	iconHeight,
	iconWidth,
	projectIcon1,
	projectIcon2,
	projectIcon3,
	...props
}) => (
	<Grid
		{...props}
		{...animation.slideLeftProjectIcon1}
		className='projectIconsBarContainer'
		columns='1fr 1.5fr'
		gap='8px'
		sx={{
			mt: 3,
			position: ['absolute', 'absolute', 'absolute', 'absolute', 'absolute'],
			right: '0',
			bottom: [null, null, '-2em', '-2em', '-2em'],
			transform: 'translateX(125px)',
			transition: 'all .25ms ease-in',
			height: '1.5em',
		}}
	>
		<Grid
			{...props}
			sx={{
				display: 'grid',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text
				{...props}
				{...animation.slideLeftProjectIcon2}
				className='projectIconLabel'
				sx={{
					fontFamily: 'heading',
					fontWeight: 'semibold',
					letterSpacing: 'lazy',
					fontSize: 0,

					// display: 'inline-block',
					textTransform: 'uppercase',
					// height: '1.5em',
					// verticalAlign: 'middle',
					color: 'muted',
				}}
			>
				Made With
			</Text>
		</Grid>
		<Grid
		// columns='1fr 1fr 1fr'
		// width='1.5em'
		// gap='0'
		// // rows='1'
		// {...props}
		// sx={{
		// 	justifyContent: 'center',
		// 	alignItems: 'center',
		// }}
		>
			<Grid
				{...props}
				columns='1fr 1fr 1fr'
				gap='0'
				// rows='1'
				className='projectIconGrid'
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
					'& .projectIconWrapper': {
						display: 'grid',
						alignItems: 'center',
						justifyContent: 'center',
					},
				}}
			>
				<IconWrapper
					iconFill={iconFill}
					iconHeight={iconHeight}
					iconWidth={iconWidth}
					className='projectIconWrapper'
					{...animation.slideLeftProjectIcon3}
				>
					{projectIcon1}
				</IconWrapper>

				<IconWrapper
					iconFill={iconFill}
					iconHeight={iconHeight}
					iconWidth={iconWidth}
					className='projectIconWrapper'
					{...animation.slideLeftProjectIcon4}
				>
					{projectIcon2}
				</IconWrapper>

				<IconWrapper
					iconFill={iconFill}
					iconHeight={iconHeight}
					iconWidth={iconWidth}
					className='projectIconWrapper'
					{...animation.slideLeftProjectIcon5}
				>
					{projectIcon3}
				</IconWrapper>
			</Grid>
		</Grid>
	</Grid>
)

ProjectIconsBar.propTypes = exact({
	iconFill: PropTypes.any,
	iconHeight: PropTypes.any,
	iconWidth: PropTypes.any,
	projectIcon1: PropTypes.any,
	projectIcon2: PropTypes.any,
	projectIcon3: PropTypes.any,
})

ProjectIconsBar.defaultProps = {
	// 		iconHeight: '1.5em',
	// 	iconWidth: '1.5em',
}

export default ProjectIconsBar
