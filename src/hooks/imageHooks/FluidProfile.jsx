import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const FluidProfile = () => {
    const data = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "trueBlack.png" }) {
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
        <Img
            fluid={data.file.childImageSharp.fluid}
            alt="monotone profile pic"
        />
    )
}

export default FluidProfile
