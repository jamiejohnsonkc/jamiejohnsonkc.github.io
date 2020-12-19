/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import Ticker from 'react-ticker'
import Aeroquip from '../../../../../svg/assets/xpLogos/Aeroquip.svg'
import Agripro from '../../../../../svg/assets/xpLogos/Agripro.svg'
import Agrotain from '../../../../../svg/assets/xpLogos/Agrotain.svg'
import Applebees from '../../../../../svg/assets/xpLogos/Applebees.svg'
import Aviva from '../../../../../svg/assets/xpLogos/Aviva.svg'
import Baldor from '../../../../../svg/assets/xpLogos/Baldor.svg'
import Bayer from '../../../../../svg/assets/xpLogos/Bayer.svg'
import Bcbs from '../../../../../svg/assets/xpLogos/Bcbs.svg'
import Bi from '../../../../../svg/assets/xpLogos/Bi.svg'
import Bv from '../../../../../svg/assets/xpLogos/Bv.svg'
import Creative from '../../../../../svg/assets/xpLogos/Creative.svg'
import Eaton from '../../../../../svg/assets/xpLogos/Eaton.svg'
import Emd from '../../../../../svg/assets/xpLogos/Emd.svg'
import Emerson from '../../../../../svg/assets/xpLogos/Emerson.svg'
import Fmc from '../../../../../svg/assets/xpLogos/Fmc.svg'
import FortDodge from '../../../../../svg/assets/xpLogos/FortDodge.svg'
import Goodyear from '../../../../../svg/assets/xpLogos/Goodyear.svg'
import Hilti from '../../../../../svg/assets/xpLogos/Hilti.svg'
import Mac from '../../../../../svg/assets/xpLogos/Mac.svg'
import Olympus from '../../../../../svg/assets/xpLogos/Olympus.svg'
import Pfizer from '../../../../../svg/assets/xpLogos/Pfizer.svg'
import Premier from '../../../../../svg/assets/xpLogos/Premier.svg'
import Rheem from '../../../../../svg/assets/xpLogos/Rheem.svg'
import Schering from '../../../../../svg/assets/xpLogos/Schering.svg'
import Seaboard from '../../../../../svg/assets/xpLogos/Seaboard.svg'
import Sprint from '../../../../../svg/assets/xpLogos/Sprint.svg'
import Target from '../../../../../svg/assets/xpLogos/Target.svg'
import Yrc from '../../../../../svg/assets/xpLogos/Yrc.svg'

const LogoWrapper = (props) => (
    <Box
        {...props}
        // {...animation.slideInOutFromRight}
        sx={{
            display: 'inline-block',

            marginRight: [4, 4, 5, 5, 5, 5, 5, 5],
            '& > svg': {
                width: '4.5em',
                height: '8em',
            },
        }}
    >
        {props.children}
    </Box>
)

const LogoTicker = (props) => {
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
            {/* <Box bg="#f9f9f9"> */}
            <Ticker speed={6} height={140} chain="smooth" offset="run-in">
                {({ index }) => (
                    <div>
                        <LogoWrapper>
                            {brands[index % brands.length]}
                        </LogoWrapper>
                    </div>
                )}
            </Ticker>
            {/* </Box> */}
        </>
    )
}

export default LogoTicker
