/** @jsx jsx */
import { jsx, Text, Link, Box } from 'theme-ui'
import React from 'react'
// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import ContactIconsBar from '../../elements/ContactIconsBar'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
import Headline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import Paragraph from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Paragraph'
import SectionGrid from '../../../../../gatsby-theme-jim-components/components/containers/SectionGrid'
import Article from '../../../../../../../gatsby-theme-jim-components/src/components/containers/Article'
import HoverBgHiUndln from '../../../../../../../gatsby-theme-jim-components/src/components/ui/HoverBgHiUndln'

// import AniLink from 'gatsby-plugin-transition-link/AniLink'

const IntroParagraph = (props) => (
    <Paragraph
        variant="styles.p2"
        {...props}
        sx={{
            maxWidth: ['33em', null, null, null, '39em', '40em', null, null],
        }}
    >
        {props.children}
    </Paragraph>
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
            {...props}
            sx={{
                minHeight: [
                    null,
                    null,
                    '100vh',
                    '100vh',
                    '100vh',
                    '100vh',
                    '100vh',
                    '100vh',
                ],
                py: 6,
            }}
        >
            <Article
                className="introArticle"
                articleVariant="layout.articleGrid"
            >
                <Headline
                    as="h1"
                    variant="styles.h3"
                    {...props}
                    sx={{
                        mb: 4,
                    }}
                    {...animation.slideUp1}
                >
                    Hiyas.
                </Headline>

                <IntroParagraph {...animation.slideUp2}>
                    I&apos;ve spent the better part of my career at agencies
                    leading development of{' '}
                    <IntroEmph>strategic, creative and technological</IntroEmph>{' '}
                    solutions for my customers. I&apos;ve also tempered my
                    creative inclinations with
                    <IntroEmph> real-world perspective</IntroEmph> at global
                    corporations.
                </IntroParagraph>
                <IntroParagraph {...animation.slideUp3}>
                    A while back I took time to be a{' '}
                    <IntroEmph>stay-at-home Dad</IntroEmph>. In between the
                    feedings and changes I began tinkering with{' '}
                    <IntroEmph>WordPress</IntroEmph>. Now I design & build
                    high-performance sites with leading-edge platforms like{' '}
                    <IntroEmph>React, Gatsby and Storybook</IntroEmph>. And I
                    can back it up with senior-level marketing chops.
                </IntroParagraph>
                <IntroParagraph
                    {...animation.slideUp4}
                    {...props}
                    sx={{
                        mb: 5,
                    }}
                >
                    Today my little ones ain&apos;t so little anymore. So
                    it&apos;s high time I get back to work.
                </IntroParagraph>

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
                            outlineColor="primary"
                            textColor="text"
                            underlineColor="text"
                            underlineHeight="2px"
                        >
                            Let&apos;s Go
                        </HoverBgHiUndln>
                    </Link>
                    {/* <AniLink swipe direction='up' to='web_development'>
						PaintDrip
					</AniLink> */}
                </Text>

                <ContactIconsBar
                    linkBoxTransform="translateY(100px)"
                    mt={[4, 6, 4, 0, null, null, null, null]}
                    display="flex"
                    // justifyContent: 'center',
                    alignItems="center"
                    flex="1 0 auto"
                    width={[
                        '100%',
                        '100%',
                        '100%',
                        '18em',
                        '18em',
                        '18em',
                        '18em',
                    ]}
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
