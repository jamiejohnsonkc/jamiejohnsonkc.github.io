/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import GridCover from '../../containers/grids/GridCover'
// import Article from '../../../../../../../gatsby-theme-jim-components/src/components/containers/Article'

//TODO clean up source file

const SectionGrid = ({
    // containerMaxWidth,
    containerVariant,
    bg,
    px,
    py,
    sectionBg,
    justifyContent,
    alignItems,
    className,
    gridTemplateColumns,
    gridTemplateRows,
    variant,
    sectionVariant,
    ...props
}) => (
    <>
        <GridCover
            as="section"
            bg={sectionBg}
            className={className}
            variant={sectionVariant}
            {...props}
            sx={{
                py,
                px,
            }}
        >
            <Container
                className="container"
                variant={containerVariant}
                {...props}
                sx={{
                    display: 'grid',
                    justifyContent: `${justifyContent}`,
                    alignItems: `${alignItems}`,
                    gridTemplateColumns: `${gridTemplateColumns}`,
                    gridTemplateRows: `${gridTemplateRows}`,
                }}
                // sectionMinHeight='100px'
            >
                {props.children}
            </Container>
        </GridCover>
    </>
)

SectionGrid.propTypes = {
    alignItems: PropTypes.string,
    bg: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string,
    containerVariant: PropTypes.string,
    gridTemplateColumns: PropTypes.string,
    gridTemplateRows: PropTypes.string,
    justifyContent: PropTypes.string,
    sectionBg: PropTypes.string,
    sectionVariant: PropTypes.string,
    variant: PropTypes.string,
}

SectionGrid.defaultProps = {
    // containerVariant: 'layout.container',
    alignItems: 'center',
    containerVariant: 'layout.container',
    justifyContent: 'center',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto',
    sectionBg: 'transparent',
    children: 'section children',
}

export default SectionGrid
