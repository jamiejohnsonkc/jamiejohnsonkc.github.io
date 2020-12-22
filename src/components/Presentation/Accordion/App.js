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
import animation from '../../../../../gatsby-theme-scroll-reveal/animation'

// const content = [
//   {
//     id: "abc1",
//     title: "Web Development",
//     skills: [
//       {
//         id2: "ab1",
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
//         id2: "ab2",
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
//         id2: "ab3",
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
//         id2: "ab4",
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
//         id2: "abc6",
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
//         id2: "abc7",
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
//         id2: "abc8",
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
//         id2: "ab9",
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

export default function App(props) {
    const [activeEventKey, setActiveEventKey] = useState(false)
    return (
        // <div className="App" {...animation.slideUp4}>
              <div className="App">
            <Subhead
                {...props}
                sx={{
                    variant: ['styles.d4'],
                }}
            >
                Skills &amp; Capabilities
            </Subhead>
            <Accordion>
                {groups.map((group, id) => {
                    return (
                        <Box
                            className="skillGroup"
                            key={group.id}
                            {...props}
                            sx={{
                                mb: 4,
                            }}
                        >
                            <GroupHead>{group.groupHead}</GroupHead>

                            <Accordion className="skills">
                                {group.skillSets.map((skill, id2) => (
                                    <Card
                                        key={skill.id2}
                                        {...props}
                                        sx={{
                                            width: '100%',
                                            py: 2,
                                        }}
                                    >
                                        <Accordion.Toggle
                                            element={Card.Header}
                                            eventKey={id2}
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
                                                //  mb: `${isOpen ? 4 : 0}`,
                                                //  backgroundColor: `${isOpen ? 'primaryDark' : '#fff'}`,
                                                //  boxShadow: `${isOpen ? 'uiDivide' : ''}`,
                                                //  color: `${isOpen ? 'revText' : 'text'}`,
                                                //  transition: 'all .75s ease-in-out .3s',
                                                //  willChange:
                                                //      'color, boxShadow, p, marginBottom, backgroundColor',
                                            }}
                                        >
                                            <GroupSubhead>
                                                {skill.groupSubhead}
                                            </GroupSubhead>
                                            {activeEventKey !== id2 && <Span>👇🏻</Span>}
                                             {activeEventKey === id2 && <Span>👆🏻</Span>}
                                            {/* <Span
                                                className="accordionItemIcon"
                                                {...props}
                                                sx={{
                                                    display: 'grid',
                                                    justifyContent: 'center',
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
                                                    // transform: `${isOpen ? 'rotate(180deg)' : ''}`,
                                                    transform: `${
                                                        activeEventKey
                                                            ? 'rotate(180deg)'
                                                            : ''
                                                    }
                          //  ${activeEventKey === id2 && 'rotate(180deg)'}`,

                                                    '& > svg': {
                                                        // stroke: `${isOpen ? 'muted' : 'revText'}`,
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
                                            </Span> */}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse
                                            eventKey={id2}
                                            element={Card.Body}
                                        >
                                            <Accordion
                                                className="Bars"

                                                {...props}
                                                sx={{
                                                    px: 2,
                                                    py: 3,
                                                }}
                                            >
                                                {skill.bars.map((bar, id3) => (
                                                    <LabeledProgressBar
                                                        key={id3}
                                                        progressLabel={
                                                            bar.label
                                                        }
                                                        done={bar.done}
                                                    />
                                                    //  <div key={id3}>{bar.bar}</div>
                                                ))}
                                            </Accordion>
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
        </div>
    )
}
