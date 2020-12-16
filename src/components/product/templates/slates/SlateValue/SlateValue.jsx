/** @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
import { Box, Grid, jsx, Text } from 'theme-ui'
import Article from '../../../../../../../gatsby-theme-jim-components/src/components/containers/Article'
import SectionGrid from '../../../../../../../gatsby-theme-jim-components/src/components/containers/SectionGrid'

import Headline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import Subline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Subline'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
import FluidPeizer from '../../../../../hooks/imageHooks/FluidPeizer'
import FluidStrunk from '../../../../../hooks/imageHooks/FluidStrunk'
import EndorsementCard from '../../layouts/EndorsementCard/EndorsementCard'

const NumberBadge = ({ number, ...props }) => (
    <Box
        {...props}
        sx={{
            alignItems: 'center',
            bg: 'primary',
            borderRadius: '50%',
            boxShadow: 'subtleFirmLR',
            color: 'revText',
            display: 'inline-flex',
            fontFamily: 'heading',
            fontSize: [2, 4, 3, 2, 3, 3],
            height: '40px',
            justifyContent: 'center',
            mr: [2, 3, 3, 3, 3, 3],
            position: 'relative',
            width: '40px',
        }}
    >
        {number}
    </Box>
)

const BadgeHead = ({ text, ...props }) => (
    <Subline
        {...props}
        as="h3"
        sx={{
            variant: [
                'styles.h4',
                'styles.h2',
                'text.d3',
                'text.d2',
                'text.d2',
                null,
            ],
            display: 'inline-grid',
            color: 'revText',
            // fontWeight: 'regular',
        }}
    >
        {text}
    </Subline>
)

const NumberBadgeHead = ({ number, text, ...props }) => (
    <Box
        {...props}
        sx={{
            display: 'inline-block',
            mb: [3, 4, 2, 2, 4, 3],
        }}
    >
        <NumberBadge number={number} />
        <BadgeHead text={text} />
    </Box>
)

const DisplayText = (props) => (
    <Text
        {...props}
        // as='h3'
        sx={{
            // variant: [
            //     'text.d4',
            //     'text.d2',
            //     'text.d4',
            //     'text.d3',
            //     'text.d3',
            //     null,
            // ],
            fontWeight: [null, null, 'light', 'light', 'light', 'light'],
            fontFamily: 'heading',
            maxWidth: [null, null, null, null, null, '22em'],
            color: 'revText',
            pl: [3, 4, 0, 3, 0, 3],
            pr: [null, null, 2, null, null, null],
            mb: [1, 4, null, null, null, null],
        }}
    />
)

const ParentBox = (props) => (
    <Box
        {...props}
        sx={{
            position: 'relative',
            px: [0, 2, 0, 0, 4, 4],

            '&.parentBox1': {
                gridColumn: ['1/3', '1/3', '1/3', '1/2', '1/2', '1/2'],
                order: 1,
            },
            '&.parentBox2': {
                gridColumn: ['1/3', '1/3', '1/3', '2/3', '2/3', '2/3'],
                order: [3, 3, 3, 2, 2, 2],
            },
        }}
    />
)

const SlateValue = ({ sectionBg, sectionVariant, revText, ...props }) => (
    <>
        <SectionGrid
            sectionVariant="layout.sectionValue"
            sectionBg={sectionBg}
            justifyContent="center"
            alignItems="center"
            className="value__section"
            containerVariant="containerValue"
        >
            <Article>
                <Grid
                    className="articleWrapper"
                    {...props}
                    sx={{
                        px: 0,
                        py: 0,
                        maxWidth: [
                            null,
                            null,
                            null,
                            '868px',
                            '1024px',
                            '1200px',
                        ],
                        margin: '0 auto',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: 'auto',
                        height: '100%',
                    }}
                >
                    <Box
                        className="articleHeader"
                        {...props}
                        sx={{
                            gridColumn: '1 / 4',
                            mb: [4, 5, null, 4, 4, 4],
                        }}
                    >
                        <Headline
                            {...props}
                            as="h4"
                            {...animation.slideUp2}
                            sx={{
                                variant: [
                                    'styles.h2',
                                    'styles.h1',
                                    null,
                                    null,
                                    null,
                                    null,
                                ],
                                color: 'revText',
                                maxWidth: [
                                    null,
                                    null,
                                    null,
                                    '83%',
                                    '64%',
                                    null,
                                ],
                            }}
                        >
                            Two things you can always expect from me
                        </Headline>
                    </Box>

                    <Grid
                        className="articleGrid"
                        gap="0px"
                        {...props}
                        sx={{
                            gridColumn: '1/4',
                            gridRow: '2/3',
                            rowGap: ['32px', '48px', '0px', null, null, null],
                            columnGap: ['0', '16px', '32px', null, null, null],
                        }}
                    >
                        <ParentBox
                            className="parentBox1"
                            {...animation.slideUp3NoTrans}
                        >
                            <Box
                                className="vertDivider"
                                {...animation.fadeSlow}
                                {...props}
                                sx={{
                                    display: [
                                        'none',
                                        'none',
                                        'block',
                                        'block',
                                        'block',
                                        'block',
                                    ],
                                    position: 'absolute',
                                    borderRight: (t) =>
                                        `1px solid ${t.colors.line}`,
                                    top: '33%',
                                    bottom: '33%',
                                    right: 0,
                                }}
                            />
                            <NumberBadgeHead number="1" text="Quality Work" />

                            <DisplayText>
                                Polished, smart and professional products built
                                to grow business.
                            </DisplayText>
                        </ParentBox>
                        <ParentBox
                            className="parentBox2"
                            {...props}
                            sx={{
                                transform: [
                                    null,
                                    null,
                                    'translateY(64px)',
                                    null,
                                    null,
                                    null,
                                ],
                            }}
                        >
                            <NumberBadgeHead
                                number="2"
                                text="Great Service"
                                {...animation.slideUp3NoTrans}
                            />

                            <DisplayText {...animation.slideUp4NoTrans}>
                                Accessible and accountable expertise committed
                                to superior service.
                            </DisplayText>
                        </ParentBox>

                        <EndorsementCard
                            {...props}
                            {...animation.slideUp3NoTrans}
                            linkTo="https://www.linkedin.com/in/jamiejohnsonkc/#ember595"
                            className="card1"
                            profilePic={<FluidStrunk />}
                            textText="...you look back and think of people that you would hire and work with again &mdash; Jamie is one of those"
                            endorserName="Merrit Strunk"
                            endorserTitle="President, Momentum Financial & Insurance Services"
                        />
                        <EndorsementCard
                            {...props}
                            {...animation.slideUp4NoTrans}
                            linkTo="https://www.linkedin.com/in/jamiejohnsonkc/#ember595"
                            className="card2"
                            profilePic={<FluidPeizer />}
                            textText="Jamie brings conviction and passion to the job, and is fun to work with even when he is challenging you"
                            endorserName="Dan Peizer"
                            endorserTitle="VP Global Marketing & Strategy, Catalent Pharma Solutions"
                            sx={{
                                mt: [null, null, null, 6, null, null, null],
                            }}
                        />
                    </Grid>
                </Grid>
            </Article>
        </SectionGrid>
    </>
)

SlateValue.propTypes = {
    revText: PropTypes.any,
    sectionBg: PropTypes.any,
}

export default SlateValue
