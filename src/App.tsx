import { useTheme } from '@/hooks/useTheme.tsx';
import { Tabs } from '@/components/Tabs';
import './App.module.scss';
import { useEffect } from 'react';
import i18next from 'i18next';

export const App = () => {
  const { theme, onSetTheme } = useTheme();
  const lang = i18next.language;

  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      switch (lang) {
        case 'ru':
          root.classList.remove('lang-en');
          root.classList.add('lang-ru');
          break;
        case 'en':
          root.classList.remove('lang-ru');
          root.classList.add('lang-en');
          break;
        default:
          root.classList.remove('lang-ru');
          root.classList.add('lang-en');
      }
    }
  }, [lang]);

  return (
    <>
      <div>{theme}</div>
      <div onClick={() => onSetTheme('dark')}>dark</div>
      <div onClick={() => onSetTheme('light')}>light</div>
      <Tabs />
    </>
  );
};
