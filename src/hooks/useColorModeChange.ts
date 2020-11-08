import { useEffect, useState } from "react";
import useDarkMode from "./useDarkMode";

const useColorModeChange = () => {
  const isOSColorModeDark = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState(isOSColorModeDark);

  useEffect(() => {
    const darkModeToggle = document.querySelector("a");
    const bodyTag = document.querySelector("body");

    if (isOSColorModeDark) {
      bodyTag?.classList.add("dark-mode");
      setIsDarkMode(isOSColorModeDark);
    } else {
      bodyTag?.classList.remove("dark-mode");
      setIsDarkMode(isOSColorModeDark);
    }

    const handleClick = (event: MouseEvent) => {
      bodyTag?.classList.toggle("dark-mode");
      if (bodyTag?.classList.contains("dark-mode")) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    };

    darkModeToggle!.addEventListener("click", handleClick);

    return () => darkModeToggle!.removeEventListener("click", handleClick);
  }, [isOSColorModeDark]);

  return isDarkMode;
};

export default useColorModeChange;
