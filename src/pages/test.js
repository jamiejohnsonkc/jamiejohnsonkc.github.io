/** @jsx jsx */
import { jsx, Link, Box } from 'theme-ui'
import React, { useState } from 'react'

import { GoChevronDown } from 'react-icons/go'
import Layout from '../components/product/templates/layouts/Layout'
import ProgressBar from '../gatsby-theme-jim-components/components/system/molecules/ProgressBar'
import animation from '../../../gatsby-theme-scroll-reveal/animation'
import SlateDevSkills from '../components/product/templates/slates/SlateDevSkills'
import Groups from '../../../gatsby-theme-jim-components/src/data/progressBarData'
import GroupHead from '../components/product/templates/layouts/progBars/GroupHead'
import GroupSubhead from '../components/product/templates/layouts/progBars/GroupSubhead'
import GroupGrid from '../components/product/templates/layouts/progBars/GroupGrid'
import LabeledProgressBar from '../gatsby-theme-jim-components/components/system/organisms/LabeledProgressBar'
import ProgressBarGroup from '../components/product/templates/layouts/progBars/ProgressBarGroup'
import Span from '../../../gatsby-theme-jim-components/src/components/system/atoms/Span'
import GroupSubGrid from '../components/product/templates/layouts/progBars/GroupSubGrid'






const Test = ({ groupSubhead, ...props }) => {


    return (
        <>
            <Layout>
                <Box>
                    {Groups.map((group, id) => {
                        return (
                            <Box
                                className="accordionListItem"
                                key={group.id}
                                {...props}
                                sx={{
                                    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                                    '& + accordionListItem': {
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.1)',
                                    },
                                }}
                            >
                                <GroupHead
                                    key={group.id}
                                    groupHead={group.groupHead}
                                />


<AccordionItem group={group} groupId={id}/>


                            </Box>
                        )
                    })}
                </Box>
            </Layout>
        </>
    )
}


const AccordionItem = ({
    group,
    groupId,
    groupGridColumns,
    groupSubGridColumns,
    groupSubhead,
    progressLabel,
    ...props
}) => {
    const [isOpen, setOpen] = useState(false)
    return (

<Box>
            {group.skillSets.map((skillSet, id2) => {
                return (
                    <Box
                        className={`accordionItem ${
                            isOpen
                                ? 'accordionItemOpened'
                                : ''
                        }`}
                        onClick={() => setOpen(!isOpen)}
                        {...props}
                        sx={{
                            overflow: 'hidden',
                            transition:
                                'max-height 0.75s ease-in-out .1s',
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
                                gridTemplateColumns:
                                    '11fr 1fr',
                                justifyContent:
                                    'spaceBetween',
                                alignItems: 'center',
                                // backgroundColor: '#fff',
                                zIndex: '2',
                                position: 'relative',
                                // py: `${isOpen ? 4 : 4}`,
                                py: 4,
                                px: [4, 4, 4, 4, 4, 4],
                                // py: `${isOpen ? 4 : ''}`,
                                mb: `${isOpen ? 4 : 0}`,
                                backgroundColor: `${
                                    isOpen
                                        ? 'primaryDark'
                                        : '#fff'
                                }`,
                                boxShadow: `${
                                    isOpen ? 'uiDivide' : ''
                                }`,
                                color: `${
                                    isOpen
                                        ? 'revText'
                                        : 'text'
                                }`,
                                transition:
                                    'all .75s ease-in-out .3s',
                                willChange:
                                    'color, boxShadow, p, marginBottom, backgroundColor',
                            }}
                        >
                            <GroupSubhead
                            key={skillSet.id}
                            className='subHead'
                            groupSubhead={
                                    skillSet.groupSubhead
                                }
                            />
                            <Span
                                className="accordionItemIcon"
                                {...props}
                                sx={{
                                    display: 'grid',
                                    justifyContent:
                                        'center',
                                    alignItems: 'center',
                                    transition:
                                        'transform 0.75s ease-in-out .1s',
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
                                    transform: `${
                                        isOpen
                                            ? 'rotate(180deg)'
                                            : ''
                                    }`,

                                    '& > svg': {
                                        stroke: `${
                                            isOpen
                                                ? 'muted'
                                                : 'revText'
                                        }`,
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
                                maxHeight: `${
                                    isOpen ? '200em' : '0'
                                }`,
                                willChange: 'max-height',
                                transition:
                                    'max-height .75s ease-in-out .3s',
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
                                    opacity: `${
                                        isOpen ? '1' : '0'
                                    }`,
                                    transition:
                                        'opacity .75s ease-in-out .1s, transform .75s ease-in-out .1s',
                                    transform: `${
                                        isOpen
                                            ? 'translateY(0)'
                                            : 'translateY(-2em)'
                                    }`,
                                    // transitionDelay: `${isOpen ? '0.5s' : '0.5s'}`,
                                    // transitionTimingFunction: `${isOpen ? 'ease-in-out' : ''}`,
                                    // transitionDuration: `${isOpen ? '0.5s' : '0.5s'}`,
                                    // transitionProperty: `${isOpen ? 'opacity, transform' : ''}`,
                                }}
                            >
                                <GroupGrid
                                    groupGridColumns={group.groupGridColumns}>

                                     <GroupSubGrid
                                            className="groupSubGrid"
                                            columns={groupSubGridColumns}
                                            {...props}
                                            sx={{
                                                paddingRight: [2,2,0,0,0,0,0,0],
                                            }}
                                        >

                                          <Box>
                                            {skillSet.bars.map((bar,id3) => (
                                                        <LabeledProgressBar
                                                            key={
                                                                bar.id3
                                                            }
                                                            progressLabel={
                                                                bar.label
                                                            }
                                                            done={
                                                                bar.done
                                                            }
                                                        />
                                                    )
                                                )}
                                               </Box>
                                </GroupSubGrid>





                                            {/* // <ProgressBarGroup
                                            //     key={
                                            //         skillSet.id2
                                            //     }
                                            //     // groupSubhead={
                                            //     //     skillSet.groupSubhead
                                            //     // }
                                            //     groupSubGridColumns={
                                            //         skillSet.groupSubGridColumns
                                            //     }
                                            //     subGridPaddingRight={[
                                            //         2,
                                            //         2,
                                            //         0,
                                            //         0,
                                            //         0,
                                            //     ]}
                                            // >

                                            // </ProgressBarGroup>
                                        // )
                                    // )} */}
                                </GroupGrid>
                            </Box>
                        </Box>
                    </Box>
                )
            })}
</Box>
    )
}









export default Test
