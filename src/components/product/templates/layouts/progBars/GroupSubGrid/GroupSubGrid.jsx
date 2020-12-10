/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const GroupSubGrid = ({
	// groupSubGridColumns,
	// groupSubhead,
	groupSubGridColumns,
	bars,
	...props
}) => (
	<Grid
		className='groupSubGrid'
		columns={groupSubGridColumns}
		{...props}
		sx={{
			mb: 5,
			rowGap: [3, 3, 2, 2, 3],
			columnGap: [0, 0, 4, 4, 4],
			display: ['grid', 'grid', 'grid', 'grid', 'grid'],
		}}
	>
		{/* {bars} */}
	</Grid>
)

GroupSubGrid.propTypes = {
	// bars: PropTypes.any,
	// groupSubhead: PropTypes.any,
}

GroupSubGrid.defaultProps = {
	// bars: <PlatformsBars />,
	// groupSubhead: 'groupSubhead',
}

export default GroupSubGrid
