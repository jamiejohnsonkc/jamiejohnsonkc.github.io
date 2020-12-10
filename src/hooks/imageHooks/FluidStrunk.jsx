import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const FluidStrunk = () => {
	const data = useStaticQuery(graphql`
		{
			file(relativePath: { eq: "MStrunk.jpg" }) {
				childImageSharp {
					fluid(grayscale: true) {
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
		<Img fluid={data.file.childImageSharp.fluid} alt='Image of Merrit Strunk' />
	)
}

export default FluidStrunk
