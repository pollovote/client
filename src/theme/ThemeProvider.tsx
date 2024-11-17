import { useLaunchParams, cloudStorage } from '@telegram-apps/sdk-react';
import React, { createContext, useEffect, useLayoutEffect, useState } from 'react';

type ThemeContextProps = {
  children: React.ReactNode;
};

type ThemeDefaultContextType = {
  theme: string | undefined;
  onSetTheme: (mode: string) => void;
  isDarkTheme: boolean;
};

const defaultContext: ThemeDefaultContextType = {
  theme: undefined,
  onSetTheme: () => {},
  isDarkTheme: false
};

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext(defaultContext);

export function ThemeProvider({ children }: ThemeContextProps) {
  const lp = useLaunchParams();
  const tgTheme = lp.themeParams.textColor === '#ffffff' ? 'tg-dark' : 'tg-light';

  const [theme, setTheme] = useState<string>();
  const isDarkTheme = theme === 'dark' || theme === 'tg-dark';

  const handleSetTheme = (mode: string) => {
    cloudStorage.setItem('theme', mode);
    setTheme(mode);
  };

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  useEffect(() => {
    const handleSetAppTheme = async () => {
      const savedTheme = await cloudStorage.getItem('theme');
      if (savedTheme) {
        handleSetTheme(savedTheme);
      } else {
        setTheme(tgTheme);
      }
    };
    handleSetAppTheme();
  }, [tgTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, theme, onSetTheme: handleSetTheme }}>{children}</ThemeContext.Provider>
  );
}
