/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import ServiceCard from '../../../layouts/ServiceCard'
import PlanningGlyph from '../../../../../../svg/assets/serviceGlyphs/planningGlyphv2.svg'

const PlanningCrd = (props) => (
    <ServiceCard
        compImage={
            <PlanningGlyph
                {...props}
                sx={{
                    overflow: 'visible',
                    '.sg15': {
                        fill: `rgba(16, 14, 71, 0.5)`,
                    },
                }}
            />
        }
        headingText="Marketing Strategy & Management"
        textText="Consulting services to help you identify and address opportunities to improve marketing performance and business growth."
        linkText=""
        linkVisual=""
        linkTo="/"
        iconName="/"
    />
)

PlanningCrd.propTypes = {}

PlanningCrd.defaultProps = {}

export default PlanningCrd
