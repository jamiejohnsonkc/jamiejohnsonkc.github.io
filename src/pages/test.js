/** @jsx jsx */
import { jsx, Link, Box } from 'theme-ui'
import React, { useState, useRef } from 'react'
// import { MdSentimentSatisfied } from 'react-icons/md'
import NavOverlay from '../../../gatsby-theme-nav-fulloverlay/src/NavOverlay'
import NavToggle from '../../../gatsby-theme-nav-fulloverlay/src/components/NavToggle'
import useOutsideClick from '../../../gatsby-theme-nav-fulloverlay/src/components/useOutsideClick'

// import SandwhichRotate from '../gatsby-theme-nav-fulloverlay/components/SandwhichRotate'

// const ToggleContent = ({ toggle, content }) => {
//     const [navOpen, setNavOpen] = useState(false)
//     const hide = () => setNavOpen(false)
//     const show = () => setNavOpen(true)

//     return (
//         <>
//             {toggle(show)}
//             {navOpen && content(hide)}
//         </>
//     )
// }

//! box component below is a copy of RightNavContainer

export default function Testing({ onClick, props }) {
    const [navOpen, setNavOpen] = useState(false)

    const handleMenuToggle = (e) => {
        setNavOpen(!navOpen)
    }

    const closeMenu = (e) => {
        setNavOpen(false)
    }

    const ref = useRef()

    useOutsideClick(ref, () => {
        alert('You clicked outside')
        if (navOpen) setNavOpen(false)
    })

    const links = (
        <div>
            <Link to="/" onClick={closeMenu}>
                About
            </Link>
            <Link to="/" onClick={closeMenu}>
                People
            </Link>
            <Link to="/" onClick={closeMenu}>
                Work
            </Link>
            <Link to="/" onClick={closeMenu}>
                Careers
            </Link>
            <Link to="/" onClick={closeMenu}>
                Contact
            </Link>
        </div>
    )

    return (
        <div ref={ref}>
            <button onClick={handleMenuToggle}>test button</button>
            <div>
                <NavToggle
                    type="button"
                    onClick={handleMenuToggle}
                    navOpen={navOpen}
                />
            </div>
            <Box
                {...props}
                className="navContainer"
                navOpen={navOpen}
                sx={{
                    margin: '0px',
                    minWidth: '0px',
                    display: 'flex',
                    // alignItems: 'baseline',
                    justifyContent: 'space-around',
                    flexWrap: 'no-wrap',
                    // backgroundColor: 'background',
                    backgroundColor: 'gray',
                    flexDirection: 'column',
                    height: '100vh',
                    position: 'fixed',
                    right: '0px',
                    top: '0px',
                    width: '100%',
                    willChange: 'transform',
                    zIndex: '50',
                    alignItems: 'start',
                    transform: (props) =>
                        navOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.35s ease-in-out',
                    py: ['unset', 4, 4, 4, 4],
                    px: ['unset', 4, 4, 4, 4],
                    '@media screen and (min-width: 56em)': {
                        py: 5,
                        px: 6,
                        width: '50%',
                    },
                }}
            >
                {links}
            </Box>
        </div>
    )
}
