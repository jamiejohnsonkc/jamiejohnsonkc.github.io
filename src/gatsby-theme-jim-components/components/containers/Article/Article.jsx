/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

const Article = ({ className, articleBg, articleVariant, ...props }) => (
    <Box
        as="article"
        className={className}
        bg={articleBg}
        {...props}
        sx={{
            variant: `${articleVariant}`,
            display: 'block',
            position: 'relative',
        }}
    />
)

Article.propTypes = {
    articleVariant: PropTypes.any,
    articleBg: PropTypes.string,
}

Article.defaultProps = {
    articleVariant: 'layout.article',
}

export default Article
