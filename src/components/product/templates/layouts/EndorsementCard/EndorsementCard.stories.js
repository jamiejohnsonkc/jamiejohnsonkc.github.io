import React from 'react'
import FpoImageWireFrame from '../../../../../../../gatsby-theme-jim-components/src/components/utilities/fpo/FpoImageWireFrame'
import EndorsementCard from './EndorsementCard'

export default {
  title: 'EndorsementCard',
}

export const standard = () => (
  <EndorsementCard
    animation="slide-up"
    cardBg="white"
    cardWidth="24em"
    extLinkText="Read More on LinkedIn"
    extLinkTo="/"
    profilePic={<FpoImageWireFrame />}
    imageHeight="9em"
    imageMb={4}
    imageWidth="9em"
    textMb={3}
    textText="'Dolore id consectetur proident et sint adipisicing ipsum ullamco incididunt voluptate sunt.'"
    endorserName="John Doe"
    endorserTitle="-President, Acme Inc."
  />
)
