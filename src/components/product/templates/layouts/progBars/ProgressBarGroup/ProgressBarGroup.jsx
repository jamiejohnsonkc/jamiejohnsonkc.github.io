/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
// import GroupGrid from '../GroupGrid/GroupGrid'
import GroupSubGrid from '../GroupSubGrid/GroupSubGrid'
import GroupSubhead from '../GroupSubhead/GroupSubhead'
// import GroupHead from '../GroupHead/GroupHead'

const ProgressBarGroup = ({
	groupSubGridColumns,
	groupHead,
	groupSubhead,
	subGridPaddingRight,
	...props
}) => (
	<>
		<GroupSubGrid
			className='groupSubGrid'
			columns={groupSubGridColumns}
			{...props}
			sx={{
				paddingRight: `${subGridPaddingRight}`,
			}}
		>
			<GroupSubhead
				className='groupSubhead'
				groupSubhead={groupSubhead}
				{...props}
				sx={{
					gridColumn: ['1/2', '1/2', '1/2', '1/2', '1/3', '1/3'],
				}}
			/>
			{props.children}
		</GroupSubGrid>
	</>
)

export default ProgressBarGroup
