import { useContext } from 'react';
import { ThemeContext } from '@/theme';

export const useTheme = () => {
  const { theme, onSetTheme, isDarkTheme } = useContext(ThemeContext);

  return { theme, onSetTheme, isDarkTheme };
};
