/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

//TODO OOC

const SectionWrapper = (props) => (
	<Flex
		{...props}
		sx={{
			flexDirection: ['row'],
			height: '100%',
			minWidth: '0',
		}}
	/>
)

SectionWrapper.propTypes = {}

SectionWrapper.defaultProps = {}

export default SectionWrapper
