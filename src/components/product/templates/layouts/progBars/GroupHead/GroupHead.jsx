/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
// import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
import PropTypes from 'prop-types'
import Subhead from '../../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Subhead'
// import Headline from '../../../system/atoms/Text/Headline'
// import Subline from '../../../system/atoms/Text/Subline'

const GroupHead = ({ isOpen, groupHead, ...props }) => (
    <Subhead
        className="groupHead"
        {...animation.slideUp1}
        {...props}
        sx={{
            variant: [
                'styles.h5',
                'styles.h5',
                'styles.h4',
                'styles.h4',
                'styles.h4',
            ],
            // fontSize: [0, 3, 3, 3, 3],
            // paddingLeft: 0,
            // letterSpacing: 'normal',
            // fontWeight: 'bold',
            // textTransform: 'capitalize',
            // fontFamily: 'heading',
            mb: [0, 0, 4, 4, 4, 4],
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
