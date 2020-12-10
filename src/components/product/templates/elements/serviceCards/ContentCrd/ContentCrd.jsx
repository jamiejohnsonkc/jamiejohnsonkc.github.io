/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import ServiceCard from '../../../layouts/ServiceCard'
import IllustratorGlyph from '../../../../../../svg/assets/serviceGlyphs/adobeAi.svg'
import PhotoshopGlyph from '../../../../../../svg/assets/serviceGlyphs/photoshop.svg'
import MsWordGlyph from '../../../../../../svg/assets/serviceGlyphs/msWord.svg'
import CapabilitiesIconsBar from '../../CapabilitiesIconsBar'

const ContentCrd = (props) => (
    <ServiceCard
        compImage={
            <CapabilitiesIconsBar
                capabilitiesIcon1={<IllustratorGlyph />}
                capabilitiesIcon2={<PhotoshopGlyph />}
                capabilitiesIcon3={<MsWordGlyph />}
            />
        }
        visualWidth="9.5em"
        headingText="Engaging digital content & marketing materials"
        textText="Messaging and execution to compel interaction, establish rapport, demonstrate value and convert sales."
        // textText='From product design to strategy, design systems, UX or UI. I solve complex problems through design, so you can achieve your business goals.'
        linkText=""
        linkTo=""
        iconName=""
    />
)

ContentCrd.propTypes = {}

ContentCrd.defaultProps = {}

export default ContentCrd
