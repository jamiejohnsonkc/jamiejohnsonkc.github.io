/** @jsx jsx */
import { jsx, Link, Box } from 'theme-ui'
import React, { useState, useRef } from 'react'

import Ticker from 'react-ticker'

import useWindowSize from '../../../gatsby-theme-jim-components/src/hooks/useWindowSize'
import FluidNetlifyPage from '../hooks/imageHooks/FluidNetlifyPage'
import Layout from '../components/product/templates/layouts/Layout'
import SlateValue from '../components/product/templates/slates/SlateValue'
import SlateServices from '../components/product/templates/slates/SlateServices'
import SlateIntro from '../components/product/templates/slates/SlateIntro'
import SlateSummary from '../components/product/templates/slates/SlateSummary'
import VisHdngText from '../../../gatsby-theme-jim-components/src/components/contentBlocks/VisHdngText'
import Headline from '../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import SlateClose from '../components/product/templates/slates/SlateClose'
import SlateProjects from '../components/product/templates/slates/SlateProjects'

import Aeroquip from '../svg/assets/xpLogos/Aeroquip.svg'
import Agripro from '../svg/assets/xpLogos/Agripro.svg'
import Agrotain from '../svg/assets/xpLogos/Agrotain.svg'
import Applebees from '../svg/assets/xpLogos/Applebees.svg'
import Aviva from '../svg/assets/xpLogos/Aviva.svg'
import Baldor from '../svg/assets/xpLogos/Baldor.svg'
import Bayer from '../svg/assets/xpLogos/Bayer.svg'
import Bcbs from '../svg/assets/xpLogos/Bcbs.svg'
import Bi from '../svg/assets/xpLogos/Bi.svg'
import Bv from '../svg/assets/xpLogos/Bv.svg'
import Creative from '../svg/assets/xpLogos/Creative.svg'
import Eaton from '../svg/assets/xpLogos/Eaton.svg'
import Emd from '../svg/assets/xpLogos/Emd.svg'
import Emerson from '../svg/assets/xpLogos/Emerson.svg'
import Fmc from '../svg/assets/xpLogos/Fmc.svg'
import FortDodge from '../svg/assets/xpLogos/FortDodge.svg'
import Goodyear from '../svg/assets/xpLogos/Goodyear.svg'
import Hilti from '../svg/assets/xpLogos/Hilti.svg'
import Mac from '../svg/assets/xpLogos/Mac.svg'
import Olympus from '../svg/assets/xpLogos/Olympus.svg'
import Pfizer from '../svg/assets/xpLogos/Pfizer.svg'
import Premier from '../svg/assets/xpLogos/Premier.svg'
import Rheem from '../svg/assets/xpLogos/Rheem.svg'
import Schering from '../svg/assets/xpLogos/Schering.svg'
import Seaboard from '../svg/assets/xpLogos/Seaboard.svg'
import Sprint from '../svg/assets/xpLogos/Sprint.svg'
import Target from '../svg/assets/xpLogos/Target.svg'
import Yrc from '../svg/assets/xpLogos/Yrc.svg'

const LogoWrapper = (props) => (
    <Box
        {...props}
        // {...animation.slideInOutFromRight}
        sx={{
            display: 'inline-block',
            // minWidth: ['6em', '6em', '8em', '8em', '8em','8em', '8em', '8em'],
            // height: '6em',
            marginRight: [4, 4, 5, 5, 5, 5, 5, 5],
            '& > svg': {
                // height: '8em',
                width: '4.5em',
                height: '8em',
            },
        }}
    >
        {props.children}
    </Box>
)

const Test = (props) => {
    // const size = useWindowSize();
    // const divSize = `calc(${size.width}px - 64px)`

    const brands = [
        <Applebees />,
        <Sprint />,
        <Bayer />,
        <Bcbs />,
        <Pfizer />,
        <Bi />,
        <Eaton />,
        <Agrotain />,
        <Bv />,
        <Target />,
        <Aviva />,
        <Emd />,
        <Aeroquip />,
        <Emerson />,
        <Fmc />,
        <FortDodge />,
        <Goodyear />,
        <Hilti />,
        <Olympus />,
        <Mac />,
        <Premier />,
        <Rheem />,
        <Agripro />,
        <Schering />,
        <Seaboard />,
        <Baldor />,
        <Yrc />,
        <Creative />,
    ]

    return (
        <>
            <Layout>
                <Box bg="#f9f9f9">
                    <Ticker
                        speed={6}
                        height={140}
                        chain="smooth"
                        offset="run-in"
                    >
                        {
                        ({ index }) => (
                            <div>
                              <LogoWrapper>{brands[index % brands.length]}</LogoWrapper>
                            </div>
                        )
                        }
                    </Ticker>
                </Box>

                {/* <Emd width='6em'/> */}
                {/* <Headline/>
     <VisHdngText/> */}
                {/* <SlateServices/> */}
                {/* <SlateIntro/> */}
                {/* <SlateSummary/> */}
                {/* <SlateValue id="value" sectionBg="darkBackground" /> */}
                {/* <SlateClose/> */}
                {/* <Box bg='#f9f9f9'>
        <Ticker speed={8} height={140}>
        {({ }) => (
  <>
 <LogoWrapper>
                            <Applebees />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Sprint />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Bayer />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Bcbs />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Pfizer />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Bi />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Eaton />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Agrotain />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Bv />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Target />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Aviva />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Emd />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Aeroquip />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Emerson />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Fmc />
                        </LogoWrapper>
                        <LogoWrapper>
                            <FortDodge />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Goodyear />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Hilti />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Olympus />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Mac />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Premier />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Rheem />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Agripro />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Schering />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Seaboard />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Baldor />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Yrc />
                        </LogoWrapper>
                        <LogoWrapper>
                            <Creative />
                        </LogoWrapper>
    </>
          )}


        </Ticker>
      </Box> */}
            </Layout>
        </>
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
