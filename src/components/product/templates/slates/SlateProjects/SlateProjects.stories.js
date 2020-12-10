/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Gatsby, Yarn, Php, Storybook } from '@icons-pack/react-simple-icons'
import { ImWordpress } from 'react-icons/im'
import { DiSass } from 'react-icons/di'
import ThemeUi from '../../../../../svg/assets/customDevIcons/themeUi.svg'
import ReactGlyph from '../../../../../svg/assets/serviceGlyphs/reactGlyph.svg'
import WorkSample from '../WorkSample/WorkSample'

export default {
  title: 'SlateProjects',
}


export const SlateProjects = ({
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
      projectNumber="01"
      sectionBg={project1Bg}
      projectNumberColor={project1NumberColor}
      textColor={project1TextColor}
      projectHeadline="Netlify Rebuild"
      projectSubhead="Gatsby Challenge Project"
      projectText="I recreated Netlifly Edge's stellar page design and structure to demonstrate my Gatsby and React development capabilities. All content, art and design property of Netlify."
      siteLinkTo="/repo"
      repoLinkTo="/link"
      projectIcon1={
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
      projectIcon2={<Gatsby />}
      projectIcon3={<Yarn />}
    />
    <WorkSample
      projectNumber="02"
      sectionBg={project2Bg}
      projectNumberColor={project2NumberColor}
      textColor={project2TextColor}
      projectHeadline="Professional Branding"
      projectSubhead="Custom WordPress Site"
      projectText="Custom wordpress design, theme and development built with understrap. "
      siteLinkTo="/repo"
      repoLinkTo="/link"
      iconFill="revText"
      projectIcon1={<ImWordpress />}
      projectIcon2={<DiSass />}
      projectIcon3={<Php />}
      {...props}
      // {...iconSize}
      sx={{
        '& .projectIconLabel': {
          color: 'revText',
        },
      }}
    />
    <WorkSample
      projectNumber="03"
      sectionBg={project3Bg}
      projectNumberColor={project3NumberColor}
      textColor={project3TextColor}
      projectHeadline="Storybook"
      projectSubhead="Component Library"
      projectText="Custom react component library and design system built with Storybook and Theme-Ui."
      siteLinkTo="/repo"
      repoLinkTo="/link"
      // projectImage={<FluidStorybook />}
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
      // projectIcon3={<UiLogoIcon alt='Theme-Ui Glyph' title='Theme-Ui Glyph' />}
    />
  </>
)
