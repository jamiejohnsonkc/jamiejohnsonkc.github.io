/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const Main = ({ variant, ...props }) => (
    <>
        <Box
            as="main"
            {...props}
            sx={{
                variant: `${variant}`,
            }}
        >
            {props.children}
        </Box>
    </>
)

Main.propTypes = {
    children: PropTypes.any,
    variant: PropTypes.string,
}

Main.defaultProps = {
    children: 'main',
    variant: 'layout.main',
}

export default Main
