/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
// import Glyph from '../../../../../src/svg/assets/jjGlyph.svg'
import PropTypes from 'prop-types'
import Glyph from '../../../../svg/assets/jjGlyph.svg'

const Logo = (props) => (
    <Box
        className="headerBrand"
        {...props}
        sx={{
            width: ['2em', '3em', '3em', '3em', '3em'],
            height: ['2em', '3em', '3em', '3em', '3em'],
            display: 'inline-flex',
            cursor: 'pointer',
            // display: 'flex',
            lineHeight: '40px',
            pointerEvents: 'all',
            textDecoration: 'none',
            transition: 'opacity 0.2s ease-in 0s',
            willChange: 'opacity',
            '& > svg': {
                height: '100%',
                width: '100%',
            },
        }}
    >
        <Glyph
            {...props}
            sx={{
                '.jjglyphFg': {
                    fill: 'headerBrand',
                    transition: 'fill 0.2s ease-in 0s',
                },
                ':hover .jjglyphFg': {
                    fill: 'headerBrandHover',
                    transition: 'fill 0.2s ease-in 0s',
                },
                ':hover .jjglyphAccent': {
                    fill: 'headerElementAccentHover',
                    transition: 'fill 0.2s ease-in 0s',
                },
                '.jjglyphAccent': {
                    fill: 'headerElementAccent',
                    transition: 'fill 0.2s ease-in 0s',
                },
                '.jjglyphBg': {
                    fill: 'transparent',
                    transition: 'fill 0.2s ease-in 0s',
                },
                ':hover .jjglyphBg': {
                    fill: 'headerElementBgHover',
                    transition: 'fill 0.2s ease-in 0s',
                },
            }}
        />
    </Box>
)

export default Logo
