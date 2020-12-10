/** @jsx jsx */
import { jsx, Text, Link, Box } from 'theme-ui'
import React from 'react'
// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import ContactIconsBar from '../../elements/ContactIconsBar'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
import Headline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import SectionGrid from '../../../../../../../gatsby-theme-jim-components/src/components/containers/SectionGrid'
import Article from '../../../../../../../gatsby-theme-jim-components/src/components/containers/Article'
import HoverHglUdrln from '../../../../../../../gatsby-theme-jim-components/src/components/fx/HoverHglUdrln'
import ExtLink from '../../../../../../../gatsby-theme-jim-components/src/components/ui/ExtLink'

// import AniLink from 'gatsby-plugin-transition-link/AniLink'

const IntroParagraph = (props) => (
    // <Box as="p">
    <Text
        as="p"
        variant="text.text_md"
        {...props}
        sx={{
            maxWidth: '32em',
            mb: 4,
        }}
    >
        {props.children}
    </Text>
    // </Box>
)

const IntroEmph = (props) => (
    <span
        {...props}
        sx={{
            fontWeight: 'semibold',
        }}
    />
)

const SlateSummary = ({ sectionBg, ...props }) => (
    <>
        <SectionGrid
            sectionBg={sectionBg}
            justifyContent="start"
            alignItems="center"
            className="introSummary"
            sectionVariant="layout.section"
        >
            <Article className="introArticle">
                <Headline
                    {...props}
                    as="h1"
                    variant="styles.hxxl"
                    {...animation.slideUp1}
                >
                    Hiyas.
                </Headline>
                {/* <Text
                    {...props}
                    sx={{
                        variant: 'text.text_lg',
                        maxWidth: '34em',
                    }}
                    {...animation.slideUp2}
                >
                    <Box
                        as="p"
                        className="introParagraph"
                        {...props}
                        sx={{
                            '& ::firstLine': {
                                fontWeight: 'bold',
                            },
                        }}
                    >
                        I've spent the better part of my career at agencies
                        leading development of strategic, creative and
                        technological solutions for my customers. Then I
                        tempered my creative inclinations with real-world
                        perspective at posts with a few global corporations.
                    </Box>
                </Text> */}
                <IntroParagraph {...animation.slideUp2}>
                    I've spent the better part of my career at agencies leading
                    development of{' '}
                    <IntroEmph>
                        strategic, creative and technological{' '}
                    </IntroEmph>
                    solutions for my customers. I've also tempered my creative
                    inclinations with{' '}
                    <IntroEmph>real-world perspective </IntroEmph> at posts with
                    a few global corporations.
                </IntroParagraph>
                <IntroParagraph {...animation.slideUp3}>
                    A while back I took time to be a{' '}
                    <IntroEmph>stay-at-home Dad</IntroEmph>. In between the
                    feedings and changes I began tinkering with Wordpress. Now I
                    design & build high-performance sites with leading-edge
                    platforms like{' '}
                    <IntroEmph>React, Gatsby and Storybook</IntroEmph>. And I
                    can back it up with senior-level marketing chops.
                </IntroParagraph>
                <IntroParagraph {...animation.slideUp4}>
                    Today my little ones ain't so little anymore and I'm ready
                    to get back to work.
                </IntroParagraph>

                {/* <Text
                    {...props}
                    sx={{
                        variant: 'text.text_lg',

                        // mb: 4,
                        maxWidth: '34em',
                    }}
                    {...animation.slideUp3}
                >
                    A while back I took a step away to enjoy life a bit. In
                    between the feedings and changes I began tinkering with
                    Wordpress. Now I design & build high-performance sites with
                    leading-edge platforms like React, Gatsby and Storybook. And
                    I can back it up with senior-level marketing chops.
                </Text> */}
                {/* <Text
                    {...props}
                    sx={{
                        variant: 'text.text_lg',

                        // mb: 4,
                        maxWidth: '34em',
                    }}
                    {...animation.slideUp4}
                >
                    Today my little ones ain't so little anymore and I'm ready
                    to get back to work.
                </Text> */}
                <Text
                    {...props}
                    sx={{
                        variant: 'text.text_lg',
                        fontSize: [2, 3, 2, null, null, null],
                        mb: [2, 3, 1, 4, 4, 5],
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
                            ml: [0, 0, 1, 1, 1, 1],
                            mb: [2, 2, 0, 2, 0, 0],
                        }}
                    >
                        <HoverHglUdrln
                            differenceColor="rgb(252,86,11)"
                            children="Let's go"
                            outlineColor="primary"
                            textColor="text"
                            underlineColor="text"
                            underlineHeight="2px"
                        />
                    </Link>
                    {/* <AniLink swipe direction='up' to='web_development'>
						PaintDrip
					</AniLink> */}
                </Text>

                <ContactIconsBar
                    linkBoxTransform="translateY(100px)"
                    mt={[4, 6, 4, 0, null, null]}
                    display="flex"
                    // justifyContent: 'center',
                    alignItems="center"
                    flex="1 0 auto"
                    width={['12em', '22em', '18em', '18em', '18em']}
                    minHeight="4em"
                    //width: ,
                    // motion1='...animation.slideUp1'
                    // motion2='...animation.slideUp1'
                    // motion3='...animation.slideUp1'
                    // motion4='...animation.slideUp1'
                />
            </Article>
        </SectionGrid>
        {/* </Section> */}
    </>
)

SlateSummary.propTypes = {}

SlateSummary.defaultProps = {}

export default SlateSummary
