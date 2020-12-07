import { useEffect, useState } from 'react';
import { USER_THEME_PREFERENCE } from '../constants/localStorageKeys';
import useDarkMode from './useDarkMode';

const useDarkModeToggle = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const isDarkMode = useDarkMode();
  const [isEnabled, setIsEnabled] = useState(
    localStorage.getItem(USER_THEME_PREFERENCE)
      ? localStorage.getItem(USER_THEME_PREFERENCE) === 'dark'
        ? true
        : false
      : isDarkMode
  );

  useEffect(() => {
    localStorage.setItem(USER_THEME_PREFERENCE, isEnabled ? 'dark' : 'light');
  }, [isEnabled]);

  return [isEnabled, setIsEnabled];
};

export default useDarkModeToggle;
