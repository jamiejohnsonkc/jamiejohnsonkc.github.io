/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Article from './Article'

export default {
title: 'Article',
}

export const standard = (props) => (
<Article p={6} m={4} bg='#e2e2e2'/>
)