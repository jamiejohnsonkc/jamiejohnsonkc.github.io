/** @jsx jsx */
import { jsx, Image } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import UiLogo from '../../../../../jamiejohnsonkc/src/images/UiLogo.png'

const UiLogoIcon = (props) => (
    <Image
        {...props}
        sx={{
            height: '1.5em',
            width: '1.5em',
            display: 'inline-block !important',
            ml: '0 !important',
        }}
        src={UiLogo}
        alt="Theme-Ui"
    />
)

UiLogoIcon.propTypes = {}

UiLogoIcon.defaultProps = {}

export default UiLogoIcon
