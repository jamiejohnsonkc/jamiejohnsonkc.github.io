/** @jsx jsx */
import { Php } from '@icons-pack/react-simple-icons'
import { DiSass } from 'react-icons/di'
import { jsx } from 'theme-ui'
import WordpressGlyph from '../../../../../../svg/assets/serviceGlyphs/wordpressGlyph.svg'
import ServiceCard from '../../../layouts/ServiceCard'
import CapabilitiesIconsBar from '../../CapabilitiesIconsBar'

// import CapabilitiesIconsBar from '../../CapabilitiesIconsBar'

const WpCrd = (props) => (
    <ServiceCard
        compImage={
            <CapabilitiesIconsBar
                capabilitiesIcon1={<WordpressGlyph />}
                capabilitiesIcon2={<DiSass className="diSassCapaIcon" />}
                capabilitiesIcon3={<Php className="phpCapaIcon" />}
            />
        }
        visualWidth="10em"
        headingText="Custom Wordpress Sites & Themes"
        textText="Technical updates, custom theming, capabilities expansion, rehab, modernization, or a simple refresh. I'm your guy."
        linkText="WP tools & workflow"
        iconName="SolidNorthEastArrow"
        linkTo="/"
    />
)

WpCrd.propTypes = {}

WpCrd.defaultProps = {}

export default WpCrd
