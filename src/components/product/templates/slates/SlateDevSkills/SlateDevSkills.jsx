/** @jsx jsx */
import { Box, Grid, jsx, Link, Text } from 'theme-ui'
import React from 'react'
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
import HoverBgHiUndln from '../../../../../../../gatsby-theme-jim-components/src/components/fx/HoverBgHiUndln'

// Document.getelementById()

const SlateDevSkills = ({ sectionBg, ...props }) => (
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
                sx={{
                    variant: 'layout.skillsContainer',
                }}
            >
                <Grid
                    className="articleGrid"
                    columns={[
                        '1fr',
                        '1fr',
                        '1.75fr 1fr',
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
                            '86em',
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
                        className="articleGridCell1"
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
                                mb: 4,
                                letterSpacing: '-.06em',
                            }}
                            {...animation.slideUp1}
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
                            I&pos;m fluent in code, design and strategy
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
                                    null,
                                    null,
                                ],
                                // mb: [3, 2, 2, null, null, 4],
                                // lineHeight: 2,
                            }}
                            {...animation.slideUp3}
                        >
                            Anim ad magna commodo ullamco. Commodo qui nisi
                            eiusmod reprehenderit labore irure culpa nulla
                            eiusmod. Consectetur sit est aliqua duis ut esse
                            quis. Dolore ut veniam velit esse ad quis laboris
                            Lorem mollit elit irure nostrud elit.
                        </Paragraph>

                        <ProgBarGrpAccdn />

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
                        className="articleGridCell2"
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
                                '100vh',
                                '100vh',
                                '100vh',
                                '100vh',
                                '100vh',
                                '100vh',
                            ],

                            overflowX: 'auto',
                            touchAction: 'pan-x',
                            cursor: 'grab',
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
                        }}
                    >
                        <ProgBarGrpMap />
                    </Box>
                </Grid>
            </Article>
        </SectionGrid>
        <ScrollDownLineAnimatedVert />
        {/* </Section> */}
    </>
)

SlateDevSkills.propTypes = {}

SlateDevSkills.defaultProps = {}

export default SlateDevSkills
