import React, { useState } from 'react';
import './styles.css';

import Accordion from './Accordion';

import Card from './Card';
import groups from '../../../data/progressBarData'


const content = [
  {
    id: "abc1",
    title: "Web Development",
    skills: [
      {
        id2: "ab1",
        subTitle: "Dev Platforms",
        question: "What is Lorem Ipsum?",
        answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        bars: [
          { id3: "abc11", bar: "bar1" },
          { id3: "abc155", bar: "bar2" },
          { id3: "abc56", bar: "bar3" },
          { id3: "abc163456", bar: "bar4" }
        ]
      },
      {
        id2: "ab2",
        subTitle: "Best Practices",
        question: "Where does it come from?",
        answer: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
        bars: [
          { id3: "abc11", bar: "bar1" },
          { id3: "abc155", bar: "bar2" },
          { id3: "abc56", bar: "bar3" },
          { id3: "abc163456", bar: "bar4" }
        ]
      },
      {
        id2: "ab3",
        subTitle: "Languages",
        question: "Why do we use it?",
        answer: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
        bars: [
          { id3: "abc11", bar: "bar1" },
          { id3: "abc155", bar: "bar2" },
          { id3: "abc56", bar: "bar3" },
          { id3: "abc163456", bar: "bar4" }
        ]
      },
      {
        id2: "ab4",
        subTitle: "Workflow",
        question: "Where can I get some?",
        answer: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
        bars: [
          { id3: "abc11", bar: "bar1" },
          { id3: "abc155", bar: "bar2" },
          { id3: "abc56", bar: "bar3" },
          { id3: "abc163456", bar: "bar4" }
        ]
      }
    ]
  },
  {
    id: "abcd5",
    title: "Web Design",
    skills: [
      {
        id2: "abc6",
        subTitle: "Design",
        question: "What is Lorem Ipsum?",
        answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        bars: [
          { id3: "abc11", bar: "bar1" },
          { id3: "abc155", bar: "bar2" },
          { id3: "abc56", bar: "bar3" },
          { id3: "abc163456", bar: "bar4" }
        ]
      },
      {
        id2: "abc7",
        subTitle: "Coding",
        question: "Where does it come from?",
        answer: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
        bars: [
          { id3: "abc11", bar: "bar1" },
          { id3: "abc155", bar: "bar2" },
          { id3: "abc56", bar: "bar3" },
          { id3: "abc163456", bar: "bar4" }
        ]
      },
      {
        id2: "abc8",
        subTitle: "Blah blah",
        question: "Why do we use it?",
        answer: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
        bars: [
          { id3: "abc11", bar: "bar1" },
          { id3: "abc155", bar: "bar2" },
          { id3: "abc56", bar: "bar3" },
          { id3: "abc163456", bar: "bar4" }
        ]
      },
      {
        id2: "ab9",
        subTitle: "blahdy blah",
        question: "Where can I get some?",
        answer: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
        bars: [
          { id3: "abc11", bar: "bar1" },
          { id3: "abc155", bar: "bar2" },
          { id3: "abc56", bar: "bar3" },
          { id3: "abc163456", bar: "bar4" }
        ]
      }
    ]
  }
];

// const Skills = (props) => {
//   const [activeEventKey, setActiveEventKey] = useState(0);

//   return (
//     <div className="Skills">
//       <Accordion activeEventKey={activeEventKey} onToggle={setActiveEventKey}>
//         {content.map(({ subTitle }, id2) => (
//           <Card key={id2}>
//             <Accordion.Toggle element={Card.Header} eventKey={id2}>
//               {id2 + 1}. <div>{subTitle}</div>
//               {activeEventKey !== id2 && <span>👇🏻</span>}
//               {activeEventKey === id2 && <span>👆🏻</span>}
//             </Accordion.Toggle>
//             <Accordion.Collapse
//               eventKey={id2}
//               element={Card.Body}
//             ></Accordion.Collapse>
//           </Card>
//         ))}
//       </Accordion>
//     </div>
//   );
// };

export default function App() {
  const [activeEventKey, setActiveEventKey] = useState(0);
  return (
    <div className="App">
      <h3>Controlled Accordion</h3>
      <Accordion>
        {content.map((content, id) => {
          return (
            <div key={content.id}>
              <div>{content.title}</div>
              <div>
                {/* {answer} */}
                <div className="Skills">
                  <Accordion>
                    {content.skills.map((skill, id2) => (
                      <Card key={id2}>
                        <Accordion.Toggle element={Card.Header} eventKey={id2}>
                          <div>{skill.subTitle}</div>
                          {activeEventKey !== id2 && <span>👇🏻</span>}
                          {activeEventKey === id2 && <span>👆🏻</span>}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={id2} element={Card.Body}>
                          <div className="Bars">
                            <Accordion
                              activeEventKey={activeEventKey}
                              onToggle={setActiveEventKey}
                            >
                              {skill.bars.map((bar, id3) => (
                                <div key={id3}>{bar.bar}</div>
                              ))}
                            </Accordion>
                          </div>
                        </Accordion.Collapse>
                      </Card>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          );
        })}
      </Accordion>
    </div>
  );
}
