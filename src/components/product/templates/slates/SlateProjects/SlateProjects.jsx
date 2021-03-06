/** @jsx jsx */
import { Gatsby, Php, Storybook, Yarn } from '@icons-pack/react-simple-icons'
import React from 'react'
import PropTypes from 'prop-types'
import { DiSass } from 'react-icons/di'
import { ImWordpress } from 'react-icons/im'
import { jsx } from 'theme-ui'
import FluidJJcom from '../../../../../hooks/imageHooks/FluidJJcom'
import FluidNetlifyPage from '../../../../../hooks/imageHooks/FluidNetlifyPage'
import FluidStorybook from '../../../../../hooks/imageHooks/FluidStorybook'
import ThemeUi from '../../../../../svg/assets/customDevIcons/themeUi.svg'
import ReactGlyph from '../../../../../svg/assets/serviceGlyphs/reactGlyph.svg'
import WorkSample from '../WorkSample/WorkSample'

// const iconSize = {
// 	iconHeight: {
// 		height: ['1em', '1.5em', '1.5em', '1.5em', '1.5em'],
// 	},
// 	iconWidth: {
// 		width: ['1em', '1.5em', '1.5em', '1.5em', '1.5em'],
// 	},
// }

const SlateProjects = ({
    iconFill,
    project1Bg,
    project1NumberColor,
    project1TextColor,
    project2Bg,
    project2NumberColor,
    project2TextColor,
    project3Bg,
    project3NumberColor,
    project3TextColor,
    ...props
}) => (
    <>
        <WorkSample
            {...props}
            projectNumber="01"
            sectionBg={project1Bg}
            projectNumberColor={project1NumberColor}
            textColor={project1TextColor}
            projectHeadline="Netlify Rebuild"
            projectSubhead="Gatsby Challenge Project"
            projectText="I rebuilt the Netlify Edge page and functionality to confirm my Gatsby and React development capabilities. All content, art and design property of Netlify."
            siteLinkTo="https://jamiejohnsonkc.github.io/netlify_rebuild_challenge/"
            repoLinkTo="https://github.com/jamiejohnsonkc/netlify_rebuild_challenge.git"
            projectImage={<FluidNetlifyPage />}
            projectIcon1={
                <ReactGlyph
                    {...props}
                    // {...iconSize}
                    sx={{
                        '.reactGlyphSvg': {
                            fill: `${iconFill}`,
                        },
                        '.reactKnockout': {
                            fill: 'transparent',
                        },
                    }}
                />
            }
            projectIcon2={<Gatsby />}
            projectIcon3={<Yarn />}
        />
        <WorkSample
            projectNumber="02"
            sectionBg={project2Bg}
            projectNumberColor={project2NumberColor}
            textColor={project2TextColor}
            projectHeadline="Storybook"
            projectSubhead="Design System &amp; Component Library "
            projectText="Component library, development tool and design system built with Storybook and Theme-Ui. it's an ever-evolving project with constant updates and expansions with each new project I develop."
            siteLinkTo="https://jamiejohnsonkc.github.io/jimDevStorybook"
            repoLinkTo="https://github.com/jamiejohnsonkc/jimDevStorybook.git"
            projectImage={<FluidStorybook />}
            projectIcon1={<Storybook />}
            projectIcon2={
                <ReactGlyph
                    {...props}
                    sx={{
                        '.reactGlyphSvg': {
                            fill: `${iconFill}`,
                        },
                        '.reactKnockout': {
                            fill: 'transparent',
                        },
                    }}
                />
            }
            projectIcon3={
                <ThemeUi
                    {...props}
                    sx={{
                        '.themeUiCircle': {
                            fill: `${iconFill}`,
                        },
                        '.themeUiText': {
                            fill: 'transparent',
                        },
                    }}
                />
            }
        />
        <WorkSample
            className="wordpress"
            projectNumber="03"
            sectionBg={project3Bg}
            projectNumberColor={project3NumberColor}
            textColor={project3TextColor}
            projectHeadline="Professional Branding"
            projectSubhead="Custom WordPress Development"
            projectText="My legacy self-promotion page. Also one of my first monolith WordPress builds from the ground up. The work encompasses custom theming, development and design. Today I'm refactoring it with Gatsby and Apollo to optimize performance."
            siteLinkTo="/site"
            repoLinkTo="https://github.com/jamiejohnsonkc/jamie-johnson.com.git"
            iconFill="revText"
            projectImage={<FluidJJcom />}
            projectIcon1={<ImWordpress />}
            projectIcon2={<DiSass />}
            projectIcon3={<Php />}
            {...props}
            // {...iconSize}
            sx={{
                '& .projectIconLabel': {
                    color: 'revText',
                },
                '& > .siteLinkButton': {
                    display: 'none',
                },
            }}

            // projectIcon3={<UiLogoIcon alt='Theme-Ui Glyph' title='Theme-Ui Glyph' />}
        />
    </>
)

SlateProjects.propTypes = {
    iconFill: PropTypes.any,
    project1Bg: PropTypes.any,
    project1NumberColor: PropTypes.any,
    project1TextColor: PropTypes.any,
    project2Bg: PropTypes.any,
    project2NumberColor: PropTypes.any,
    project2TextColor: PropTypes.any,
    project3Bg: PropTypes.any,
    project3NumberColor: PropTypes.any,
    project3TextColor: PropTypes.any,
}

SlateProjects.defaultProps = {
    project1NumberColor: 'overlay5',
    project1TextColor: 'text',
    project2NumberColor: 'overlay2',
    project2TextColor: 'text',
    project3NumberColor: 'overlay5',
    project3TextColor: 'text',
    iconFill: 'muted',
    // project1Bg: 'transparent',
    // project2Bg: 'transparent',
    // project3Bg: 'transparent',
}

export default SlateProjects
