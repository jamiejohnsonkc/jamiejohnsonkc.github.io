/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import ProgressBarGroup from '../components/product/templates/layouts/progBars/ProgressBarGroup'
import LabeledProgressBar from '../gatsby-theme-jim-components/components/system/organisms/LabeledProgressBar'
import Groups from '../data/progressBarData'
import App from '../components/Presentation/Accordion'
import Layout from '../components/product/templates/layouts/Layout'

const test = (props) => (
    <>
        <Layout>
            <App />
        </Layout>
    </>
)

export default test
