/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import ProjectVisual from '../ProjectVisual/ProjectVisual'
// import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
// import ProjectIconsBar from '../../layouts/ProjectIconsBar'

const ProjectVisualSmall = ({
    iconFill,
    projectIcon1,
    projectIcon2,
    projectIcon3,
    projectImage,
    smallIconHeight,
    smallIconWidth,
    ...props
}) => (
    <Box
        {...props}
        sx={{
            mt: 3,
            mb: 5,
            display: ['block', 'block', 'block', 'none', 'none', 'none'],
            '& .projectVisualSmall': {
                display: ['block', 'block', 'block', 'none', 'none', 'none'],
            },
        }}
    >
        <ProjectVisual
            className="projectVisualSmall"
            iconFill={iconFill}
            iconHeight={smallIconHeight}
            iconWidth={smallIconWidth}
            projectImage={projectImage}
            projectIcon1={projectIcon1}
            projectIcon2={projectIcon2}
            projectIcon3={projectIcon3}
            {...props}
            sx={{
                '&. projectIconLabel': {
                    fontSize: '10px',
                },
                '& .projectIconsBarContainer': {
                    gridTemplateColumns: '1fr 1.25fr',
                },
                '& .projectIconGrid ': {
                    width: '5em',
                },
            }}
        />
    </Box>
)

ProjectVisualSmall.propTypes = {}

ProjectVisualSmall.defaultProps = {}

export default ProjectVisualSmall
