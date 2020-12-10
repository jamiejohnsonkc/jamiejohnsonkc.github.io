/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import SlateDevSkills from '../../templates/slates/SlateDevSkills/SlateDevSkills'
import Layout from '../../templates/layouts/Layout'

const ReactDevSkillsPage = (props) => {
	return (
		<>
			<Layout>
				<SlateDevSkills sectionBg='background' />
			</Layout>
		</>
	)
}

export default ReactDevSkillsPage
