/** @jsx jsx */
import { useState } from 'react'
// import './styles.css'
import { GoChevronDown } from 'react-icons/go'
import { Box, jsx } from 'theme-ui'
import Groups from '../../../../../../../../gatsby-theme-jim-components/src/data/progressBarData'
import Span from '../../../../../../../../gatsby-theme-jim-components/src/components/system/atoms/Span'
import LabeledProgressBar from '../../../../../../../../gatsby-theme-jim-components/src/components/system/organisms/LabeledProgressBar'
// import { FaRegIdBadge } from 'react-icons/fa'
import GroupGrid from '../GroupGrid/GroupGrid'
import GroupHead from '../GroupHead'
import ProgressBarGroup from '../ProgressBarGroup'
import styled from '@emotion/styled'
// import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
// animation

const StyledUl = styled.ul``

const ProgBarGrpAccdn = (props) => {
    return (
        <Box
            className="accordionContainer"
            {...props}
            sx={{
                width: '100%',
                display: ['grid', 'grid', 'none', 'none', 'none', 'none'],
                justifyContent: 'center',
                alignItems: 'center',
                gridTemplateColumns: '1fr',
                marginBottom: 6,
            }}
        >
            <Box
                className="wrapper"
                {...props}
                sx={{
                    width: '100%',
                    px: [0, 0, 0, 0, 0],
                }}
            >
                <StyledUl
                    className="accordionList"
                    {...props}
                    sx={{
                        width: '100%',
                        listStyle: 'none',
                        margin: '0',
                        padding: '0',
                        backgroundColor: '#fff',
                        /* max-width: 30rem; */
                        borderRadius: '0.4rem',
                        overflow: 'hidden',
                        boxShadow: `0 0 0.8rem 0.1rem rgba(15, 72, 179, 0.06), 0 20px 30px -10px rgba(15, 72, 179, 0.2)`,
                    }}
                >
                    {Groups.map((group, id) => {
                        return (
                            <Box
                                className="accordionListItem"
                                key={id}
                                {...props}
                                sx={{
                                    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                                    '& + accordionListItem': {
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.1)',
                                    },
                                }}
                            >
                                <AccordionItem group={group} groupId={id} />
                            </Box>
                        )
                    })}
                </StyledUl>
            </Box>
        </Box>
    )
}

const AccordionItem = ({
    group,
    groupId,
    groupGridColumns,
    groupSubGridColumns,
    groupHead,
    groupsSubhead,
    progressLabel,
    ...props
}) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <Box
            className={`accordionItem ${isOpen ? 'accordionItemOpened' : ''}`}
            onClick={() => setOpen(!isOpen)}
            {...props}
            sx={{
                overflow: 'hidden',
                transition: 'max-height 0.75s ease-in-out .1s',
                height: 'auto',
                maxHeight: '9999px',
            }}
        >
            {/* <h3 {...{ className: 'accordionItem__title' }}>{title}</h3> */}
            <Box
                className="accordionToggle"
                {...props}
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '11fr 1fr',
                    justifyContent: 'spaceBetween',
                    alignItems: 'center',
                    // backgroundColor: '#fff',
                    zIndex: '2',
                    position: 'relative',
                    // py: `${isOpen ? 4 : 4}`,
                    py: 4,
                    px: [4, 4, 4, 4, 4, 4],
                    // py: `${isOpen ? 4 : ''}`,
                    mb: `${isOpen ? 4 : 0}`,
                    backgroundColor: `${isOpen ? 'primaryDark' : '#fff'}`,
                    boxShadow: `${isOpen ? 'uiDivide' : ''}`,
                    color: `${isOpen ? 'revText' : 'text'}`,
                    transition: 'all .75s ease-in-out .3s',
                    willChange:
                        'color, boxShadow, p, marginBottom, backgroundColor',
                }}
            >
                <GroupHead
                    key={groupId}
                    groupHead={group.groupHead}
                    sx={{
                        color: `${isOpen ? 'revText' : 'text'}`,
                        transition: 'color .75s ease-in-out .1s',
                    }}
                />

                <Span
                    className="accordionItemIcon"
                    {...props}
                    sx={{
                        display: 'grid',
                        justifyContent: 'center',
                        alignItems: 'center',
                        transition: 'transform 0.75s ease-in-out .1s',
                        width: [
                            '1.25em',
                            '1.5em',
                            '1.25em',
                            '1.25em',
                            '1.25em',
                        ],
                        height: [
                            '1.25em',
                            '1.5em',
                            '1.25em',
                            '1.25em',
                            '1.25em',
                        ],
                        transform: `${isOpen ? 'rotate(180deg)' : ''}`,

                        '& > svg': {
                            stroke: `${isOpen ? 'muted' : 'revText'}`,
                            opacity: '0.6',
                            width: [
                                '1.25em',
                                '1.5em',
                                '1.25em',
                                '1.25em',
                                '1.25em',
                            ],
                            height: [
                                '1.25em',
                                '1.5em',
                                '1.25em',
                                '1.25em',
                                '1.25em',
                            ],
                        },
                    }}
                >
                    <GoChevronDown />
                </Span>
            </Box>
            <Box
                className="accordionItemInner"
                {...props}
                sx={{
                    px: [4, 4, 4, 4, 4],
                    maxHeight: `${isOpen ? '200em' : '0'}`,
                    willChange: 'max-height',
                    transition: 'max-height .75s ease-in-out .3s',
                    overflow: 'hidden',
                    // textTransform: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
                    // transitionDuration: '0.5s',
                    // transitionProperty: 'max-height',
                    zIndex: '1',
                    position: 'relative',
                    // transitionTimingFunction: `${
                    // 	isOpen ? 'cubic-bezier(0.895, 0.03, 0.685, 0.22)' : ''
                    // }`,
                    // transitionDuration: `${isOpen ? '0.5s' : '0.5s'}`,
                    // transitionProperty: `${isOpen ? 'max-height' : ''}`,
                }}
            >
                <Box
                    className="accordionItemContent"
                    {...props}
                    sx={{
                        // transform: 'translateY(-2em)',
                        opacity: `${isOpen ? '1' : '0'}`,
                        transition:
                            'opacity .75s ease-in-out .1s, transform .75s ease-in-out .1s',
                        transform: `${
                            isOpen ? 'translateY(0)' : 'translateY(-2em)'
                        }`,
                        // transitionDelay: `${isOpen ? '0.5s' : '0.5s'}`,
                        // transitionTimingFunction: `${isOpen ? 'ease-in-out' : ''}`,
                        // transitionDuration: `${isOpen ? '0.5s' : '0.5s'}`,
                        // transitionProperty: `${isOpen ? 'opacity, transform' : ''}`,
                    }}
                >
                    <GroupGrid groupGridColumns={group.groupGridColumns}>
                        {group.skillSets.map((skillSet, id) => (
                            <ProgressBarGroup
                                key={id}
                                groupSubhead={skillSet.groupSubhead}
                                groupSubGridColumns={
                                    skillSet.groupSubGridColumns
                                }
                                subGridPaddingRight={[2, 2, 0, 0, 0]}
                            >
                                {skillSet.bars.map((bar, id) => (
                                    <LabeledProgressBar
                                        key={id}
                                        progressLabel={bar.label}
                                        done={bar.done}
                                    />
                                ))}
                            </ProgressBarGroup>
                        ))}
                    </GroupGrid>
                </Box>
            </Box>
        </Box>
    )
}

ProgBarGrpAccdn.propTypes = {}

ProgBarGrpAccdn.defaultProps = {}

export default ProgBarGrpAccdn
