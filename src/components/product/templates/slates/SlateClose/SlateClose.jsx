/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

import Article from '../../../../../../../gatsby-theme-jim-components/src/components/containers/Article'
import SectionGrid from '../../../../../../../gatsby-theme-jim-components/src/components/containers/SectionGrid'
import Headline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'

import Subline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Subline'
import Paragraph from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Paragraph'
import CtaLinkExt from '../../../../../../../gatsby-theme-jim-components/src/components/ui/CtaLinkExt'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'

// TODO refactor split lines

const SlateClose = ({ sectionBg, as, sectionVariant, ...props }) => (
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
                    Ready to grow?
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
                            '20em',
                            '20em',
                            '20em',
                            '20em',
                            '20em',
                        ],
                        fontWeight: 'normal',
                    }}
                    {...animation.slideUp2}
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
                            '25em',
                            '25em',
                            '25em',
                            null,
                            null,
                        ],
                        // mb: [3, 2, 2, null, null, 4],
                        // lineHeight: 2,
                    }}
                >
                    <p>
                        Throughout my career I&apos;ve led multi-functional
                        teams with six-figure budgets. I&apos;ve also been the
                        team with next-to-no resources. And I enjoyed it all.
                    </p>
                    <p>
                        I can help you decide what to do, how to do it, help you
                        get it done, or all of the above. I&apos;d be ecstatic
                        to help.
                    </p>
                </Paragraph>
                <CtaLinkExt
                    {...props}
                    sx={{
                        variant: 'links.ctaLink',
                    }}
                    {...animation.slideUp3}
                    linkTo="mailto:jamiejohnsonkc@gmail.com"
                    linkText="Let's Get Started"
                />
            </Article>
        </SectionGrid>
    </>
)

SlateClose.propTypes = {
    sectionBg: PropTypes.any,
}

SlateClose.defaultProps = {
    sectionBg: 'transparent',
}

export default SlateClose
