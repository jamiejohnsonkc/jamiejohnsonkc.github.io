/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Box, jsx } from 'theme-ui'
import SectionGrid from '../../../../../../../gatsby-theme-jim-components/src/components/containers/SectionGrid'
import Headline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
import ServicesSlider from '../../elements/ServicesSlider/ServicesSlider'
import HoverBgHiUndln from '../../../../../../../gatsby-theme-jim-components/src/components/fx/HoverBgHiUndln'

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
            sx={{
                '& .container': {
                    gridTemplateRows: '41% 25% 50%',
                },
            }}
        >
            <Headline
                {...animation.slideUp1}
                {...props}
                as="h3"
                sx={{
                    variant: 'styles.h1',
                    px: [2, null, 4, null, null, null],
                    mb: 4,
                }}
            >
                Ways I can help you
            </Headline>
            <Box
                className="servicesSliderContainer"
                {...animation.slideUp2}
                {...props}
                sx={{
                    mb: [3, 0, 0, 0, 4, 4],
                    variant: 'layout.servicesSlider',

                    overflow: [
                        'hidden',
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
                // {...animation.slideUp5}
                {...props}
                className="servicesCta"
                sx={{
                    mt: [0, 3, 0, 0, 0, 0],
                    lineHeight: 2,
                    fontSize: [2, 5, 4, null, 2, null],
                    ml: [0, 2, 0, 0, 0, 0],
                    px: [0, 0, 4, 0, 0, 0],
                    // fontSize: [2, 3, 2, null, null, null],
                    display: 'block',
                    position: 'relative',
                    fontFamily: 'heading',
                    fontWeight: 'heavy',
                    color: 'primary',
                }}
            >
                {' '}
                Want the nerdy stuff? See my
                <Link
                    to="/skills"
                    {...props}
                    sx={{
                        fontWeight: 'bold',
                        fontFamily: 'heading',
                        textDecoration: 'none',
                        ml: [1, 3, 1, 1, 1, 1],
                    }}
                >
                    <HoverBgHiUndln
                        differenceColor="rgb(252,86,11)"
                        outlineColor="primary"
                        textColor="text"
                        underlineColor="text"
                        underlineHeight="2px"
                    >
                        Skills & Capabilities
                    </HoverBgHiUndln>
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
