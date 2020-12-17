/** @jsx jsx */
import PropTypes from 'prop-types'
import { FaLinkedinIn, FaSpotify } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'
import { GrMail } from 'react-icons/gr'
import { Box, jsx } from 'theme-ui'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
import IconLink from '../../../bits/IconLink'

// TODO refactor with mapping & json input

const LinkBox = (props) => (
    <Box
        {...props}
        sx={{
            flex: '1 1 auto',
            width: ['2em', '4em', '2em', '2em', '2em'],
            height: ['2em', '4em', '2em', '2em', '2em'],
            // transition: 'transform 0.25ms ease-in-out',
            '&:hover': {
                transform: 'translateY(2px)',
                transition: 'transform 0.25ms ease-in-out',
            },
        }}
    />
)

const ContactIconsBar = ({
    display,
    flex,
    width,
    linkBoxTransform,
    mb,
    mt,
    minHeight,
    alignItems,
    alignSelf,
    paddingLeft,
    ...props
}) => {
    return (
        <Box
            {...props}
            sx={{
                flex,
                width,
                display,
                mb,
                mt,
                alignItems,
                minHeight,
                alignSelf,
                paddingLeft,
            }}
        >
            <LinkBox
                // {...animation.navIconSlideUp2}
                {...props}
                sx={{
                    // transform: 'translateY(100px)',
                    transform: `${linkBoxTransform}`,
                    transition: 'all .25ms ease-in',
                    opacity: 0,
                }}
            >
                <IconLink
                    iconInverseBgColor="background"
                    linkTo="https://github.com/jamiejohnsonkc"
                >
                    <GoMarkGithub />
                </IconLink>
            </LinkBox>

            <LinkBox
                // {...animation.navIconSlideUp3}
                {...props}
                sx={{
                    // transform: 'translateY(100px)',
                    transform: `${linkBoxTransform}`,
                    transition: 'all .25ms ease-in',
                    opacity: 0,
                }}
            >
                <IconLink
                    iconInverseBgColor="rgb(215,152,77)"
                    linkTo="https://www.linkedin.com/in/jamiejohnsonkc/#ember595"
                >
                    <FaLinkedinIn />
                </IconLink>
            </LinkBox>
            <LinkBox
                // {...animation.navIconSlideUp4}
                {...props}
                sx={{
                    // transform: 'translateY(100px)',
                    transform: `${linkBoxTransform}`,
                    transition: 'all .25ms ease-in',
                    opacity: 0,
                }}
            >
                <IconLink
                    iconInverseBgColor="rgb(226,70,171)"
                    linkTo="https://open.spotify.com/user/jamiejohnsonkc?si=cq46-ZW5Q0eyyqiil014Lg"
                >
                    <FaSpotify />
                </IconLink>
            </LinkBox>

            <LinkBox
                // {...animation.navIconSlideUp5}
                {...props}
                sx={{
                    // transform: 'translateY(100px)',
                    transform: `${linkBoxTransform}`,
                    transition: 'all .25ms ease-in',
                    opacity: 0,
                }}
            >
                <IconLink
                    iconInverseBgColor="primary"
                    linkTo="mailto:jamiejohnsonkc@gmail.com"
                >
                    <GrMail />
                </IconLink>
            </LinkBox>
        </Box>
    )
}

ContactIconsBar.propTypes = {
    // barWidth: PropTypes.any,
    linkBoxTransform: PropTypes.any,
}

ContactIconsBar.defaultProps = {
    // barWidth: '100%',
    linkBoxTransform: 'translateY(100px)',
}

export default ContactIconsBar
