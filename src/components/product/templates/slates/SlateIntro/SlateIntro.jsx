/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import Article from '../../../../../../../gatsby-theme-jim-components/src/components/containers/Article'
import ScrollDownLineAnimated from '../../../../../../../gatsby-theme-jim-components/src/components/ui/ScrollDownLineAnimated'
import Headline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import Busker from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Busker'
import SectionGrid from '../../../../../../../gatsby-theme-jim-components/src/components/containers/SectionGrid'

// const StyledHeadline = ({ as, ...props }) => (
// 	<Headline
// 		{...props}
// 		as={as}
// 		sx={{
// 			variant: ['styles.h3', null, null, 'styles.hxxxl', null, null],
// 			mb: '0px',
// 		}}
// 	/>
// )

const SplitHead = ({ children, mb, ...props }) => (
    <Busker
        as="h1"
        {...props}
        sx={{
            variant: [
                'styles.h3',
                'styles.h3',
                'styles.bu3',
                'styles.bu3',
                'styles.h1',
                'styles.bu3',
                'styles.bu3',
                'styles.bu3',
            ],
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
            mb,
        }}
    >
        {children}
    </Busker>
)

const SlateIntro = ({ sectionBg, ...props }) => (
    <>
        <SectionGrid
            sectionBg={sectionBg}
            justifyContent="start"
            alignItems="center"
            className="introSection"
            {...props}
            sx={{
                py: [0, 0, 0, 6, 0, 0, 0, 0],
                '& .container': {
                    gridTemplateRows: '90% 10%',
                    minHeight: '100%',
                },
            }}
        >
            <Article
                className="introArticle"
                // variant="layout.articleCenterCenter"
            >
                <SplitHead>I&apos;m Jamie Johnson,</SplitHead>
                <SplitHead mb={4}>frontend web developer.</SplitHead>
                <Headline
                    // variant="styles.h1"
                    {...props}
                    sx={{
                        variant: 'styles.h4',
                        color: 'primary',
                    }}
                >
                    (and more)
                </Headline>
            </Article>
            <ScrollDownLineAnimated
                mt={[null, null, null, '0px', '0px', '0px', '0px', '0px']}
            />
        </SectionGrid>
    </>
)
SlateIntro.propTypes = {}

SlateIntro.defaultProps = {}

export default SlateIntro
