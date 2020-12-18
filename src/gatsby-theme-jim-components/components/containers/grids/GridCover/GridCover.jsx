/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
// import styled from '@emotion/styled'

// const StyledGrid = styled(Grid)(
// 	{
// 		position: 'relative',
// 		height: '100%',
// 		width: '100%',
// 	},
// 	(props) => ({ alignItems: props.gridAlignItems }),
// 	(props) => ({ justifyContent: props.gridJustifyContent })
// alignItems: `(props) => ${props.gridAlignItems}`,
// )

// const StyledGrid = ({
// 	justifyContent,
// 	alignItems,
// 	gridTemplateColumns,
// 	bg,
// 	variant,
// 	sectionBg,
// 	...props
// }) => (
// 	<Grid
// 		{...props}
// 		sx={{
// 			bg,
// 			justifyContent,
// 			alignItems,
// 			gridTemplateColumns,
// 			variant,
// 			position: 'relative',
// 			height: '100%',
// 			width: '100%',
// 		}}
// 	>
// 		{props.children}
// 	</Grid>
// )

// const GridCover = ({
// 	className,
// 	alignItems,
// 	gridTemplateColumns,
// 	gridTemplateRows,
// 	justifyContent,
// 	as,
// 	bg,
// 	variant,
// 	sectionBg,
// 	...props
// }) => (
// 	<StyledGrid
// 		as={as}
// 		alignItems={alignItems}
// 		justifyContent={justifyContent}
// 		children={props.children}
// 		className={className}
// 		gridTemplateColumns={gridTemplateColumns}
// 		gridTemplateRows={gridTemplateRows}
// 		bg={bg}
// 		variant={variant}
// 	/>
// )

const GridCover = ({
    alignItems,
    as,
    bg,
    py,
    px,
    // gridPy,
    // gridPx,
    justifyContent,
    gridTemplateColumns,
    gridTemplateRows,
    variant,
    ...props
}) => (
    <Grid
        {...props}
        as={as}
        bg={bg}
        sx={{
            alignItems,
            justifyContent,
            gridTemplateColumns,
            gridTemplateRows,
            variant,
            position: 'relative',
            minHeight: '100%',
            width: '100%',
            // py: `${gridPy}`,
            // px: `${gridPx}`,
            py,
            px,
        }}
        children={props.children}
    />
)

GridCover.propTypes = {
    alignItems: PropTypes.any,
    as: PropTypes.any,
    bg: PropTypes.any,
    gridTemplateColumns: PropTypes.any,
    gridTemplateRows: PropTypes.any,
    justifyContent: PropTypes.any,
    children: PropTypes.any,
    variant: PropTypes.any,
    // gridPy: PropTypes.any,
    // gridPx: PropTypes.any,
}

GridCover.defaultProps = {
    alignItems: 'center',
    as: 'div',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto',
    justifyContent: 'center',
    children: 'gridCover children',
    variant: 'layout.section',
    // gridPy: '0px',
    // gridPx: '0px',
}

export default GridCover
