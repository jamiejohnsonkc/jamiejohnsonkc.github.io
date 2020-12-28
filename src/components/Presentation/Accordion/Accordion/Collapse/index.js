/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

import { useAccordionContext } from '../hooks'

const Collapse = ({ eventKey, children, opacity, props, ...otherProps }) => {
    const { activeEventKey } = useAccordionContext()

    return (
        <Box
            {...props}
            sx={{
                maxHeight: `${activeEventKey === eventKey ? '200em' : '0'}`,
height: 'auto',
transition: `${activeEventKey === eventKey ? 'max-height 0.3s cubic-bezier(1, 0, 1, 0)' : 'max-height 0.3s cubic-bezier(0, 1, 0, 1)'}`,
// transition: `${'max-height 0.3s cubic-bezier(1, 0, 1, 0)'}`,
overflow: 'hidden',
position: 'relative',
                willChange: 'max-height',
            }}
        >
            {children}
        </Box>
    )
}

Collapse.propTypes = {
    // element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Collapse.defaultProps = {
    // element: 'div',
}

export default Collapse
