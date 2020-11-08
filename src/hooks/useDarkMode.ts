import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const handleModeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    };

    mq.addEventListener("change", handleModeChange);

    return () => mq.removeEventListener("change", handleModeChange);
  }, []);

  return isDarkMode;
};

export default useDarkMode;
