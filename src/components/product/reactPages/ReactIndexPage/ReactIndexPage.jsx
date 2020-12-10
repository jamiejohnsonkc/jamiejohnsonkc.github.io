/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import SlateIntro from '../../templates/slates/SlateIntro'
import SlateSummary from '../../templates/slates/SlateSummary'
import SlateProjects from '../../templates/slates/SlateProjects'
import SlateServices from '../../templates/slates/SlateServices'
import SlateHistory from '../../templates/slates/SlateHistory'
import Layout from '../../templates/layouts/Layout'
import SlateValue from '../../templates/slates/SlateValue/SlateValue'
import SlateClose from '../../templates/slates/SlateClose'
import Bottom from '../../../../../../gatsby-theme-jim-components/src/components/containers/Bottom'

const ReactIndexPage = (props) => {
    return (
        <>
            <Layout>
                <SlateIntro sectionBg="background" />
                <SlateSummary id="about" sectionBg="revOverlay5" />
                <SlateProjects
                    id="projects"
                    project1Bg="transparent"
                    project1NumberColor="revOverlay95"
                    project2Bg="blackSurface"
                    project2TextColor="revText"
                    project2NumberColor="revOverlay2"
                    project3Bg="transparent"
                />
                <SlateServices id="services" sectionBg="overlay3" />
                <SlateValue id="value" sectionBg="darkBackground" />
                <SlateHistory id="history" sectionBg="fullWhite" />
                <SlateClose id="contact" sectionBg="overlay1" />
                <Bottom />
            </Layout>
        </>
    )
}

export default ReactIndexPage
