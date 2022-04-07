import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selectedItem, onItemSelect }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (dropdownRef.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    // We added { capture: true } because when we want to unmount the Dropdown component,
    // we click on any of the other widgets, and when we click we should activate this event
    // listener before anything else and especially before the Dropdown component gets unmounted.
    // And what happens without it is when we click on another widget, the Dropdown component
    // gets unmounted then the event listener listens for that click, and when it listens, it will
    // find the dropdownRef is undefined because the component already got unmounted.
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      // And { capture: true } again was added here to synchronize this remove event listener
      // with it's related add one. Without it, this listener won't be connected
      // to anything and will act as if it's not there.
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
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
        <label className="label">{label}</label>
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
