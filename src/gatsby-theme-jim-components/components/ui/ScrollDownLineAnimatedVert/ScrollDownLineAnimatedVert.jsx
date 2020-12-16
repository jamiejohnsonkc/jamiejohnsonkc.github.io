/** @jsx jsx */
import { jsx, Box, Grid } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import styles from './keyframes.module.css'
import animation from '../../../../../../gatsby-theme-scroll-reveal/animation'

const ScrollDownLineAnimatedVert = (props) => (
    <Grid
        {...animation.fadeSlow}
        columns=".5fr 2.5fr"
        {...props}
        sx={{
            height: '4em',
            display: ['none', 'none', 'grid', 'grid', 'grid', 'grid'],
            position: 'absolute',
            bottom: '44px',
            right: 0,
            gap: '0',
            alignItems: 'center',
            zIndex: 3,
        }}
    >
        <Grid gap="0">
            <Grid
                id={styles.scrollDown}
                {...props}
                sx={{
                    position: 'relative',
                    paddingTop: '51px',
                    textAlign: 'center',
                    '&::before': {
                        background: (theme) => `${theme.colors.primary}`,
                        position: 'absolute',
                        top: '0px',
                        left: '50%',
                        marginLeft: '-1px',
                        width: '1px',
                        height: '60px',
                        content: '""',
                    },
                }}
            >
                <span
                    className="arrow-down"
                    {...props}
                    sx={{
                        margin: '0 auto',
                        width: '10px',
                        height: '0px',
                    }}
                >
                    {/* <!-- css generated icon --> */}
                </span>
            </Grid>
        </Grid>
        <Grid
            id="scroll-title"
            {...props}
            sx={{
                color: (theme) => `${theme.colors.primary}`,
                fontFamily: 'heading',
                fontSize: 'bold',
                fontSize: 0,
                letterSpacing: 'loose',
                textTransform: 'uppercase',
                display: 'block',
                justifyContent: 'left',
                transform: 'rotate(90deg)',
                position: 'absolute',
                width: '10em',
                top: '-40px',
                left: '-58px',
            }}
        >
            Scroll down
        </Grid>
    </Grid>
)

ScrollDownLineAnimatedVert.propTypes = {}

ScrollDownLineAnimatedVert.defaultProps = {}

export default ScrollDownLineAnimatedVert
