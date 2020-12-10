/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import ExtLink from '../../../../../../gatsby-theme-jim-components/src/components/ui/ExtLink'

// TODO refactor out style to sep element & style for reuse

const IconLink = (props) => (
	<>
		<ExtLink
			{...props}
			className='iconLinkLink'
			href={props.linkTo}
			sx={{
				cursor: 'pointer',
				backfaceVisibility: 'hidden',
				overflow: 'hidden',
				position: 'relative',
				transition: 'color 200ms ease-in-out 0ms, transform 100ms ease-out 0s',
				zIndex: '1',
				background: 'none',
				height: ['2.25em', '3em', '2.25em', '1em', '2em', '2em'],
				width: ['2.25em', '3em', '2.25em', '1em', '2em', '2em'],
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				'& > svg': {
					fill: `${props.iconColor}`,
					height: ['unset', '1.5em', '1.5em', '1em', '1em', '1em', '1em'],
					width: ['unset', '1.5em', '1.5em', '1em', '1em', '1em', '1em'],
				},

				'&::before, &::after': {
					content: '""',
					display: 'block',
					height: '100%',
					left: '0px',
					position: 'absolute',
					top: '0px',
					transform: 'translateX(-110%)',
					transformOrigin: 'left center',
					transition: 'transform 200ms ease-in 0s',
					width: '100%',
					willChange: 'transform',
					zIndex: '-1',
				},
				'&:hover::before, &:hover::after': {
					transform: 'translateX(0px)',
					transition: 'transform 200ms ease-in-out 0ms',
				},
				'&::before': {
					backgroundColor: 'background',
					mixBlendMode: 'difference',
					zIndex: '1',
				},
				'&::after': {
					backgroundColor: `${props.iconInverseBgColor}`,
				},
			}}
		>
			{props.children}
		</ExtLink>
	</>
)

IconLink.propTypes = {
	linkTo: PropTypes.string,
	iconColor: PropTypes.string,
	iconHoverColor: PropTypes.string,
	iconInverseBgColor: PropTypes.string,
	// iconName: PropTypes.string,
}

IconLink.defaultProps = {
	linkTo: '/',
	iconColor: '#000',
	iconHoverColor: 'background',
	iconInverseBgColor: 'rgb(81,156,27)',
	// iconName: 'shapes',
}

export default IconLink
