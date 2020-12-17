/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import ProjectVisual from '../ProjectVisual/ProjectVisual'
// import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
// import ProjectIconsBar from '../../layouts/ProjectIconsBar'

const ProjectVisualLarge = ({
    iconFill,
    projectIcon1,
    projectIcon2,
    projectIcon3,
    projectImage,
    iconHeight,
    iconWidth,
    ...props
}) => (
    <Box
        {...props}
        sx={{
            mt: 3,
            mb: 5,
            display: [
                'none',
                'none',
                'none',
                'none',
                'block',
                'block',
                'block',
                'block',
            ],
            flex: '1.3 0 auto',
            '& .projectVisualLarge': {
                display: [
                    'none',
                    'none',
                    'none',
                    'none',
                    'block',
                    'block',
                    'block',
                    'block',
                ],
            },
        }}
    >
        <ProjectVisual
            className="projectVisualLarge"
            iconFill={iconFill}
            iconHeight={iconHeight}
            iconWidth={iconWidth}
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
                    gridTemplateColumns: '1fr 1.5fr',
                },
                '& .projectIconGrid ': {
                    width: '7em',
                },
            }}
        />
    </Box>
)

ProjectVisualLarge.propTypes = {}

ProjectVisualLarge.defaultProps = {}

export default ProjectVisualLarge
