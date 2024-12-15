import { NavigateFunction } from 'react-router-dom';

export const handleNavigation = (
  navigate: NavigateFunction,
  path: string,
  callback?: () => void
) => {
  // Ensure any ongoing animations are completed
  setTimeout(() => {
    navigate(path);
    if (callback) {
      callback();
    }
  }, 100);
};