import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const FluidNetlifyPage = () => {
	const data = useStaticQuery(graphql`
		{
			file(relativePath: { eq: "netlifyedge.png" }) {
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

	return (
		<Img fluid={data.file.childImageSharp.fluid} alt='Netlify Edge Website' />
	)
}

export default FluidNetlifyPage
