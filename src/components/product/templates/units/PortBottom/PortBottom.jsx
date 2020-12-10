/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import Bottom from '../../../../../../../gatsby-theme-jim-components/src/components/system/organisms/units/Bottom/Bottom'
import Copyright from '../../../../../../../gatsby-theme-jim-components/src/components/system/molecules/contentBlocks/Copyright/Copyright'

const FooterContent = (props) => <Copyright organizationName='Jamie Johnson' />

const PortBottom = (props) => (
	<Bottom
		bottomLayoutVariant='bottom'
		bottomTextVariant='legal'
		bottomContent={<FooterContent />}
	/>
)

PortBottom.propTypes = {}

PortBottom.defaultProps = {}

export default PortBottom
