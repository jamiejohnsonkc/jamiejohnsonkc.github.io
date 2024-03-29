/** @jsx jsx */
import { Box, Grid, jsx, Link, Text } from 'theme-ui'
import React from 'react'
import sal from 'sal.js'
import Article from '../../../../../../../gatsby-theme-jim-components/src/components/containers/Article'
import SectionGrid from '../../../../../../../gatsby-theme-jim-components/src/components/containers/SectionGrid'
import Headline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import Subline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Subline'
import ProgBarGrpAccdn from '../../layouts/progBars/ProgBarGrpAccdn'
import ProgBarGrpMap from '../../layouts/progBars/ProgBarGrpMap'
// import CtaLinkInt from '../../../../../../../gatsby-theme-jim-components/src/components/ui/CtaLinkInt'
import ScrollDownLineAnimatedVert from '../../../../../../../gatsby-theme-jim-components/src/components/ui/ScrollDownLineAnimatedVert'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
import Paragraph from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Paragraph'
import HoverBgHiUndln from '../../../../../../../gatsby-theme-jim-components/src/components/ui/HoverBgHiUndln'
import App from '../../../../Presentation/Accordion'
import useMediaQuery from '../../../../../../../gatsby-theme-jim-components/src/hooks/useMediaQuery'
// Document.getelementById()

// const isLargeScreen = useMediaQuery('(min-width: 928px)')

const SmallScreenShow = ({ children, props }) => {
    const isSmallScreen = useMediaQuery('(max-width: 927px)')
    return (
        <Box
            className="smallScreenShow"
            {...props}
            sx={{
                display: `${isSmallScreen ? 'block' : 'none'}`,
            }}
        >
            {children}
        </Box>
    )
}

const LargeScreenShow = ({ children, props }) => {
    const isLargeScreen = useMediaQuery('(min-width: 928px)')
    return (
        <Box
            className="largeScreenShow"
            {...props}
            sx={{
                display: `${isLargeScreen ? 'block' : 'none'}`,
            }}
        >
            {children}
        </Box>
    )
}

const SlateDevSkills = ({ sectionBg, ...props }) => {
    return (
        <>
            <SectionGrid
                sectionBg={sectionBg}
                justifyContent="start"
                alignItems="center"
                className="sectionGrid"
                {...props}
                sx={{
                    variant: 'layout.skillsSection',
                }}
            >
                <Article
                    {...props}
                    className="article"
                    sx={{
                        variant: 'layout.skillsContainer',
                    }}
                >
                    <Grid
                        className="ParentGrid"
                        columns={[
                            '1fr',
                            '1fr',
                            '1fr',
                            // '1.75fr 1fr',
                            '1.3fr 1fr',
                            '1fr 1fr',
                            '1.25fr 1fr',
                            '1.25fr 1fr',
                            '1.25fr 1fr',
                        ]}
                        {...props}
                        sx={{
                            columnGap: 0,
                            maxWidth: [
                                '100%',
                                '100%',
                                'container.6',
                                'container.6',
                                'container.6',
                                'container.6',
                                'container.6',
                                'container.6',
                            ],

                            height: [
                                null,
                                null,
                                '100vh',
                                '100vh',
                                '100vh',
                                '100vh',
                                '100vh',
                                '100vh',
                            ],
                        }}
                    >
                        <Box
                            className="gridItem1"
                            {...props}
                            sx={{
                                pr: [
                                    0,
                                    0,
                                    5,
                                    5,
                                    '111px',
                                    '111px',
                                    '111px',
                                    '111px',
                                ],
                                alignSelf: 'center',
                            }}
                            {...animation.slideUp1}
                        >
                            <Headline
                                as="h1"
                                variant="styles.h3"
                                {...props}
                                sx={{
                                    maxWidth: [
                                        null,
                                        null,
                                        null,
                                        null,
                                        null,
                                        null,
                                        null,
                                        null,
                                    ],
                                    mb: 4,
                                    letterSpacing: '-.06em',
                                    color: [
                                        'red',
                                        'green',
                                        'blue',
                                        'cyan',
                                        'magenta',
                                        'yellow',
                                        'black',
                                        'purple',
                                    ],
                                }}
                                // {...animation.slideUp1}
                            >
                                Skills &amp; Capabilities
                            </Headline>

                            <Subline
                                {...props}
                                as="h2"
                                sx={{
                                    variant: 'styles.d5',
                                    mb: 4,
                                    color: 'primary',
                                    maxWidth: [
                                        null,
                                        null,
                                        null,
                                        null,
                                        null,
                                        null,
                                        null,
                                        null,
                                    ],
                                    fontWeight: 'normal',
                                }}
                                {...animation.slideUp2}
                            >
                                I&apos;m fluent in code and marketing
                            </Subline>
                            <Paragraph
                                variant="styles.p2"
                                {...props}
                                sx={{
                                    maxWidth: [
                                        '33em',
                                        null,
                                        null,
                                        null,
                                        null,
                                        null,
                                        '26em',
                                        null,
                                    ],
                                    // mb: [3, 2, 2, null, null, 4],
                                    // lineHeight: 2,
                                }}
                                {...animation.slideUp3}
                            >
                                <p>
                                    Throughout my career I've led
                                    multi-functional teams with six-figure
                                    budgets. I've also been the team with
                                    next-to-no resources. And I enjoyed it all.
                                </p>

                                <p>
                                    I can help you decide what to do, how to do
                                    it, help you get it done, or all of the
                                    above. I'd be ecstatic to help.
                                </p>
                            </Paragraph>
                            {/* accordion small screen only */}
                            {/* <ProgBarGrpAccdn /> */}

                            {/* <App {...animation.slideUp4} /> */}
                            <SmallScreenShow>
                                <App />
                            </SmallScreenShow>

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
                                Need a coder? A website? More?
                                <Link
                                    href="mailto:jamiejohnsonkc@gmail.com"
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
                                        // children="Let's go"
                                        outlineColor="primary"
                                        textColor="text"
                                        underlineColor="text"
                                        underlineHeight="2px"
                                    >
                                        Let&apos;s go
                                    </HoverBgHiUndln>
                                </Link>
                                {/* <AniLink swipe direction='up' to='web_development'>
						PaintDrip
					</AniLink> */}
                            </Text>
                        </Box>

                        <Box
                            className="gridItem2"
                            // disabled for small screens
                            {...props}
                            sx={{
                                display: [
                                    'none',
                                    'none',
                                    'grid',
                                    'grid',
                                    'grid',
                                    'grid',
                                    'grid',
                                    'grid',
                                ],
                                height: [
                                    null,
                                    null,
                                    null,
                                    '80vh',
                                    null,
                                    null,
                                    null,
                                    null,
                                ],

                                overflowX: 'auto',
                                touchAction: 'pan-x',
                                // cursor: 'grab',
                                overflowScrolling: 'touch',
                                scrollbarWidth: 'none',

                                '&::-webkit-scrollbar': {
                                    display: [
                                        null,
                                        null,
                                        'none',
                                        'none',
                                        'none',
                                        'none',
                                        'none',
                                        'none',
                                    ],
                                },
                                margin: '10vh 0 10vh 0',
                            }}
                        >
                            <LargeScreenShow>
                                <App {...animation.slideUp4} />
                            </LargeScreenShow>
                        </Box>
                    </Grid>
                </Article>
            </SectionGrid>
            <ScrollDownLineAnimatedVert />
            {/* </Section> */}
        </>
    )
}

SlateDevSkills.propTypes = {}

SlateDevSkills.defaultProps = {}

export default SlateDevSkills
