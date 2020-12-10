/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { Box, jsx, Link } from 'theme-ui'
import SectionGrid from '../../../../../../../gatsby-theme-jim-components/src/components/containers/SectionGrid'
import Headline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
import ServicesSlider from '../../elements/ServicesSlider/ServicesSlider'

const SlateServices = ({
    sectionBg,
    justifyContent,
    alignItems,
    className,
    containerVariant,
    sectionVariant,
    ...props
}) => (
    <>
        <SectionGrid
            sectionBg={sectionBg}
            sectionVariant="layout.sectionSlider"
            justifyContent="start"
            alignItems="center"
            className="services__section"
            containerVariant="layout.containerSlider"
        >
            <Headline
                {...animation.slideUp1}
                {...props}
                as="h3"
                sx={{
                    variant: 'styles.h1',
                    px: [2, null, null, null, null],
                    // mb: 4,
                }}
            >
                Ways I can help you
            </Headline>
            <Box
                className="servicesSliderContainer"
                {...animation.slideUp2}
                {...props}
                sx={{
                    mb: [3, 0, 0, 0, 4],
                    variant: 'layout.servicesSlider',

                    overflow: [
                        'hidden',
                        'hidden',
                        'visible',
                        'visible',
                        'visible',
                    ],
                }}
            >
                <ServicesSlider />
            </Box>

            <Box
                {...animation.slideUp5}
                {...props}
                sx={{
                    mt: [0, 3, 0, 0, 0],
                    ml: [0, 2, 0, 0, 0],
                }}
            >
                Interested?
                <Link
                    href="mailto:jamiejohnsonkc@gmail.com"
                    {...props}
                    sx={{
                        fontWeight: 'bold',
                        fontFamily: 'heading',
                        ml: 1,
                    }}
                >
                    jamiejohnsonkc@gmail.com
                </Link>
            </Box>
        </SectionGrid>
    </>
)

SlateServices.propTypes = {
    sectionBg: PropTypes.any,
}

SlateServices.defaultProps = {
    sectionBg: 'transparent',
}

export default SlateServices
