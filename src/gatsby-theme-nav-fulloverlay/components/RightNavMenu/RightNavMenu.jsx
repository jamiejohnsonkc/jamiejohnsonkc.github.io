/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import React, { useState } from 'react'
// import NavLi from '../NavLi'
// import Data from '../../data/navLinks.json'
import Data from '../../../data/navLinks.json'
import NavUl from '../../../../../gatsby-theme-nav-fulloverlay/src/components/NavUl'
import NavLi from '../../../../../gatsby-theme-nav-fulloverlay/src/components/NavLi'
import HoverTextFill from '../../../../../gatsby-theme-jim-components/src/components/ui/HoverTextFill'

const RightNavMenu = ({
    // navMenuItemHover,
    linkTo,
    // hoverTransition,
    menuOpen,
    setMenuOpen,
    ...props
}) => {
    const closeMenu = (e) => {
        setMenuOpen(false)
    }

    return (
        // <div
        //     className="rightNavMenuContainer"
        //     menuOpen={menuOpen}
        //     setMenuOpen={setMenuOpen}
        // >
        <NavUl
            {...props}
            className="rightNavMenu"
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            sx={{
                mt: [4, null, null, 3, null, null, null, null],
                minHeight: [
                    '16em',
                    '16em',
                    '30em',
                    '16em',
                    '30em',
                    '30em',
                    '30em',
                    '30em',
                ],
                flex: [
                    '2.5 0 auto',
                    '1.5 0 auto',
                    '1.5 0 auto',
                    '1.5 0 auto',
                    '1.5 0 auto',
                    '1.5 0 auto',
                    '1.5 0 auto',
                    '1.5 0 auto',
                ],

                justifyContent: [
                    'space-evenly',
                    'space-evenly',
                    'center',
                    'center',
                    'center',
                    'center',
                    'center',
                    'center',
                ],
                minWidth: '100%',
                pl: [3, 3, 3, 0, 0, 0, 0, 0],
            }}
        >
            {Data.navLinks.map((link) => (
                <NavLi key={link.id} menuOpen={menuOpen} onClick={closeMenu}>
                    <Link
                        to={link.to}
                        className="activeClassName"

                        // onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <HoverTextFill
                            {...props}
                            sx={{
                                color: 'navMenuItem',
                                // color: [
                                //     'red',
                                //     'green',
                                //     'blue',
                                //     'cyan',
                                //     'magenta',
                                //     'yellow',
                                //     'black',
                                //     'purple',
                                // ],
                                lineHeight: 2,
                                fontWeight: 900,
                                fontFamily: 'heading',
                                letterSpacing: '-.025em',
                                // textTransform: 'capitalize',
                                textDecoration: 'none',
                                fontSize: [7, 8, 9, 7, 9, 9, 10, 9],
                                transition: 'transform 275ms ease',
                                '&:before': {
                                    transition: 'transform 275ms ease',
                                    color: 'navMenuItemHover',
                                },
                            }}
                        >
                            {link.name}
                        </HoverTextFill>
                    </Link>
                </NavLi>
            ))}
        </NavUl>
        // </div>
    )
}

export default RightNavMenu
