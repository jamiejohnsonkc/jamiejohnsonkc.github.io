/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import GroupGrid from '../GroupGrid/GroupGrid'
import GroupHead from '../GroupHead/GroupHead'
import ProgressBarGroup from '../ProgressBarGroup/ProgressBarGroup'
import Groups from '../../../../../../../../gatsby-theme-jim-components/src/data/progressBarData'
import LabeledProgressBar from '../../../../../../../../gatsby-theme-jim-components/src/components/system/organisms/LabeledProgressBar/index'

//TODO resusafy

const ProgBarGrpMap = ({
    groupGridColumns,
    groupSubGridColumns,
    groupHead,
    groupsSubhead,
    progressLabel,
    done,
    ...props
}) => {
    return (
        <Box
            className="gridWrapper"
            {...props}
            sx={{
                // bg: 'white',
                width: '100%',
                borderRadius: 6,
                py: [6, 6, 6, 5, 6, 6, 6, 6],
                // px: [1, 1, 4, 6, 6,6, 6],
                pr: [0, 0, 0, 0, 4, 0, 4, 0],
                mt: [4, 4, 0, 0, 0, 0, 0, 0],
                display: [
                    'none',
                    'none',
                    'block',
                    'block',
                    'block',
                    'block',
                    'block',
                    'block',
                ],
            }}
        >
            <Box className="grid">
                {Groups.map((group, id) => (
                    <Box>
                        <GroupHead key={group.id} groupHead={group.groupHead} />
                        <GroupGrid groupGridColumns={group.groupGridColumns}>
                            {group.skillSets.map((skillSet, id2) => (
                                <ProgressBarGroup
                                    key={skillSet.id2}
                                    groupSubhead={skillSet.groupSubhead}
                                    groupSubGridColumns={
                                        skillSet.groupSubGridColumns
                                    }
                                >
                                    {skillSet.bars.map((bar, id3) => (
                                        <LabeledProgressBar
                                            key={bar.id3}
                                            progressLabel={bar.label}
                                            done={bar.done}
                                        />
                                    ))}
                                </ProgressBarGroup>
                            ))}
                        </GroupGrid>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

ProgBarGrpMap.propTypes = {}

ProgBarGrpMap.defaultProps = {}

export default ProgBarGrpMap
