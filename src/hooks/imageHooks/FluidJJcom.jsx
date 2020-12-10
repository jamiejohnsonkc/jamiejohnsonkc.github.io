import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const FluidJJcom = () => {
	const data = useStaticQuery(graphql`
		{
			file(relativePath: { eq: "jjcom.png" }) {
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
		<Img fluid={data.file.childImageSharp.fluid} alt='Prior Self Promo Page' />
	)
}

export default FluidJJcom
