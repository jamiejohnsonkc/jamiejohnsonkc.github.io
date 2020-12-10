import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const FluidStorybook = () => {
	const data = useStaticQuery(graphql`
		{
			file(relativePath: { eq: "storybook.png" }) {
				childImageSharp {
					fluid {
						base64
						aspectRatio
						src
						srcSet
						sizes
					}
				}
			}
		}
	`)

	return <Img fluid={data.file.childImageSharp.fluid} alt='Storybook Site' />
}

export default FluidStorybook
