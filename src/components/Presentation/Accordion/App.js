/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useState } from 'react'
import { GoChevronDown } from 'react-icons/go'
import Span from '../../../../../gatsby-theme-jim-components/src/components/system/atoms/Span'
import Card from './Card'
import groups from '../../../data/progressBarData'
import LabeledProgressBar from '../../../gatsby-theme-jim-components/components/system/organisms/LabeledProgressBar'
import GroupHead from '../../product/templates/layouts/progBars/GroupHead'
import GroupSubhead from '../../product/templates/layouts/progBars/GroupSubhead'
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
                width: [
                    '1em',
                    '1em',
                    '1.25em',
                    '1.25em',
                    '1.25em',
                    '1.25em',
                    '1.25em',
                    '1.25em',
                ],
                height: [
                    '1em',
                    '1em',
                    '1.25em',
                    '1.25em',
                    '1.25em',
                    '1.25em',
                    '1.25em',
                    '1.25em',
                ],
                transform: `${
                    activeEventKey !== skillId ? 'rotate(180deg)' : ''
                }`,

                '& > svg': {
                    opacity: '0.4',
                    width: [
                        '1em',
                        '1em',
                        '1.25em',
                        '1.25em',
                        '1.25em',
                        '1.25em',
                        '1.25em',
                        '1.25em',
                    ],
                    height: [
                        '1em',
                        '1em',
                        '1.25em',
                        '1.25em',
                        '1.25em',
                        '1.25em',
                        '1.25em',
                        '1.25em',
                    ],
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
        <Box
            className="accordionContainer"
            {...props}
            sx={{
                width: '100%',
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center',
                gridTemplateColumns: '1fr',
                marginBottom: [6, null, null, 0, null, null, null, null],
                minHeight: [null, null, null, '100%', null, null, null, null],
                overflowX: 'auto',
                touchAction: 'pan-x',
                // cursor: 'grab',
                overflowScrolling: 'touch',
                scrollbarWidth: 'none',
                height: [null, null, null, null, null, null, null, null],

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
            }}
        >
            <Accordion
                activeEventKey={activeEventKey}
                onToggle={setActiveEventKey}
                className="parentAccordion"
                {...props}
                sx={{
                    width: '100%',
                    margin: '0',
                    padding: 4,
                    backgroundColor: [
                        '#fff',
                        null,
                        null,
                        'transparent',
                        null,
                        null,
                        null,
                        null,
                    ],
                    borderRadius: '0.4rem',
                    overflow: 'hidden',
                    height: [null, null, null, null, null, null, null, null],
                }}
            >
                {groups.map((group, id) => {
                    return (
                        <Box
                            className="skillGroup"
                            key={group.id}
                            {...props}
                            sx={{
                                overflow: 'hidden',
                                transition: 'max-height 0.75s ease-in-out .1s',
                                height: 'auto',
                                maxHeight: '9999px',
                                mb: 4,
                            }}
                        >
                            <GroupHead>{group.groupHead}</GroupHead>

                            <Accordion
                                activeEventKey={activeEventKey}
                                onToggle={setActiveEventKey}
                                className="childAccordion"
                                {...props}
                                sx={{}}
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
                                                position: 'relative',
                                            }}
                                        >
                                            <GroupSubhead>
                                                {skill.groupSubhead}
                                            </GroupSubhead>
                                            <StyledChevronDwn
                                                activeEventKey={activeEventKey}
                                                skillId={skill.id}
                                            />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse
                                            eventKey={skill.id}
                                            element={Card.Body}
                                            className="accordionCollapse"
                                            {...props}
                                        >
                                            <Box
                                                className="accordionContentInner"
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
                                                        )
                                                    )}
                                                </Accordion>
                                            </Box>
                                        </Accordion.Collapse>
                                    </Card>
                                ))}
                            </Accordion>
                        </Box>
                    )
                })}
            </Accordion>
        </Box>
    )
}
