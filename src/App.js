import React from "react";

import Accordion from "./components/Accordion";

const accordionItems = [
  {
    title: "What is React?",
    content: "React is a huge library that is based on components system",
  },
  {
    title: "Why is React?",
    content: "React facilitates working with HTML elements",
  },
  {
    title: "How to use React?",
    content: "Just call Stephen!",
  },
];

const App = () => {
  return <Accordion showItems={accordionItems} />;
};

export default App;
