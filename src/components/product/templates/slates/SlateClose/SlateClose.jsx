/** @jsx jsx */
import { jsx, Text, Link } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import sal from 'sal.js'
import Article from '../../../../../../../gatsby-theme-jim-components/src/components/containers/Article'
import SectionGrid from '../../../../../../../gatsby-theme-jim-components/src/components/containers/SectionGrid'
import Headline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import Subline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Subline'
import Paragraph from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Paragraph'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
import HoverBgHiUndln from '../../../../../../../gatsby-theme-jim-components/src/components/fx/HoverBgHiUndln'

// TODO refactor split lines

const SlateClose = ({ sectionBg, as, sectionVariant, ...props }) => {
    sal()
    return (
        <>
            <SectionGrid
                sectionBg={sectionBg}
                className="ctaSection"
                justifyContent="start"
                alignItems="center"
                sectionVariant="layout.section"
            >
                <Article className="ctaArticle">
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
                                '12em',
                                null,
                                null,
                            ],
                            mb: 4,
                            letterSpacing: '-.06em',
                        }}
                        {...animation.slideUp1}
                    >
                        PROFESSIONAL, EXPERIENCED &amp; EFFECTIVE.
                    </Headline>

                    {/* <Headline
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
                    }}
                     {...animation.slideUp1}
                >
                    grow your business?
                </Headline> */}

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
                                '30em',
                                '30em',
                                '30em',
                                '30em',
                                '30em',
                            ],
                            fontWeight: 'normal',
                        }}
                        {...animation.slideUp4}
                    >
                        Available for freelance &amp; extended engagements
                    </Subline>
                    {/* <Subline
                    {...props}
                    as="h2"
                    sx={{
                        variant: 'styles.h5',
                        mb: 4,
                        color: 'primary',
                        maxWidth: [
                            null,
                            null,
                            null,
                            '42em',
                            '42em',
                            '22em',
                            '22em',
                            '22em',
                        ],
                         fontWeight: 'normal',
                    }}
                     {...animation.slideUp2}
                >
                    contract & extended engagements
                </Subline> */}
                    <Paragraph
                        variant="styles.p2"
                        {...props}
                        sx={{
                            maxWidth: [
                                '33em',
                                null,
                                null,
                                '35em',
                                '35em',
                                '35em',
                                null,
                                null,
                            ],
                            // mb: [3, 2, 2, null, null, 4],
                            // lineHeight: 2,
                        }}
                    >
                        <p>
                            Throughout my career I&apos;ve led multi-functional
                            teams with six-figure budgets. I&apos;ve also been
                            the team with next-to-no resources. And I always
                            delivered.
                        </p>
                        <p>
                            As a marketer, designer & developer I can help you
                            from start to finish; decide what to do, how to do
                            it and then make it happen. I&apos;d be ecstatic to
                            help.
                        </p>
                    </Paragraph>
                    {/* <CtaLinkExt
                        {...props}
                        sx={{
                            variant: 'links.ctaLink',
                        }}
                        {...animation.slideUp3}
                        linkTo="mailto:jamiejohnsonkc@gmail.com"
                        linkText="Let's Get Started"
                    /> */}
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
                        {...animation.slideUp3}
                    >
                        Ready to get started?
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
                </Article>
            </SectionGrid>
        </>
    )
}

SlateClose.propTypes = {
    sectionBg: PropTypes.string,
}

SlateClose.defaultProps = {
    sectionBg: 'transparent',
}

export default SlateClose
