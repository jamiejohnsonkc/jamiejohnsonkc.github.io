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

// import animation from '../../../../../gatsby-theme-scroll-reveal/animation'


// const content = [
//   {
//     id: "abc1",
//     title: "Web Development",
//     skills: [
//       {
//         id: "ab1",
//         subTitle: "Dev Platforms",
//         question: "What is Lorem Ipsum?",
//         answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//         bars: [
//           { id3: "abc11", bar: "bar1" },
//           { id3: "abc155", bar: "bar2" },
//           { id3: "abc56", bar: "bar3" },
//           { id3: "abc163456", bar: "bar4" }
//         ]
//       },
//       {
//         id: "ab2",
//         subTitle: "Best Practices",
//         question: "Where does it come from?",
//         answer: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
//         bars: [
//           { id3: "abc11", bar: "bar1" },
//           { id3: "abc155", bar: "bar2" },
//           { id3: "abc56", bar: "bar3" },
//           { id3: "abc163456", bar: "bar4" }
//         ]
//       },
//       {
//         id: "ab3",
//         subTitle: "Languages",
//         question: "Why do we use it?",
//         answer: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
//         bars: [
//           { id3: "abc11", bar: "bar1" },
//           { id3: "abc155", bar: "bar2" },
//           { id3: "abc56", bar: "bar3" },
//           { id3: "abc163456", bar: "bar4" }
//         ]
//       },
//       {
//         id: "ab4",
//         subTitle: "Workflow",
//         question: "Where can I get some?",
//         answer: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
//         bars: [
//           { id3: "abc11", bar: "bar1" },
//           { id3: "abc155", bar: "bar2" },
//           { id3: "abc56", bar: "bar3" },
//           { id3: "abc163456", bar: "bar4" }
//         ]
//       }
//     ]
//   },
//   {
//     id: "abcd5",
//     title: "Web Design",
//     skills: [
//       {
//         id: "abc6",
//         subTitle: "Design",
//         question: "What is Lorem Ipsum?",
//         answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//         bars: [
//           { id3: "abc11", bar: "bar1" },
//           { id3: "abc155", bar: "bar2" },
//           { id3: "abc56", bar: "bar3" },
//           { id3: "abc163456", bar: "bar4" }
//         ]
//       },
//       {
//         id: "abc7",
//         subTitle: "Coding",
//         question: "Where does it come from?",
//         answer: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
//         bars: [
//           { id3: "abc11", bar: "bar1" },
//           { id3: "abc155", bar: "bar2" },
//           { id3: "abc56", bar: "bar3" },
//           { id3: "abc163456", bar: "bar4" }
//         ]
//       },
//       {
//         id: "abc8",
//         subTitle: "Blah blah",
//         question: "Why do we use it?",
//         answer: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
//         bars: [
//           { id3: "abc11", bar: "bar1" },
//           { id3: "abc155", bar: "bar2" },
//           { id3: "abc56", bar: "bar3" },
//           { id3: "abc163456", bar: "bar4" }
//         ]
//       },
//       {
//         id: "ab9",
//         subTitle: "blahdy blah",
//         question: "Where can I get some?",
//         answer: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
//         bars: [
//           { id3: "abc11", bar: "bar1" },
//           { id3: "abc155", bar: "bar2" },
//           { id3: "abc56", bar: "bar3" },
//           { id3: "abc163456", bar: "bar4" }
//         ]
//       }
//     ]
//   }
// ];

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
