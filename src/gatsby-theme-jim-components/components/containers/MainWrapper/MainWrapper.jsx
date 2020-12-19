/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

// TODO OOC
const MainWrapper = (props) => (
    <Box
        {...props}
        sx={{
            backgroundColor: `${props.mainWrapperBgColor}`,
            position: 'relative',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            // height: [
            //     null,
            //     null,
            //     '100%',
            //     '100%',
            //     '100%',
            //     '100%',
            //     '100%',
            //     '100%',
            // ],
            width: '100%',
            // bg: 'blue',
            // p: [2, 2, 3, 3, 3, 3],
        }}
        children={props.children}
        className="mainWrapper"
    />
)

MainWrapper.propTypes = {
    mainWrapperBgColor: PropTypes.any,
}

MainWrapper.defaultProps = {
    mainWrapperBgColor: 'bleed',
}

export default MainWrapper
