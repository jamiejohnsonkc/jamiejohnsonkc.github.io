/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import React, { useState } from 'react'
// import NavLi from '../NavLi'
// import Data from '../../data/navLinks.json'
import Data from '../../../data/navLinks.json'
import NavUl from '../../../../../gatsby-theme-nav-fulloverlay/src/components/NavUl'
import NavLi from '../../../../../gatsby-theme-nav-fulloverlay/src/components/NavLi'
import HoverTextFill from '../../../../../gatsby-theme-jim-components/src/components/fx/HoverTextFill'

const RightNavMenu = ({
    navMenuItemHover,
    linkTo,
    hoverTransition,
    navOpen,
    setNavOpen,
    ...props
}) => {
    return (
        <>
            <NavUl
                {...props}
                className="rightNavMenu"
                sx={{
                    minHeight: ['16em', '16em', '30em', '30em', '30em'],
                    flex: [
                        '2.5 0 auto',
                        '1.5 0 auto',
                        '1.5 0 auto',
                        '1.5 0 auto',
                        '1.5 0 auto',
                    ],
                    justifyContent: [
                        'space-around',
                        'space-around',
                        'center',
                        'center',
                        'center',
                    ],
                    minWidth: '100%',
                    pl: [3, 3, 0, 0, 0],
                }}
            >
                {Data.navLinks.map((link, id) => (
                    <NavLi key={link.id}>
                        <Link
                            to={link.to}
                            className="activeClassName"
                            navOpen={navOpen}

                            // onClick={() => setNavOpen(!navOpen)}
                        >
                            <HoverTextFill
                                {...props}
                                sx={{
                                    color: 'navMenuItem',
                                    lineHeight: 2,
                                    fontWeight: 900,
                                    fontFamily: 'heading',
                                    letterSpacing: '-.025em',
                                    // textTransform: 'capitalize',
                                    textDecoration: 'none',
                                    fontSize: [5, 6, 6, 8, 8],
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
        </>
    )
}

export default RightNavMenu
