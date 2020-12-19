/** @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
import { GoChevronRight } from 'react-icons/go'
// import ScrollContainer from 'react-indiana-drag-scroll'
import { Box, Grid, jsx, Text } from 'theme-ui'
import LogoTicker from '../../elements/LogoTicker'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
// import Aeroquip from '../../../../../svg/assets/xpLogos/Aeroquip.svg'
// import Agripro from '../../../../../svg/assets/xpLogos/Agripro.svg'
// import Agrotain from '../../../../../svg/assets/xpLogos/Agrotain.svg'
// import Applebees from '../../../../../svg/assets/xpLogos/Applebees.svg'
// import Aviva from '../../../../../svg/assets/xpLogos/Aviva.svg'
// import Baldor from '../../../../../svg/assets/xpLogos/Baldor.svg'
// import Bayer from '../../../../../svg/assets/xpLogos/Bayer.svg'
// import Bcbs from '../../../../../svg/assets/xpLogos/Bcbs.svg'
// import Bi from '../../../../../svg/assets/xpLogos/Bi.svg'
// import Bv from '../../../../../svg/assets/xpLogos/Bv.svg'
// import Creative from '../../../../../svg/assets/xpLogos/Creative.svg'
// import Eaton from '../../../../../svg/assets/xpLogos/Eaton.svg'
// import Emd from '../../../../../svg/assets/xpLogos/Emd.svg'
// import Emerson from '../../../../../svg/assets/xpLogos/Emerson.svg'
// import Fmc from '../../../../../svg/assets/xpLogos/Fmc.svg'
// import FortDodge from '../../../../../svg/assets/xpLogos/FortDodge.svg'
// import Goodyear from '../../../../../svg/assets/xpLogos/Goodyear.svg'
// import Hilti from '../../../../../svg/assets/xpLogos/Hilti.svg'
// import Mac from '../../../../../svg/assets/xpLogos/Mac.svg'
// import Olympus from '../../../../../svg/assets/xpLogos/Olympus.svg'
// import Pfizer from '../../../../../svg/assets/xpLogos/Pfizer.svg'
// import Premier from '../../../../../svg/assets/xpLogos/Premier.svg'
// import Rheem from '../../../../../svg/assets/xpLogos/Rheem.svg'
// import Schering from '../../../../../svg/assets/xpLogos/Schering.svg'
// import Seaboard from '../../../../../svg/assets/xpLogos/Seaboard.svg'
// import Sprint from '../../../../../svg/assets/xpLogos/Sprint.svg'
// import Target from '../../../../../svg/assets/xpLogos/Target.svg'
// import Yrc from '../../../../../svg/assets/xpLogos/Yrc.svg'

// TODO refactor to map logos

const LogoWrapper = (props) => (
    <Box
        {...props}
        {...animation.slideInOutFromRight}
        sx={{
            display: 'inline-flex',
            minWidth: ['6em', '6em', '8em', '8em', '8em'],
            marginRight: [4, 4, 5, 5, 5],
            '& > svg': {
                height: '8em',
                width: '6em',
            },
        }}
    >
        {props.children}
    </Box>
)

const SlateHistory = ({ sectionBg, ...props }) => (
    <Box
        as="section"
        {...props}
        sx={{
            backgroundColor: `${sectionBg}`,
            variant: 'layout.sectionHistory',
            // '@media(min-height:454px)': {
            // 	// height: '100vh',
            // 	// height: '100%',
            // 	scrollSnapAlign: 'start',
            // },
        }}
    >
        <Box
            as="article"
            {...props}
            sx={{
                width: '100%',
                pl: [2, 2, 0, 5, 4],
                pr: [2, 2, 0, 0, 4],
                py: 4,
            }}
        >
            <Grid
                columns={[null, null, null, '1.5fr 4.5fr', '1fr 5fr']}
                {...props}
                sx={{
                    width: '100%',
                    position: 'relative',
                }}
            >
                <Grid
                    {...props}
                    sx={{
                        justifyContent: 'left',
                        alignItems: 'center',
                        background: 'inherit',
                    }}
                >
                    <Text
                        {...props}
                        {...animation.slideInOutFromRight}
                        sx={{
                            variant: 'caps',
                            fontSize: [1, 3, 3, 3, 2],
                            maxWidth: [null, null, null, '15em', '15em'],
                            fontFamily: 'heading',
                            scrollSnapAlign: [null, null, 'start', null, null],
                        }}
                    >
                        Here's some of the brands I&apos;ve helped grow
                    </Text>
                </Grid>
                {/* <Box
					{...props}
					sx={{
						position: 'absolute',
						zIndex: 3,
						top: '60%',
						left: 0,
						'& > svg': {
							fill: 'muted',
							height: '4em',
							width: '3em',
						},
					}}
				>
					<GoChevronRight />
					<Box>
						<GoChevronRight />
					</Box>
				</Box> */}
                <Box
                    className="tickerBox"
                    {...props}
                    sx={{
                        width: '100%',
                        height: '10em',
                        display: 'grid',
                        backgroundColor: 'inherit',
                        // flex: '0 0 auto',
                    }}
                >
                    {/* <Flex
					{...props}
					id='hideScrollParent'
					sx={{
						background: 'background',
						flex: '0 0 auto',
						width: '100%',
						height: '10em',
					}}
				> */}
                    <Box
                        {...props}
                        // id="hideScroll"
                        sx={{
                            display: 'grid',
                            alignItems: 'center',
                            width: '100%',
                            // flexWrap: 'nowrap',
                            // height: '10em',
                            // pl: 4,
                            // minWidth: '1000px',
                            // alignItems: 'center',
                            // display: 'flex',
                            // overflowX: 'auto',
                            // touchAction: 'pan-y',
                            // cursor: 'grab',
                            // overflowScrolling: 'touch',
                            // // WebkitOverflowScrolling: 'touch',
                            // scrollbarWidth: 'none',
                            // '&::-webkit-scrollbar': {
                            // 	display: 'none',
                            // },
                        }}
                    >
                        <LogoTicker />
                        {/* <Box
                            {...props}
                            sx={{
                                display: 'inline-flex',
                                minWidth: '2em',
                                ml: ['-2em', '-2em', '-2em', '-2em', '-2em'],
                                mr: ['1em', '1em', '1em', '1em', '1em'],
                                '.chev2': {
                                    transform: `translateX(-5px)`,
                                },
                                '& > svg': {
                                    height: '8em',
                                    fill: 'primaryLight',
                                    overflow: 'hidden',
                                },
                            }}
                        >
                            <GoChevronRight
                                {...animation.slideInOutFromRight}
                            />
                            <GoChevronRight
                                className="chev2"
                                {...animation.slideInOutFromRight}
                            />
                        </Box> */}
                        {/* <LogoWrapper>
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
                        </LogoWrapper> */}
                    </Box>
                </Box>
                {/* </Flex> */}
            </Grid>
        </Box>
    </Box>
)

SlateHistory.propTypes = {
    sectionBg: PropTypes.any,
}

SlateHistory.defaultProps = {
    sectionBg: 'white',
}

export default SlateHistory
