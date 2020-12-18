/** @jsx jsx */
import { jsx, Flex, Box, Grid } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
// import RightNav from '../RightNav'
import Brand from '../../../../../gatsby-theme-nav-fulloverlay/src/components/Brand'
import NavToggle from '../../../../../gatsby-theme-nav-fulloverlay/src/components/NavToggle'
import Logo from '../../../components/product/bits/Logo'
import useWindowSize from '../../../../../gatsby-theme-jim-components/src/hooks/useWindowSize'

const Header = ({
    navOpen,
    setNavOpen,
    // handleMenuToggle,
    display,
    ...props
}) => {
    const handleMenuToggle = (e) => {
        setNavOpen(!navOpen)
    }

    const size = useWindowSize()
    const smallDivSize = `calc(${size.width}px - 24px)`
    const divSize = `calc(${size.width}px - 64px)`

    return (
        <>
            <Grid
                className="header"
                {...props}
                sx={{
                    // py: [0, 3, 3, 3, 3, 3],
                    // px: [2, 4, 3, 3, 3, 3],
                    // margin: '0',
                    // minWidth: '0',
                    // zIndex: '100',
                    // top: '16px',
                    // display: 'flex',
                    // alignItems: 'center',
                    // justifyContent: 'space-between',
                    // right: [null, null, '32px', '32px', '32px'],
                    // left: [null, null, '32px', '32px', '32px'],
                    // width: ['100vw', null, '90vw'],
                    // position: 'fixed',
                    // py: [0, 3, 3, 3, 3, 3],
                    // px: [2, 4, 3, 3, 3, 3],
                    // margin: '0',
                    minWidth: '0',
                    zIndex: '100',
                    display: 'grid',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: [
                        `${smallDivSize}`,
                        `${divSize}`,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                    ],
                    position: 'fixed',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    gridTemplateColumns: [
                        '3em 1fr 2em',
                        null,
                        '3em 1fr 3em',
                        '3em 1fr 2em',
                        '3em 1fr 3em',
                        null,
                        null,
                        null,
                    ],
                    top: ['16px', null, '32px', null, null, null, null, null],
                    columnGap: '0',
                    // right: [null, null, '32px', '32px', '32px'],
                    // left: [null, null, '32px', '32px', '32px'],
                }}
            >
                <Box
                    {...props}
                    sx={{
                        justifySelf: 'start',
                        display: 'grid',
                    }}
                >
                    <Brand
                        largeScreenBrand={<Logo />}
                        smallScreenBrand={<Logo />}
                    />
                </Box>
                <Box />
                <Box
                    {...props}
                    sx={{
                        justifySelf: 'start',
                        display: 'grid',
                    }}
                >
                    <NavToggle
                        {...props}
                        className="navToggle"
                        type="button"
                        onClick={handleMenuToggle}
                        navOpen={navOpen}
                    />
                </Box>
            </Grid>

            {/* <RightNav navOpen={navOpen} /> */}
        </>
    )
}
Header.propTypes = {
    largeScreenBrand: PropTypes.any,
    smallScreenBrand: PropTypes.any,
}

Header.defaultProps = {}

export default Header
