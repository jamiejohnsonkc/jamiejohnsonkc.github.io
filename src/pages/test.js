/** @jsx jsx */
import { jsx, Link, Box } from 'theme-ui'
import React, { useState, useRef } from 'react'


import useWindowSize from '../../../gatsby-theme-jim-components/src/hooks/useWindowSize'
import FluidNetlifyPage from '../hooks/imageHooks/FluidNetlifyPage';
import Layout from '../components/product/templates/layouts/Layout';
import SlateValue from '../components/product/templates/slates/SlateValue';
import SlateServices from '../components/product/templates/slates/SlateServices';
import SlateIntro from '../components/product/templates/slates/SlateIntro';
import SlateSummary from '../components/product/templates/slates/SlateSummary';
import VisHdngText from '../../../gatsby-theme-jim-components/src/components/contentBlocks/VisHdngText';
import Headline from '../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline';
import SlateClose from '../components/product/templates/slates/SlateClose';
import SlateProjects from '../components/product/templates/slates/SlateProjects';

const Test = (props) => {
    const size = useWindowSize();
    const divSize = `calc(${size.width}px - 64px)`

    return (

      <Layout>
        {/* <Headline/>
     <VisHdngText/> */}
       {/* <SlateServices/> */}
       {/* <SlateIntro/> */}
       {/* <SlateSummary/> */}
        {/* <SlateValue id="value" sectionBg="darkBackground" /> */}
        {/* <SlateClose/> */}
        <SlateProjects
                    id="projects"
                    project1Bg="background"
                    project1NumberColor="overlay4"
                    project2Bg="blackSurface"
                    project2TextColor="revText"
                    project2NumberColor="revOverlay2"
                    project3Bg="background"
                    project3NumberColor="overlay4"
                />
      </Layout>
      // <div>{size.width}
      // <Box {...props} sx={{
      // height: '50px',
      // bg: 'blue',
      // width: `${size.width}px`,
      // }}>Sized Div</Box>

      // <Box {...props} sx={{
      //   height: '50px',
      //   bg: 'blue',
      //   width: `${divSize}`,
      //   }}>Sized Div</Box>


      // <FluidNetlifyPage/>
      // </div>

      )
}

export default Test
