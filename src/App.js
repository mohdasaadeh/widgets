import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

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
  const [selectedDropdown, setSelectedDropdown] = useState(dropdownOptions[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion showItems={accordionItems} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={dropdownOptions}
          selectedItem={selectedDropdown}
          onItemSelect={setSelectedDropdown}
        />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
