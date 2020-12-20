/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import animation from '../../../../../../../../gatsby-theme-scroll-reveal/animation'
import Subhead from '../../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Subhead'

//TODO resusafy

const GroupHead = ({ isOpen, groupHead, ...props }) => (
    <Subhead
        className="groupHead"
        // {...animation.slideUp1}
        {...props}
        sx={{
            variant: [
                'styles.d6',
                'styles.h5',
                'styles.h5',
                'styles.h5',
                'styles.h5',
                'styles.h5',
                'styles.h5',
                'styles.h5',
            ],
            mb: [0, 0, 4, 4, 4, 4, 4, 4],
        }}
        children={groupHead}
    />
)

GroupHead.propTypes = {
    groupHead: PropTypes.any,
}

GroupHead.defaultProps = {
    groupHead: 'Group Head',
}

export default GroupHead
