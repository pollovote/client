import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { cloudStorage, retrieveLaunchParams } from '@telegram-apps/sdk-react';
import arLocale from '@/configs/locales/ar.json';
import deLocale from '@/configs/locales/de.json';
import esLocale from '@/configs/locales/es.json';
import frLocale from '@/configs/locales/fr.json';
import idLocale from '@/configs/locales/id.json';
import trLocale from '@/configs/locales/tr.json';
import enLocale from '@/configs/locales/en.json';
import ruLocale from '@/configs/locales/ru.json';
import faLocale from '@/configs/locales/fa.json';

export const initI18n = async () => {
  const lang = await cloudStorage.getItem('lang');
  if (lang === '') {
    await cloudStorage.setItem('lang', retrieveLaunchParams().initData?.user?.languageCode ?? 'en');
  }
  (i18n as any)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        ar: {
          translation: arLocale
        },
        de: {
          translation: deLocale
        },
        es: {
          translation: esLocale
        },
        fr: {
          translation: frLocale
        },
        id: {
          translation: idLocale
        },
        tr: {
          translation: trLocale
        },
        en: {
          translation: enLocale
        },
        ru: {
          translation: ruLocale
        },
        fa: {
          translation: faLocale
        }
      },
      lng: (() => {
        return lang === 'fa'
          ? 'fa'
          : lang === 'ar'
            ? 'ar'
            : lang === 'de'
              ? 'de'
              : lang === 'es'
                ? 'es'
                : lang === 'fr'
                  ? 'fr'
                  : lang === 'id'
                    ? 'id'
                    : lang === 'tr'
                      ? 'tr'
                      : ['ru', 'ua'].includes(lang ?? '')
                        ? 'ru'
                        : 'en';
      })(),
      fallbackLng: 'en',

      interpolation: {
        escapeValue: false
      }
    });
};
