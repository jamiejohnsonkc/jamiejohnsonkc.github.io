/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import ServiceCard from '../../../layouts/ServiceCard'
import Glyph1 from '../../../../../../../../gatsby-theme-jim-components/src/svg/assets/fpo/glyph-1.svg'

const EcomCrd = (props) => (
	<ServiceCard
		compImage={<Glyph1 />}
		headingText='Open your store online'
		textText='From product design to strategy, design systems, UX or UI. I solve complex problems through design, so you can achieve your business goals.'
	/>
)

EcomCrd.propTypes = {}

EcomCrd.defaultProps = {}

export default EcomCrd
