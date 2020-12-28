/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import GroupSubGrid from '../GroupSubGrid/GroupSubGrid'
import GroupSubhead from '../GroupSubhead/GroupSubhead'

// TODO reusafy

const ProgressBarGroup = ({
    groupSubGridColumns,
    groupSubhead,
    subGridPaddingRight,
    ...props
}) => (
    <Box>
        <GroupSubGrid
            className="groupSubGrid"
            columns={groupSubGridColumns}
            {...props}
            sx={{
                paddingRight: `${subGridPaddingRight}`,
            }}
        >
            <GroupSubhead
                className="groupSubhead"
                groupSubhead={groupSubhead}
                {...props}
                sx={{
                    gridColumn: [
                        '1/2',
                        '1/2',
                        '1/2',
                        '1/2',
                        '1/3',
                        '1/3',
                        '1/3',
                        '1/3',
                    ],
                    // color: `${isOpen ? 'revText' : 'text'}`,
                    transition: 'color .75s ease-in-out .1s',
                }}
            />
            {props.children}
        </GroupSubGrid>
    </Box>
)

export default ProgressBarGroup
