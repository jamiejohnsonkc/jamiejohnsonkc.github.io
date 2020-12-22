/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
// import animation from '../../../../../../gatsby-theme-scroll-reveal/animation.js'
import PropTypes from 'prop-types'
import Subline from '../../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Subline'
import Display from '../../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Display'

const GroupSubhead = ({ groupSubhead, ...props }) => (
    <Display
        {...props}
        sx={{
            // fontFamily: 'heading',
            // paddingLeft: 0,
            // textTransform: 'uppercase',
            // letterSpacing: 'lazy',
            // fontWeight: 'semibold',
            fontSize: [1, 1, 2, 1, 2, 2],

            gridRow: '1/1',
            color: 'text',
            // borderBottom: (theme) => `thin solid ${theme.colors.primaryLight}`,
            // mb: [2, 2, 2, 2, 2, 2],
            // pb: [3, 3, 0, 0, 0, 0],
            // ml: [-2, -2, 0, 0, 0],
            // pl: [2, 2, 2, 2, 2],
            // borderRadius: 2,
        }}
    >
        {props.children}
    </Display>
)

GroupSubhead.propTypes = {
    groupSubhead: PropTypes.any,
}

GroupSubhead.defaultProps = {
    groupSubhead: 'Group Subheads',
}

export default GroupSubhead
