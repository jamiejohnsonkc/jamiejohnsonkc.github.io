/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import animation from '../../../../../../../../gatsby-theme-scroll-reveal/animation'
import Subhead from '../../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Subhead'
import Display from '../../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Display'

//TODO resusafy

const GroupHead = ({ isOpen, groupHead, ...props }) => (
    <Display
        className="groupHead"
        // {...animation.slideUp1}
        {...props}
        sx={{
            variant: [
                'styles.d6',
                'styles.d5',
                'styles.d4',
                'styles.d5',
                'styles.d5',
                'styles.d5',
                'styles.d5',
                'styles.d5',
            ],
            fontWeight: 'semibold',
            mb: [2, 2, 2, 4, 4, 4, 4, 4],
        }}
    >
        {props.children}
    </Display>
)

GroupHead.propTypes = {
    groupHead: PropTypes.any,
}

GroupHead.defaultProps = {
    groupHead: 'Group Head',
}

export default GroupHead
