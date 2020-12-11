/** @jsx jsx */
import PropTypes from 'prop-types'
import { Box, Card, jsx } from 'theme-ui'
import React from 'react'
import VisHdngText from '../../../../../../../gatsby-theme-jim-components/src/components/contentBlocks/VisHdngText'
import CtaLinkInt from '../../../../../../../gatsby-theme-jim-components/src/components/ui/CtaLinkInt'
import FpoImageWireFrame from '../../../../../../../gatsby-theme-jim-components/src/components/utilities/fpo/FpoImageWireFrame'

const ServiceCard = ({
    linkText,
    linkTo,
    linkVisual,
    compImage,
    visualWidth,
    headingText,
    textText,
    ...props
}) => (
    <>
        <Box className="serviceCardWrapper" marginRight={3}>
            <Card
                className="serviceCard"
                {...props}
                sx={{
                    variant: 'layout.serviceSliderCard',
                    boxShadow: 'subtleFirmLR',
                    flex: '1 0 100%',
                    minHeight: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'flex-end',
                }}
            >
                <Box
                    {...props}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        justifyContent: 'start',
                        width: '100%',
                        minWidth: '10em',
                        height: '80%',
                        '& > div': {
                            flex: '1 1 100%',
                            height: '22em',
                            minWidth: '100%',
                        },
                    }}
                >
                    <VisHdngText
                        blockWidth="100%"
                        compImage={compImage}
                        visualHeight="2.25em"
                        visualMb={5}
                        visualWidth={visualWidth}
                        headingText={headingText}
                        headingVariant="styles.h4"
                        headingSpacing="tight"
                        headingWeight="heavy"
                        headingMb={3}
                        textMb={0}
                        textText={textText}
                        textVariant="text.text_lg"
                        {...props}
                        sx={{
                            lineHeight: 1.25,
                        }}
                    />

                    {/* {linkText && (
                        <CtaLinkInt
                            linkText={linkText}
                            linkVisual={linkVisual}
                            linkTo={linkTo}
                            {...props}
                            sx={{
                                // flex: '1',
                                // minWidth: '8em',
                                // alignSelf: 'flex-start',

                                // mb: [3, null, null, null, null],
                                textAlign: 'left',
                                '& .linkText': {
                                    fontSize: [1, 3, 3, 3, 2, 2],
                                    fontFamily: 'heading',
                                    fontWeight: 'normal',
                                    color: 'primary',
                                    mr: 2,
                                    flex: '1',
                                },
                                '& .linkVisual': {
                                    '& > svg': {
                                        height: [
                                            '.5em',
                                            '.75em',
                                            '.5em',
                                            '.5em',
                                            '.5em',
                                            '.5em',
                                        ],
                                        width: [
                                            '.5em',
                                            '.75em',
                                            '.5em',
                                            '.5em',
                                            '.5em',
                                            '.5em',
                                        ],
                                        fill: 'primary',
                                    },
                                },
                            }}
                        />
                    )} */}
                </Box>
            </Card>
        </Box>
    </>
)

ServiceCard.propTypes = {
    compImage: PropTypes.any,
    headingText: PropTypes.string,
    iconName: PropTypes.string,
    imageWidth: PropTypes.string,
    linkText: PropTypes.string,
    linkTo: PropTypes.any,
    linkVisual: PropTypes.any,
    textText: PropTypes.string,
    visualWidth: PropTypes.any,
}

ServiceCard.defaultProps = {
    compImage: <FpoImageWireFrame />,
    headingText: 'Heading text sint mangna eu',
    iconName: 'SolidNorthEastArrow',
    imageWidth: '10em',
    linkText: 'Link',
    textText:
        'Text lg lorem ea aliqua adipisicing ex sunt culpa in. Nisi ut veniam pariatur ullamco sint magna eu id sint voluptate ullamco laboris.',
}

export default ServiceCard
