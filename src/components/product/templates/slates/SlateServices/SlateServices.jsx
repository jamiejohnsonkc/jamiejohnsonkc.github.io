/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Box, jsx, Text } from 'theme-ui'
import SectionGrid from '../../../../../../../gatsby-theme-jim-components/src/components/containers/SectionGrid'
import Headline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
import ServicesSlider from '../../elements/ServicesSlider/ServicesSlider'
import HoverBgHiUndln from '../../../../../../../gatsby-theme-jim-components/src/components/ui/HoverBgHiUndln'

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
            className="servicesSection"
            containerVariant="layout.containerSlider"
            sx={{
                '& .container': {
                    gridTemplateRows: '36% 60% 30%',
                },
            }}
        >
            <Headline
                {...animation.slideUp1}
                {...props}
                as="h3"
                sx={{
                    variant: 'styles.h3',
                    px: [2, null, 4, null, null, null, null, null],
                    mb: [2, null, 4, 5, null, null, null, null],
                    // color: [
                    //     'red',
                    //     'green',
                    //     'blue',
                    //     'cyan',
                    //     'magenta',
                    //     'yellow',
                    //     'black',
                    //     'purple',
                    // ],
                }}
            >
                How I can help
            </Headline>
            <Box
                className="servicesSliderContainer"
                {...animation.slideUp2}
                {...props}
                sx={{
                    mb: [3, 0, 3, 0, 4, 4, 4, 4],
                    variant: 'layout.servicesSlider',

                    overflow: [
                        'hidden',
                        'hidden',
                        'hidden',
                        'visible',
                        'visible',
                        'visible',
                        'visible',
                        'visible',
                    ],
                }}
            >
                <ServicesSlider />
            </Box>

            {/* <Box
                {...animation.slideUp5}
                {...props}
                className="servicesCta"
                sx={{
                    fontSize: [2, 2, 2, null, 2, null, 3, 4],
                    lineHeight: 2,
                    mt: [0, 3, 0, 0, 0, 0, 0, 0],
                    ml: [1, 2, 0, 0, 0, 4, 4, 4],
                    px: [0, 0, 4, 0, 0, 0, 0, 0],
                    // fontSize: [2, 3, 2, null, null, null],
                    display: 'block',
                    position: 'relative',
                    fontFamily: 'heading',
                    fontWeight: 'normal',
                    color: 'primary',
                }}
            >
                Want the nerdy stuff?
                <Link
                    to="/skills"
                    {...props}
                    sx={{
                        fontWeight: 'bold',
                        fontFamily: 'heading',
                        textDecoration: 'none',
                        ml: '2px',
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
            </Box> */}
            <Text
                {...props}
                variant="d3"
                sx={{
                    mb: [2, 3, 6, 4, 4, 5, 5, 5],
                    display: 'block',
                    fontFamily: 'heading',
                    fontWeight: 'heavy',
                    color: 'primary',
                }}
                {...animation.slideUp5}
            >
                Into the nerdy stuff?
                <Link
                    to="/skills"
                    {...props}
                    {...animation.slideUp6}
                    sx={{
                        textDecoration: 'none',
                        ml: [1, 3, 1, 1, 1, 1, 1, 1],
                        mb: [2, 2, 3, 2, 0, 0, 0, 0],
                        fontSize: 'inherit',
                    }}
                >
                    <HoverBgHiUndln
                        differenceColor="rgb(252,86,11)"
                        outlineColor="primary"
                        textColor="text"
                        underlineColor="text"
                        underlineHeight="2px"
                    >
                        See my skills
                    </HoverBgHiUndln>
                </Link>
                {/* <AniLink swipe direction='up' to='web_development'>
						PaintDrip
					</AniLink> */}
            </Text>
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
