/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'

import ProjectIconsBar from '../../layouts/ProjectIconsBar'

const ProjectVisual = ({
    iconFill,
    iconHeight,
    iconWidth,
    projectIcon1,
    projectIcon2,
    projectIcon3,
    projectImage,
    ...props
}) => (
    <Box
        as="aside"
        {...props}
        className="projectVisual"
        sx={{
            flex: [null, '1.2 1 0%', '1.2 1 0%', '1.2 1 0%', '1.2 1 0%'],
            minHeight: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: '1',
            alignSelf: [null, null, null, 'center', 'center', 'center'],
            // flexDirection: [null, null, 'column', 'column', 'column'],
        }}
    >
        <Box
            {...animation.slideUp2}
            {...props}
            sx={{
                pointerEvents: 'none',
                willChange: 'transform',
                width: '100%',
            }}
        >
            <Box
                className="largeProjectImageContainer"
                {...props}
                sx={{
                    boxShadow: 'subtleFirmLR',
                }}
            >
                {projectImage}
            </Box>

            <ProjectIconsBar
                iconFill={iconFill}
                iconHeight={iconHeight}
                iconWidth={iconWidth}
                projectIcon1={projectIcon1}
                projectIcon2={projectIcon2}
                projectIcon3={projectIcon3}
            />
        </Box>
    </Box>
)

ProjectVisual.propTypes = {}

ProjectVisual.defaultProps = {}

export default ProjectVisual
