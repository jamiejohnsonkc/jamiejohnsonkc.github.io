/** @jsx jsx */

import { jsx, Grid, Box } from 'theme-ui'
import React from 'react'


import Article from '../../../../../../../gatsby-theme-jim-components/src/components/containers/Article'
import SectionGrid from '../../../../../../../gatsby-theme-jim-components/src/components/containers/SectionGrid'
import Display from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Display'
import Headline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import Subline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Subline'
import EndorsementCard from '../../layouts/EndorsementCard'


export default {
  title: 'SlateValueTest',
}

const NumberBadge = ({ number, ...props }) => (
  <Grid
    {...props}
    sx={{
      alignItems: 'center',
      bg: 'primary',
      borderRadius: '50px',
      boxShadow: 'subtleFirmLR',
      color: 'revText',
      display: 'inline-grid',
      fontFamily: 'heading',
      fontSize: [2, 4, 3, 2, 3, 3],
      height: '1.618em',
      justifyContent: 'center',
      lineHeight: 1,
      mr: [2, 3, 3, 3, 3, 3],
      position: 'relative',
      width: '1.618em',
    }}
  >
    {number}
  </Grid>
)

const BadgeHead = ({ text, ...props }) => (
  <Subline
    {...props}
    as="h3"
    sx={{
      variant: ['text.d3', 'text.d1', 'text.d3', null, null, null],
      // fontSize: [2, 4, 4, 4, 4, 4],
      display: 'inline-grid',
      // fontWeight: ['normal', 'normal', 'light', 'light', 'light'],
      // letterSpacing: ['lazy', 'snug', 'snug', 'snug', 'snug'],

      color: 'revText',
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
      mb: [3, 3, 2, 2, 4, 3],
    }}
  >
    <NumberBadge number={number} />
    <BadgeHead text={text} />
  </Box>
)

const ClaimCopy = (props) => (
  <Display
    {...props}
    // as='h3'
    sx={{
      variant: ['text.d4', 'text.d2', 'text.d4', null, null, null],

      color: 'revText',
      pl: [3, 4, 0, 3, 0, 3],
    }}
  />
)

const ParentBox = (props) => (
  <Box
    {...props}
    sx={{
      position: 'relative',
      // mb: [0, 4, 0, 0, 0, 0],
      // pl: [null, null, 4, 3, 5, 4],

      px: [0, 2, 2, 3, 2, 2],
      '&.parentBox1': {
        // pr: [null, null, 4, 4, 4],
        // pl: [null, null, 4, 4, 5, 6],
        // backgroundColor: 'red',
        gridColumn: ['1/3', '1/3', '1/3', '1/2', '1/2', '1/2'],

        order: 1,
      },
      '&.parentBox2': {
        // pr: [null, null, null, 4, 0, null],
        // pl: [null, null, 4, 4, 5, 4],
        // transform: [null, null, 'translateY(48px)', null, null, null],
        // backgroundColor: 'blue',
        gridColumn: ['1/3', '1/3', '1/3', '2/3', '2/3', '2/3'],
        order: [3, 3, 3, 2, 2, 2],
      },
    }}
  />
)

const SlateValue = ({ sectionBg, sectionVariant, revText, ...props }) => (
  <>
    {/* <Section
			{...props}
			sectionBg={sectionBg}
			className='slate__value'
			sx={{
				variant: 'layout.sectionValue',
			}}
		> */}

    <SectionGrid
      sectionBg="darkBackground"
      justifyContent="center"
      alignItems="center"
      className="value__section"
      sectionVariant="layout.sectionValue"
    >
      <Article>
        <Grid
          className="articleWrapper"
          {...props}
          sx={{
            px: 0,
            py: 0,
            maxWidth: [null, null, null, '868px', '1024px', '1200px'],
            margin: '0 auto',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '3',
            // backgroundColor: 'gray',
            height: '100%',
          }}
        >
          <Box
            className="articleHeader"
            {...props}
            sx={{
              // width: ['98%', '98%', '98%', '98%', '50%', '60%'],
              // mb: [4, 5, 5, 5, 5, 5],
              gridColumn: '1 / 4',
              // bg: 'white',
            }}
          >
            <Headline
              {...props}
              as="h4"
              // {...animation.slideUp2}
              sx={{
                variant: ['styles.h2', 'styles.h1', null, null, null, null],
                color: 'revText',
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
              // mb: [3, 3, 3, 4, 4, 4],
              gridColumn: '1/4',
              gridRow: '2/3',
              rowGap: ['32px', '48px', '0px', null, null, null],
              // gridTemplateColumns: '1fr 1fr 1fr 1fr',
              // gridTemplateColumns: [
              // 	'1fr',
              // 	'1fr',
              // 	'1fr',
              // 	'1fr 1fr',
              // 	'1fr 1fr',
              // 	'1fr 1fr',
              // ],
              // scrollSnapAlign: [
              // 	null,
              // 	'start',
              // 	'start',
              // 	'start',
              // 	'start',
              // 	'start',
              // ],
            }}
          >
            <ParentBox
              className="parentBox1"
              // {...animation.slideUp3}
              // bg='blue'
            >
              {/* <Box
								className='vertDivider'
								{...animation.fadeSlow}
								{...props}
								sx={{
									display: ['none', 'none', 'block', 'block', 'block', 'block'],
									position: 'absolute',
									borderRight: (t) => `1px solid ${t.colors.line}`,
									top: '33%',
									bottom: '33%',
									right: 0,
								}}
							/> */}
              <NumberBadgeHead number="1" text="Quality Work" />

              <ClaimCopy>
                Polished, smart and professional products built to grow
                business.
              </ClaimCopy>
            </ParentBox>
            <ParentBox
              className="parentBox2"
              // {...animation.slideUp4}
              // bg='red'
            >
              <NumberBadgeHead number="2" text="A Great Experience" />

              <ClaimCopy>
                Accessible and accountable expertise committed to superior
                service.
              </ClaimCopy>
            </ParentBox>

            <EndorsementCard
              {...props}
              // {...animation.slideUp5}
              className="card1"
              // profilePic={<FluidStrunk />}
              textText="...you look back and think of people that you would hire and work with again &mdash; Jamie is one of those"
              endorserName="Merrit Strunk"
              endorserTitle="President, Momentum Financial & Insurance Services"
            />
            <EndorsementCard
              className="card2"
              // {...animation.slideUp6}
              // profilePic={<FluidPeizer />}
              textText="Jamie brings conviction and passion to the job, and is fun to work with even when he is challenging you"
              endorserName="Dan Peizer"
              endorserTitle="VP Global Marketing & Strategy, Catalent Pharma Solutions"
            />
          </Grid>
        </Grid>
      </Article>
    </SectionGrid>
  </>
)
