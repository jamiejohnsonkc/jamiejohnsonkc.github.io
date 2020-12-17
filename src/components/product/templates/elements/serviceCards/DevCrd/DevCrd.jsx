/** @jsx jsx */
import { jsx, Image } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import ServiceCard from '../../../layouts/ServiceCard'
import ReactGlyph from '../../../../../../svg/assets/serviceGlyphs/reactGlyph.svg'
import GatsbyGlyph from '../../../../../../svg/assets/serviceGlyphs/gatsby.svg'
import UiLogo from '../../../../../../images/UiLogo.png'
import CapabilitiesIconsBar from '../../CapabilitiesIconsBar'

//TODO remove focusable from react glyph. something with slickslider

const DevCrd = (props) => (
    <>
        <ServiceCard
            compImage={
                <CapabilitiesIconsBar
                    capabilitiesIcon1={
                        <ReactGlyph
                            {...props}
                            sx={{
                                height: '2.25em',
                                width: '2.25em !important',
                                '.reactGlyphSvg': {
                                    fill: '#282828',
                                },
                                '.reactKnockout': {
                                    fill: '#00D4F4',
                                },
                                display: 'inline-block',
                            }}
                        />
                    }
                    capabilitiesIcon2={<GatsbyGlyph />}
                    capabilitiesIcon3={
                        <Image
                            className="uiLogoCapaIcon"
                            src={UiLogo}
                            {...props}
                        />
                    }
                />
            }
            visualWidth="9.25em"
            headingText="High-Performance web pages & apps"
            textText="Comprehensive front-end web development services to design, build and deploy digital properties focused on your business's performance."
            // linkText="WebDev skills & frameworks"
            // iconName="SolidNorthEastArrow"
            // linkTo="/skills/"
        />
    </>
)

DevCrd.propTypes = {}

DevCrd.defaultProps = {}

export default DevCrd
