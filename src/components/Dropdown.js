import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selectedItem, onItemSelect }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (dropdownRef.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.label === selectedItem.label) return null;

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onItemSelect(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={dropdownRef} className="ui form" onClick={() => setOpen(!open)}>
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selectedItem.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
