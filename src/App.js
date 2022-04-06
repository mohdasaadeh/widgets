import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

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

const dropdownOptions = [
  { label: "The Red Color", value: "red" },
  { label: "The Blue Color", value: "blue" },
  { label: "The Green Color", value: "green" },
];

const App = () => {
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(
    dropdownOptions[0]
  );

  return (
    <Dropdown
      options={dropdownOptions}
      selectedItem={selectedDropdownItem}
      onItemSelect={setSelectedDropdownItem}
    />
  );
};

export default App;
