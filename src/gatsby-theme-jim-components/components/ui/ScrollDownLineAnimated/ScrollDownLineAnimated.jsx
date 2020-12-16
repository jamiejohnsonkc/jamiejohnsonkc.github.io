/** @jsx jsx */
import { jsx, Box, Grid } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import styles from './keyframes.module.css'
import animation from '../../../../../../gatsby-theme-scroll-reveal/animation'

const ScrollDownLineAnimated = ({ mt, ml, ...props }) => (
    <Grid
        {...animation.slideUpScrollDown}
        columns=".5fr 2.5fr"
        {...props}
        sx={{
            mt,
            ml,
            height: '4em',
            minHeight: '4em',
            // flex: '0 0 auto',
            display: ['none', null, 'grid', null, null, null, null],
            position: [
                'relative',
                'absolute',
                'relative',
                'absolute',
                null,
                null,
            ],
            bottom: [null, '0px', 'unset', '-44px', '-60px', '-90px'],
            left: ['16px', '16px', '-32px', null, null, null],
            gap: '0',
            alignItems: 'center',
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
                        backgroundColor: 'primary',
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
                color: 'primary',
                fontFamily: 'heading',
                fontSize: 'bold',
                fontSize: 0,
                letterSpacing: 'loose',
                textTransform: 'uppercase',
                display: 'block',
                justifyContent: 'left',
            }}
        >
            Scroll down
        </Grid>
    </Grid>
)

ScrollDownLineAnimated.propTypes = {}

ScrollDownLineAnimated.defaultProps = {}

export default ScrollDownLineAnimated
