/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useRef } from 'react'
import NavOverlay from '../../../../../../../gatsby-theme-nav-fulloverlay/src/NavOverlay'
import Main from '../../../../../../../gatsby-theme-jim-components/src/components/containers/Main'
import MainWrapper from '../../../../../../../gatsby-theme-jim-components/src/components/containers/MainWrapper'
// import useOutsideClick from '../../../../../../../gatsby-theme-nav-fulloverlay/src/hooks/useOutsideClick'

const Layout = (props) => {
    // const ref = useRef()

    // useOutsideClick(ref, () => {
    //     alert('You clicked outside')
    // })

    return (
        <>
            <MainWrapper>
                <NavOverlay>
                    <Main>{props.children}</Main>
                </NavOverlay>
            </MainWrapper>
        </>
    )
}
export default Layout
