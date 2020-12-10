/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import ServiceCard from '../../../layouts/ServiceCard'

import AdobeXd from '../../../../../../svg/assets/serviceGlyphs/adobeXd.svg'
import Figma from '../../../../../../svg/assets/serviceGlyphs/figmaGlyph.svg'
import CapabilitiesIconsBar from '../../CapabilitiesIconsBar'

// const DesignGlyphs = (props) => (
// 	<>
// 		<AdobeXd
// 			style={{
// 				width: '2.618em',
// 				height: '2.618em',
// 				marginRight: '.25em',
// 				overflow: 'visible',
// 			}}
// 		/>

// 		<Figma
// 			style={{ width: '2.618em', height: '2.618em', overflow: 'visible' }}
// 		/>
// 	</>
// )

const DesignCrd = (props) => (
    <>
        <ServiceCard
            compImage={
                <CapabilitiesIconsBar
                    capabilitiesIcon1={<AdobeXd />}
                    capabilitiesIcon2={<Figma />}
                />
            }
            visualWidth="6.25em"
            headingText="Digital Product Design & Production"
            textText="I create polished and professional UX/UI, graphics and design to project your brand's unique value and personality."
            linkText={null}
            iconName={null}
        />
    </>
)

DesignCrd.propTypes = {}

DesignCrd.defaultProps = {}

export default DesignCrd
