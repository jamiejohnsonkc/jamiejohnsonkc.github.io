/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const ProgressBar = ({
    done,
    level,
    progressColor,
    progressBarBg,
    progressBarShadow,
    ...props
}) => {
    return (
        <Box
            {...props}
            className="progressBarBg"
            sx={{
                backgroundColor: `${progressBarBg}`,
                borderRadius: '20px',
                position: 'relative',
                margin: '8px 0',
                height: '6px',
                width: '100%',
                overflow: 'hidden',
            }}
        >
            <Box
                {...props}
                sx={{
                    backgroundColor: `${progressColor}`,
                    boxShadow: `${progressBarShadow}`,
                    borderRadius: '20px',
                    color: [
                        'primary',
                        null,
                        // 'transparent',
                        null,
                        null,
                        null,
                        null,
                        null,
                    ],
                    width: `${done}%`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    // opacity: '0',
                    // transition: [
                    //     null,
                    //     null,
                    //     null,
                    //     'all 1s ease-in',
                    //     'all 1s ease-in',
                    //     'all 1s ease-in',
                    //     'all 1s ease-in',
                    //     'all 1s ease-in',
                    // ],
                    fontFamily: 'heading',
                    fontSize: 0,
                    willChange: 'opacity, transform',
                }}
            >
                {level}
            </Box>
        </Box>
    )
}

ProgressBar.propTypes = {
    done: PropTypes.any,
    progressColor: PropTypes.any,
    progressBarBg: PropTypes.any,
    progressBarShadow: PropTypes.any,
    level: PropTypes.any,
}

ProgressBar.defaultProps = {
    // progressBarBg: 'linear-gradient(to left, #c5c5c5, #a7a7a7 )',
    progressColor: 'primaryLight',
    progressBarBg: 'overlay2',
    progressBarShadow: '0 3px 3px -5px #c5c5c5, 0 2px 5px #a7a7a7',
    // level: 'intermediate',
    done: '50',
}

export default ProgressBar
