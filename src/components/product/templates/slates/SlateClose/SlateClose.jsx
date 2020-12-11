/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

import Article from '../../../../../../../gatsby-theme-jim-components/src/components/containers/Article'
import SectionGrid from '../../../../../../../gatsby-theme-jim-components/src/components/containers/SectionGrid'
import Headline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'

import Subline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Subline'
import CtaLinkExt from '../../../../../../../gatsby-theme-jim-components/src/components/ui/CtaLinkExt'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'

//TODO refactor split lines

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
                    variant="styles.hxxl"
                    {...props}
                    sx={{
                        maxWidth: [null, null, null, null, null, null],
                        mb: '0px',
                    }}
                    {...animation.slideUp1}
                >
                    How can I help you
                </Headline>
                <Headline
                    as="h1"
                    variant="styles.hxxl"
                    {...props}
                    sx={{
                        maxWidth: [null, null, null, null, null, null],
                        mb: 4,
                    }}
                    {...animation.slideUp1}
                >
                    grow your business?
                </Headline>

                <Subline
                    {...props}
                    as="h2"
                    sx={{
                        variant: 'styles.h4',
                        mb: '0px',
                        color: 'primary',
                        maxWidth: [null, null, null, '42em', '42em', '22em'],
                        fontWeight: 'regular',
                    }}
                    {...animation.slideUp2}
                >
                    Available for freelance,
                </Subline>
                <Subline
                    {...props}
                    as="h2"
                    sx={{
                        variant: 'styles.h4',
                        mb: 4,
                        color: 'primary',
                        maxWidth: [null, null, null, '42em', '42em', '22em'],
                        fontWeight: 'regular',
                    }}
                    {...animation.slideUp2}
                >
                    contract & extended engagements
                </Subline>
                <Text
                    {...props}
                    sx={{
                        variant: 'text.text_lg',
                        maxWidth: [null, null, null, '42em', '36em', '28em'],
                        mb: 5,
                    }}
                    {...animation.slideUp2}
                >
                    <p>
                        Throughout my career I've led multi-functional teams
                        with six-figure budgets. I've also been the team with
                        next-to-no resources. And I enjoyed it all.
                    </p>
                    <p>
                        I can help you decide what to do, how to do it, help you
                        get it done, or all of the above. I'd be ecstatic to
                        help.
                    </p>
                </Text>
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
