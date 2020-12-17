/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const Main = (props) => {
    return (
        <Box
            {...props}
            sx={{
                // height: '100%',
                zIndex: 1,
                // padding: [null, null, 3, 3, 3, 3],
            }}
        >
            {props.children}
        </Box>
    )
}

export default Main
