import React, { useState } from "react";

import Dropdown from "./Dropdown";
import Convert from "./Convert";

const dropdownOptions = [
  { label: "Arabic", value: "ar" },
  { label: "German", value: "de" },
  { label: "Hindi", value: "hi" },
];

const Translate = () => {
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(
    dropdownOptions[0]
  );
  const [term, setTerm] = useState("");

  return (
    <React.Fragment>
      <input
        type="text"
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
      <Dropdown
        label="Select a Language"
        options={dropdownOptions}
        selectedItem={selectedDropdownItem}
        onItemSelect={setSelectedDropdownItem}
      />
      <Convert language={selectedDropdownItem} text={term} />
    </React.Fragment>
  );
};

export default Translate;
