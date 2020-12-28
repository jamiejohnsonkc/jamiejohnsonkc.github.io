/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useState } from 'react'
// import './styles.css'

import { GoChevronDown } from 'react-icons/go'
import Span from '../../../../../gatsby-theme-jim-components/src/components/system/atoms/Span'

import Card from './Card'
import groups from '../../../data/progressBarData'
import LabeledProgressBar from '../../../gatsby-theme-jim-components/components/system/organisms/LabeledProgressBar'
import GroupHead from '../../product/templates/layouts/progBars/GroupHead'
import GroupSubhead from '../../product/templates/layouts/progBars/GroupSubhead'
import Subhead from '../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Subhead'

import Accordion from './Accordion'


const StyledChevronDwn = ({ activeEventKey, skillId, ...props }) => (
    <>
        <Span
            className="accordionItemIcon"
            {...props}
            sx={{
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'transform 250ms ease-in-out',
                width: ['1em', '1em', '1.25em', '1.25em', '1.25em','1.25em', '1.25em', '1.25em'],
                height: ['1em', '1em', '1.25em', '1.25em', '1.25em','1.25em', '1.25em', '1.25em'],
                // transform: `${isOpen ? 'rotate(180deg)' : ''}`,
                transform: `${
                    activeEventKey !== skillId ? 'rotate(180deg)' : ''
                }`,

                '& > svg': {
                    // stroke: `${isOpen ? 'muted' : 'revText'}`,
                    opacity: '0.4',
                    width: ['1em', '1em', '1.25em', '1.25em', '1.25em','1.25em', '1.25em', '1.25em'],
                    height: ['1em', '1em', '1.25em', '1.25em', '1.25em','1.25em', '1.25em', '1.25em'],
                },
            }}
        >
            <GoChevronDown />
        </Span>
    </>
)

export default function App(props) {
    const [activeEventKey, setActiveEventKey] = useState(false)

    return (
        // <div className="App" {...animation.slideUp4}>
    //    <Box className='tempWrapper' {...props} sx={{
    //    maxWidth: '90vw',
    //    margin: '4em auto',
    //    }}>



        <Box className="accordionContainer"  {...props}
        sx={{
            width: '100%',
            // display: ['grid', 'grid', 'grid', 'none', 'none', 'none','none', 'none'],
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            gridTemplateColumns: '1fr',
            marginBottom: [6, null, null, 0, null,null, null, null],
            minHeight: [null,null,null,'100%',null,null,null,null],
            overflowX: 'auto',
            touchAction: 'pan-x',
            // cursor: 'grab',
            overflowScrolling: 'touch',
            scrollbarWidth: 'none',
            height: [null,null,null,null,null,null,null,null],

            '&::-webkit-scrollbar': {
                display: [
                    null,
                    null,
                    'none',
                    'none',
                    'none',
                    'none',
                    'none',
                    'none',
                ],
            },

        }}>
            {/* <Subhead
                {...props}
                sx={{
                    variant: ['styles.d4'],
                }}
            >
                Skills &amp; Capabilities
            </Subhead> */}
            <Accordion
                activeEventKey={activeEventKey}
                onToggle={setActiveEventKey}
            className='parentAccordion'
                {...props} sx={{
                    width: '100%',
                    // listStyle: 'none',
                    margin: '0',
                    padding: 4,
                    backgroundColor: ['#fff', null,null,'transparent',null,null,null,null],
                    /* max-width: 30rem; */
                    borderRadius: '0.4rem',
                    overflow: 'hidden',
                    height: [null,null,null,null,null,null,null,null],
                    // boxShadow: `0 0 0.8rem 0.1rem rgba(15, 72, 179, 0.06), 0 20px 30px -10px rgba(15, 72, 179, 0.2)`,
            }}
            >
                {groups.map((group, id) => {
                    return (
                        <Box
                            className="skillGroup"
                            key={group.id}
                            {...props}
                            sx={{
                                // borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                                // '& + accordionListItem': {
                                //     borderTop:
                                //         '1px solid rgba(0, 0, 0, 0.1)',
                                // },
                                overflow: 'hidden',
                                transition: 'max-height 0.75s ease-in-out .1s',
                                height: 'auto',
                                maxHeight: '9999px',
                                mb: 4,
                            }}
                        >
                            <GroupHead>{group.groupHead}</GroupHead>

                            <Accordion
                                className="skills"
                                activeEventKey={activeEventKey}
                                onToggle={setActiveEventKey}
                                className='childAccordion'
                                {...props} sx={{

                                }}
                            >
                                {group.skillSets.map((skill, id) => (
                                    <Card
                                        key={skill.id}
                                        {...props}
                                        sx={{
                                            width: '100%',
                                            py: 2,
                                            overflow: 'hidden',
                                            transition:
                                                'max-height 0.75s ease-in-out .1s',
                                            height: 'auto',
                                            maxHeight: '9999px',
                                        }}
                                    >
                                        <Accordion.Toggle
                                            element={Card.Header}
                                            eventKey={skill.id}
                                            activeEventKey={activeEventKey}
                                            onToggle={setActiveEventKey}
                                            {...props}
                                            sx={{
                                                display: 'grid',
                                                gridTemplateColumns: '11fr 1fr',
                                                justifyContent: 'spaceBetween',
                                                alignItems: 'center',
                                                // backgroundColor: '#fff',
                                                //  zIndex: '2',
                                                position: 'relative',
                                                // py: `${isOpen ? 4 : 4}`,
                                                //  py: 4,
                                                //  px: [4, 4, 4, 4, 4, 4],
                                                // py: `${isOpen ? 4 : ''}`,
                                                //  mb: `${activeEventKey === skill.id ? 4 : 0}`,
                                                //  backgroundColor: `${activeEventKey === skill.id ? 'primaryDark' : '#fff'}`,
                                                //  boxShadow: `${activeEventKey === skill.id ? 'uiDivide' : ''}`,
                                                //  color: `${activeEventKey === skill.id ? 'revText' : 'text'}`,
                                                // transition:
                                                //     'all .75s ease-in-out .3s',
                                                // willChange:
                                                //     'color, boxShadow, p, marginBottom, backgroundColor',
                                            }}
                                        >
                                            <GroupSubhead>
                                                {skill.groupSubhead}
                                            </GroupSubhead>
                                            {/* {activeEventKey !== skill.id && (
                                                <><Span>👇🏻</Span><StyledChevronDwn activeEventKey={activeEventKey} skillId={skill.id}/></>
                                            )}
                                            {activeEventKey === skill.id && (
                                                <Span>👆🏻</Span>
                                            )} */}
                                            <StyledChevronDwn
                                                activeEventKey={activeEventKey}
                                                skillId={skill.id}
                                            />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse
                                            eventKey={skill.id}
                                            element={Card.Body}
                                           className='accordionCollapse'
                                            {...props}

                                            // sx={{
                                            //     px: [4, 4, 4, 4, 4, 4, 4, 4],
                                            //     // maxHeight: `${
                                            //     //     activeEventKey === skill.id
                                            //     //         ? '200em'
                                            //     //         : '0'
                                            //     // }`,
                                            //     transition:
                                            //     'max-height .75s, ease-in-out .3s',
                                            //     overflow: 'hidden',
                                            //     position: 'relative',
                                            //     willChange: 'max-height',
                                            // }}
                                        >

                                            <Box
                                                className='accordionContentInner'
                                                {...props}
                                                sx={{
                                                    opacity: `${
                                                        activeEventKey ===
                                                        skill.id
                                                            ? '1'
                                                            : '0'
                                                    }`,
                                                    transition:
                                                        'opacity .3s ease-in-out .1s',
                                                    // transform: `${
                                                    //     activeEventKey ===
                                                    //     skill.id
                                                    //         ? 'translateY(0)'
                                                    //         : 'translateY(-2em)'
                                                    // }`,
                                                }}
                                            >
                                                <Accordion
                                                    className="Bars"
                                                    activeEventKey={
                                                        activeEventKey
                                                    }
                                                    onToggle={setActiveEventKey}

                                                    {...props}
                                                    sx={{
                                                        px: 2,
                                                        py: 3,
                                                    }}
                                                >
                                                    {skill.bars.map(
                                                        (bar, id) => (
                                                            <LabeledProgressBar
                                                                key={bar.id}
                                                                progressLabel={
                                                                    bar.label
                                                                }
                                                                done={bar.done}

                                                            />
                                                            //  <div key={id3}>{bar.bar}</div>
                                                        )
                                                    )}
                                                </Accordion>
                                            </Box>
                                        </Accordion.Collapse>
                                    </Card>
                                ))}
                            </Accordion>
                            {/* </div> */}
                            {/* </div> */}
                        </Box>
                    )
                })}
            </Accordion>
        </Box>

    )
}
