/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

import exact from 'prop-types-exact'
import IconWrapper from '../../../../../../../gatsby-theme-jim-components/src/components/containers/IconWrapper'

//TODO reorg

const size = '2.25em'

const StyledIconWrapper = (props) => (
	<>
		<IconWrapper
			{...props}
			iconHeight={size}
			iconWidth={size}
			sx={{
				display: 'inline-block',
				mr: 2,
				'.uiLogoCapaIcon': {
					width: `${size} !important`,
				},
				'.diSassCapaIcon': {
					fill: '#CF649A',
				},
				'.phpCapaIcon': {
					fill: '#8993be',
				},
			}}
		/>
	</>
)

const CapabilitiesIconsBar = ({
	capabilitiesIcon1,
	capabilitiesIcon2,
	capabilitiesIcon3,
	...props
}) => (
	<>
		<StyledIconWrapper>{capabilitiesIcon1}</StyledIconWrapper>

		<StyledIconWrapper>{capabilitiesIcon2}</StyledIconWrapper>

		<StyledIconWrapper>{capabilitiesIcon3}</StyledIconWrapper>
	</>
)

CapabilitiesIconsBar.propTypes = exact({
	capabilitiesIcon1: PropTypes.any,
	capabilitiesIcon2: PropTypes.any,
	capabilitiesIcon3: PropTypes.any,
})

CapabilitiesIconsBar.defaultProps = {
	// capabilitiesIcon1: '',
}

export default CapabilitiesIconsBar
