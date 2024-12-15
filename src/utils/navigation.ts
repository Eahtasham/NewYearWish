import { NavigateFunction } from 'react-router-dom';

export const handleNavigation = (
  navigate: NavigateFunction,
  path: string,
  callback?: () => void
) => {
  // Ensure any ongoing animations are completed
  setTimeout(() => {
    // Remove any double slashes in the path
    const cleanPath = path.replace(/\/+/g, '/');
    navigate(cleanPath);
    if (callback) {
      callback();
    }
  }, 100);
};