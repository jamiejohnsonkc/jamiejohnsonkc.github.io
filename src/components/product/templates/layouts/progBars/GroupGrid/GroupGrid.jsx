/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const GroupGrid = ({ groupGridColumns, ...props }) => (
	<Grid
		className='groupGrid'
		// columns={['1fr', '1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr']}
		columns={groupGridColumns}
		{...props}
		sx={{
			alignItems: 'baseline',
			mb: [0, 0, 0, 0, 0, 0],
			rowGap: ['0', '0', '0', '0', '0', '0'],
			columnGap: [0, 0, 4, 4, 5, 5],
		}}
	/>
)

GroupGrid.propTypes = {
	groupGridColumns: PropTypes.any,
}
GroupGrid.defaultProps = {
	groupGridColumns: '1fr',
}

export default GroupGrid
