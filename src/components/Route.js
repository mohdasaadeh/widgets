import { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onWidgetClick = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onWidgetClick);
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
