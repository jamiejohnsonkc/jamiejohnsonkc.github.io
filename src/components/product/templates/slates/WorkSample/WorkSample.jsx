/** @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
import { Box, Divider, jsx, Text } from 'theme-ui'
import Article from '../../../../../../../gatsby-theme-jim-components/src/components/containers/Article'
import SectionFlex from '../../../../../../../gatsby-theme-jim-components/src/components/containers/SectionFlex'
import Pill from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/buttons/Pill'
import Headline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import Display from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Display'
import Body from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Body'
import ExtLink from '../../../../../../../gatsby-theme-jim-components/src/components/ui/ExtLink'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
import FluidNetlifyPage from '../../../../../hooks/imageHooks/FluidNetlifyPage'
import ReactGlyph from '../../../../../svg/assets/serviceGlyphs/reactGlyph.svg'
import ProjectVisualLarge from '../../elements/ProjectVisualLarge'
import ProjectVisualSmall from '../../elements/ProjectVisualSmall/ProjectVisualSmall'

// TODO refactor, add tooltip, dry up pills, move to appropriate dir
// TODO add context hook to alter project number animation on mobile

const WorkSample = ({
    // sectionBg,
    containerVariant,
    iconFill,
    iconHeight,
    smallIconFill,
    smallIconHeight,
    iconWidth,
    projectHeadline,
    projectIcon1,
    projectIcon2,
    projectIcon3,
    projectImage,
    projectNumber,
    projectNumberColor,
    projectSubhead,
    projectText,
    repoLinkTo,
    sectionBg,
    siteLinkTo,
    textColor,
    ...props
}) => (
    <>
        <SectionFlex
            // containerFlexDirection={(theme) =>
            //     `${theme.layout.containerFlexDirectionColRow}`
            // }

            sectionBg={sectionBg}
            className="workSampleSection"
            {...props}
            sx={{
                '.container': {
                    variant: 'layout.workSampleFlexContainer',
                },
            }}
        >
            <Article
                {...props}
                className="workSampleArticle"
                sx={{
                    variant: 'layout.workSampleArticle',
                }}
            >
                <Box
                    className="projectNumberContainer"
                    {...animation.fadeSlow}
                    {...props}
                    sx={{
                        // display: 'flex',
                        position: [
                            'relative',
                            'relative',
                            'relative',
                            'relative',
                            'absolute',
                            'absolute',
                            'absolute',
                            'absolute',
                        ],
                        top: [
                            null,
                            null,
                            null,
                            null,
                            '-6em',
                            '-11em',
                            '-11em',
                            '-11em',
                        ],
                        left: [
                            null,
                            null,
                            null,
                            null,
                            '-2.5em',
                            '-5em',
                            null,
                            null,
                        ],
                        flex: 'none',
                        display: 'block',
                        minHeight: '4em',
                        height: [
                            null,
                            null,
                            null,
                            null,
                            '6em',
                            '6em',
                            '6em',
                            '6em',
                        ],
                        lineHeight: 1,
                        minWidth: '100%',
                        zIndex: '2',
                    }}
                >
                    <Text
                        className="projectNumber"
                        {...props}
                        sx={{
                            color: `${projectNumberColor}`,
                            // color: [
                            //     'red',
                            //     'green',
                            //     'blue',
                            //     'cyan',
                            //     'magenta',
                            //     'yellow',
                            //     'black',
                            //     'purple',
                            // ],
                            fontSize: [
                                '4em',
                                '6em',
                                '8em',
                                '10em',
                                '14em',
                                '20em',
                                '20em',
                                '20em',
                            ],

                            fontFamily: 'heading',
                            fontWeight: 'heavy',
                            letterSpacing: 'tight',
                            transform: [null, null],
                        }}
                    >
                        {projectNumber}
                    </Text>
                </Box>

                <Box
                    className="projectIntro"
                    {...props}
                    sx={{
                        px: [0, 0, 0, 2, 2, 2, 2, 2],
                        position: 'relative',
                        zIndex: 2,
                        width: '100%',
                    }}
                >
                    <Headline
                        as="h1"
                        {...props}
                        className="projectHeading"
                        sx={{
                            variant: [
                                'styles.h5',
                                'styles.h5',
                                'styles.h5',
                                'styles.h4',
                                'styles.h4',
                                'styles.h4',
                                'styles.h3',
                                'styles.h4',
                            ],
                            mb: 2,
                            letterSpacing: 'tight',
                            color: `${textColor}`,
                        }}
                        {...animation.slideUp2}
                    >
                        {projectHeadline}
                    </Headline>
                    <Divider
                        {...props}
                        {...animation.slideUp2}
                        sx={{
                            width: [
                                '1.618em',
                                null,
                                null,
                                null,
                                '3.236em',
                                null,
                                null,
                                null,
                            ],
                            mb: 2,
                            backgroundColor: 'revText',
                        }}
                    />
                    <Display
                        className="projectSubhead"
                        {...props}
                        sx={{
                            variant: [
                                'styles.d5',
                                null,
                                null,
                                null,
                                null,
                                null,
                                'styles.d4',
                                null,
                            ],
                            color: `${textColor}`,
                            mb: [0, 4, 4, 4, 2, null, 4, null],
                            pr: [0, 0, 0, 1, 0, null, null, null],
                        }}
                        {...animation.slideUp3}
                    >
                        {projectSubhead}
                    </Display>
                    <ProjectVisualSmall
                        {...props}
                        className="projectVisualSmall"
                        iconFill={iconFill}
                        smallIconHeight="1em"
                        smallIconWidth="1em"
                        projectImage={projectImage}
                        projectIcon1={projectIcon1}
                        projectIcon2={projectIcon2}
                        projectIcon3={projectIcon3}
                    />
                    <Body
                        {...props}
                        className="projectText"
                        // variant="styles.p2"
                        sx={{
                            mb: [5, null, null, null, null, null, null, null],
                            color: `${textColor}`,
                            maxWidth: [
                                '22em',
                                null,
                                '100%',
                                null,
                                null,
                                '22em',
                                '22em',
                                null,
                            ],
                            variant: [
                                'styles.p2',
                                null,
                                null,
                                null,
                                null,
                                null,
                                'styles.p2',
                                null,
                            ],
                        }}
                        {...animation.slideUp4}
                    >
                        {projectText}
                    </Body>
                    {/* //TODO refactor out button button */}
                    <Box
                        {...props}
                        sx={{
                            display: [
                                'flex',
                                'flex',
                                'block',
                                'block',
                                'block',
                                'block',
                                'block',
                                'block',
                            ],
                            flexWrap: [
                                'wrap',
                                'wrap',
                                'none',
                                'none',
                                'none',
                                'none',
                                'none',
                                'none',
                            ],
                        }}
                    >
                        {/* <Pill
								{...props}
								{...animation.slideUp5}
								className='siteLinkButton'
								sx={{
									mr: [0, 0, 2, 2, 2],
									mb: [3, 4, 0, 0, 0],
									// color: (t) => `${t.buttons.gray}`,
									bg: 'primary',
									flex: ['1 0 100%', '1 0 100%', '0', '0', '0'],
									'& > a': {
										mr: 0,
									},
								}}
							>
								<ExtLink
									linkTo={siteLinkTo}
									{...props}
									sx={{
										color: 'revText',
									}}
								>
									Site
								</ExtLink>
								</Pill> */}
                        <Pill
                            {...props}
                            className="repoLinkButton"
                            sx={{
                                bg: 'primary',
                                flex: [
                                    '1 0 100%',
                                    '1 0 100%',
                                    '0',
                                    '0',
                                    '0',
                                    '0',
                                    '0',
                                    '0',
                                ],
                                '& > a': {
                                    mr: 0,
                                },
                            }}
                            {...animation.slideUp6}
                        >
                            <ExtLink
                                linkTo={repoLinkTo}
                                {...props}
                                sx={{
                                    color: 'revText',
                                }}
                            >
                                Repo
                            </ExtLink>
                        </Pill>
                    </Box>
                </Box>
            </Article>
            <ProjectVisualLarge
                {...props}
                iconFill={iconFill}
                iconHeight="1.5em"
                iconWidth="1.5em"
                projectImage={projectImage}
                projectIcon1={projectIcon1}
                projectIcon2={projectIcon2}
                projectIcon3={projectIcon3}
            />
        </SectionFlex>
    </>
)

WorkSample.propTypes = {
    containerFlexDirection: PropTypes.any,
    iconFill: PropTypes.string,
    iconHeight: PropTypes.any,
    iconWidth: PropTypes.any,
    projectHeadline: PropTypes.string,
    projectIcon1: PropTypes.any,
    projectIcon2: PropTypes.any,
    projectIcon3: PropTypes.any,
    projectImage: PropTypes.any,
    projectNumber: PropTypes.string,
    projectNumberColor: PropTypes.string,
    projectSubhead: PropTypes.string,
    projectText: PropTypes.string,
    repoLinkTo: PropTypes.string,
    sectionBg: PropTypes.any,
    siteLinkTo: PropTypes.string,
    smallIconFill: PropTypes.any,
    smallIconHeight: PropTypes.any,
    textColor: PropTypes.string,
}

WorkSample.defaultProps = {
    projectHeadline: 'Project Heading',
    iconFill: 'muted',
    projectIcon1: <ReactGlyph />,
    projectIcon2: <ReactGlyph />,
    projectIcon3: <ReactGlyph />,
    projectImage: <FluidNetlifyPage />,
    projectNumber: '007',
    projectNumberColor: 'overlay1',
    projectSubhead: 'Project Subhead',
    projectText:
        'Nostrud amet eiusmod fugiat labore duis commodo. Ipsum qui dolor sint velit voluptate ut. Amet ad ut proident nostrud exercitation tempor culpa. Elit ad aliquip elit mollit laboris ipsum ipsum veniam exercitation culpa ad esse proident Lorem.',
    repoLinkTo: '/repo',
    // sectionBg: 'transparent',
    siteLinkTo: '/site',
    textColor: 'text',
}

export default WorkSample
