import React from "react";

const Link = ({ className, path, children }) => {
  const onLinkClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", path);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a className={className} href={path} onClick={onLinkClick}>
      {children}
    </a>
  );
};

export default Link;
