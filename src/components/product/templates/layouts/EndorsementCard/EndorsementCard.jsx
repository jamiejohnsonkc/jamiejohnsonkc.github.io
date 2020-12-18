/** @jsx jsx */
import { jsx, Box, Text, Card } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import FpoImageWireFrame from '../../../../../../../gatsby-theme-jim-components/src/components/utilities/fpo/FpoImageWireFrame'
// import ExtLink from '../../../../../../../gatsby-theme-jim-components/src/components/system/atoms/ExtLink'
// import Icon from '../../../../../../../gatsby-theme-jim-components/src/components/system/atoms/Icon'
// import styled from '@emotion/styled'
// import { ImArrowUpRight } from 'react-icons/im'
// import palette from '../../../../../../../gatsby-theme-jim-theme-ui/src/gatsby-plugin-theme-ui/palette'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
import CtaLinkExt from '../../../../../../../gatsby-theme-jim-components/src/components/ui/CtaLinkExt'
// import { alpha } from '@theme-ui/color'

// TODO refactor

// const StyledSpan = styled.span``

const EndorsementCard = ({
    className,
    linkTo,
    linkText,
    profilePic,
    textText,
    endorserName,
    endorserTitle,
    ...props
}) => (
    <>
        <Box
            className={className}
            // animation={animation.slideUp5}
            {...props}
            sx={{
                // width: `${props.blockWidth}`,
                // px: [1, 2, 4, 4, 3, 4],
                // py: [3, 3, 4, 3, 3, 3],

                // display: 'grid',
                // gridColumn: '1/4',
                // width: `${props.cardWidth}`,
                display: 'grid',

                mb: [4, 4, null, null, null, null, null, null],
                '&.card1': {
                    gridColumn: [
                        '1/3',
                        '1/3',
                        '1/3',
                        '1/2',
                        '1/2',
                        '1/2',
                        '1/2',
                        '1/2',
                    ],
                    order: [2, 2, 2, 3, 3, 3, 3, 3],
                },
                '&.card2': {
                    gridColumn: [
                        '1/3',
                        '1/3',
                        '1/3',
                        '2/3',
                        '2/3',
                        '2/3',
                        '2/3',
                        '2/3',
                    ],
                    order: 4,
                },
                //
                // display: 'inline-grid',
                // width: '100%',
                // width: ['100%', '100%', '384px', '332px', '384px', '384px'],
                // verticalAlign: 'top',
                // position: 'relative',

                // height: [null, null, null, '388px', null, 'unset'],
            }}
        >
            <Card
                className="endorsementCard"
                {...animation.slideUp4NoTrans}
                {...props}
                sx={{
                    // px: [0, 4, 4, 0, 0, 2],
                    // flexWrap: ['wrap', null, null, null, null, null],
                    // flexDirection: ['row', null, null, null, null, null],
                    // display: ['grid', null, null, null, null, null],
                    display: 'grid',

                    px: [4, 4, 4, 4, 4, 4, 4, 4],
                    py: [4, 4, 4, null, 5, 5, 5, 5],
                    height: [
                        '320px',
                        '368px',
                        '388px',
                        '400px',
                        '440px',
                        '680px',
                        '680px',
                        '680px',
                    ],

                    alignItems: 'center',
                    backgroundColor: 'wo1',
                    borderRadius: 6,
                    boxShadow: 'subtleFirmLR',
                    gridTemplateColumns: [
                        '1fr 1fr 1fr 1fr',
                        '1fr 1fr 1fr 1fr',
                        '1fr 1fr 1fr 1fr',
                        '1fr',
                        '1fr',
                        '1fr',
                        '1fr',
                        '1fr',
                    ],
                    gridTemplateRows: [
                        '1fr 1fr .25fr',
                        'auto',
                        '1fr 1fr .25fr',
                        'auto',
                        'auto',
                        'auto',
                        'auto',
                        'auto',
                    ],
                    maxWidth: [
                        '278px',
                        '304px',
                        '452px',
                        '300px',
                        '320px',
                        '83%',
                        '83%',
                        '83%',
                    ],
                    margin: [
                        '0 auto',
                        null,
                        //    `16px auto 24px auto`,
                        '16px auto 32px auto',
                        '0 auto',
                        '0 auto',
                        '0 auto',
                        '0 auto',
                        '0 auto',
                    ],
                }}
            >
                <Box
                    className="cardImage"
                    {...props}
                    sx={{
                        height: 'auto',
                        width: [
                            '4em',
                            '4em',
                            '6em',
                            '38%',
                            '38%',
                            '33%',
                            '33%',
                            '33%',
                        ],
                        // width: ['4em', '8em', '8em', '6em', '50%', '50%'],
                        marginBottom: [
                            null,
                            `${props.profileMb}`,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                        ],
                        overflow: 'hidden',
                        mx: 'auto',
                        borderRadius: '50%',
                        boxShadow: 'depth',
                        position: 'relative',
                        order: 1,
                        gridColumnStart: [
                            '1',
                            '1',
                            '1',
                            '1',
                            '1',
                            '1',
                            '1',
                            '1',
                        ],
                        gridColumnEnd: ['2', '2', '2', '5', '5', '5', '5', '5'],
                    }}
                >
                    <Box>{profilePic}</Box>
                </Box>

                <Text
                    className="endorsement"
                    {...props}
                    sx={{
                        textAlign: [
                            'left',
                            'left',
                            'left',
                            'center',
                            'center',
                            'center',
                            'center',
                            'center',
                        ],
                        fontFamily: 'heading',
                        fontSize: [1, 2, 3, 1, 1, '20.454878px', 3, 3],
                        px: [null, null, null, null, null, 2, 2, 2],
                        fontWeight: [400, 500, 500, 600, 600, 600, 600, 600],
                        lineHeight: [1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6],
                        color: 'revText',
                        marginBottom: [4, 4, 4, 0, 4, 0, 0, 0],
                        order: [3, 3, 3, 2, 2, 2, 2, 2],
                        gridColumnStart: '1',
                        gridColumnEnd: '5',
                    }}
                >
                    &ldquo;{textText}&rdquo;
                </Text>

                <CtaLinkExt
                    {...props}
                    sx={{
                        order: 4,
                    }}
                    linkTo={linkTo}
                    linkText="Read on LinkedIn"
                />

                <Text
                    {...props}
                    className="endorser"
                    sx={{
                        gridColumnStart: [
                            '2',
                            '2',
                            '2',
                            '2',
                            '2',
                            '2',
                            '2',
                            '2',
                            '2',
                        ],
                        gridColumnEnd: ['5', '5', '5', '5', '5', '5', '5', '5'],
                        alignSelf: [
                            'unset',
                            'center',
                            'unset',
                            'unset',
                            'unset',
                            'unset',
                            'unset',
                            'unset',
                        ],
                        order: 2,
                        textAlign: [
                            'left',
                            'left',
                            'left',
                            'center',
                            'center',
                            'center',
                            'center',
                            'center',
                        ],
                        justifyContent: [
                            'unset',
                            'center',
                            'center',
                            'center',
                            'center',
                            'center',
                            'center',
                            'center',
                        ],
                        py: [0, 0, 0, 0, 0, 0, 0, 0],
                        pl: [2, 3, 4, 0, 0, 0, 0, 0],
                        pr: [0, 1, 1, 0, 0, 0, 0, 0],
                        // pb: [0, 4, 4, 0, 0, 0],
                        // mt: [0, -4, 0, 0, 0],
                        fontSize: [2, 2, 3, '12px', 1, 2, 2, 2],
                        lineHeight: [1.4, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6],
                        // letterSpacing: 'snug',
                        fontFamily: 'heading',
                    }}
                >
                    <Box
                        {...props}
                        sx={{
                            fontWeight: 'bold',
                            letterSpacing: 'lazy',
                            color: 'revText',
                        }}
                    >
                        {endorserName}
                    </Box>
                    <Box
                        {...props}
                        sx={{
                            fontFamily: 'caption',
                            fontWeight: 'light',
                            letterSpacing: 'loose',
                            lineHeight: '1.6',
                            color: 'revText',
                            fontSize: ['9px', '10px', 2, '10px', 1, 1, 2, 2],
                            px: [
                                null,
                                null,
                                null,
                                null,
                                null,
                                '32px',
                                null,
                                null,
                            ],
                            mb: [0, 0, 0, 0, 4, 4, 4, 4],
                        }}
                    >
                        {endorserTitle}
                    </Box>
                </Text>
            </Card>
        </Box>
    </>
)

EndorsementCard.propTypes = {
    // animation: PropTypes.any,
    // cardBg: PropTypes.any,
    // cardWidth: PropTypes.any,
    endorserName: PropTypes.string,
    endorserTitle: PropTypes.string,
    linkText: PropTypes.string,
    linkTo: PropTypes.string,
    profileHeight: PropTypes.string,
    profileMb: PropTypes.number,
    profileWidth: PropTypes.string,
    profilePic: PropTypes.element,
    // textMb: PropTypes.number,
    textText: PropTypes.string,
    textVariant: PropTypes.any,
}

EndorsementCard.defaultProps = {
    // blockWidth: '16.23em',
    // animation: 'slide-up',
    // cardBg: 'white',
    // cardWidth: '382px',
    linkText: 'Read More on LinkedIn',
    linkTo: '/',
    profilePic: <FpoImageWireFrame />,
    profileMb: 2,
    // textMb: 3,
    textText: 'Text lg lorem ea aliqua adipisicing ex sunt culpa in',
    endorserName: 'John Doe',
    endorserTitle: 'President, Acme Inc.',
}

export default EndorsementCard
