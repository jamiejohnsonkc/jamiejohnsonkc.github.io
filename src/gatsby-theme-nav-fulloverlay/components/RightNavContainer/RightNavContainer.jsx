/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useState, useRef } from 'react'
import RightNavMenu from '../RightNavMenu/RightNavMenu'
import ContactIconsBar from '../../../components/product/templates/elements/ContactIconsBar'
// import useOutsideClick from '../useOutsideClick'

const RightNavContainer = ({ menuOpen, setMenuOpen, ...props }) => {
    return (
        <Box menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
            <Box
                {...props}
                className="navContainer"
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                sx={{
                    margin: '0px',
                    minWidth: '0px',
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'no-wrap',
                    backgroundColor: 'background',
                    flexDirection: 'column',
                    height: '100vh',
                    position: 'fixed',
                    right: '0px',
                    top: '0px',
                    width: '100%',
                    willChange: 'transform',
                    zIndex: '6',
                    alignItems: 'start',
                    transform: (props) =>
                        menuOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.35s ease-in-out',
                    py: ['unset', 4, 4, 4, 4, 4, 4, 4],
                    pl: [3, 4, 4, 5, 5, 6, 6, 6],
                    '@media screen and (min-width: 56em)': {
                        width: '50%',
                    },
                }}
            >
                {/* <RightNavMenu menuOpen={menuOpen} /> */}
                <RightNavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <ContactIconsBar
                    linkBoxTransform="translateY(20px)"
                    display="flex"
                    flex="1 0 auto"
                    width={['100%', '100%', '18em', '18em', '18em']}
                    alignItems="center"
                    minHeight="4em"
                    alignSelf="stretch"
                    paddingLeft="16px"
                />
            </Box>
        </Box>
    )
}

export default RightNavContainer
