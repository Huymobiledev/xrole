

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useRouter } from 'next/router';

import translationEN from '../public/locales/en/common.json';
import translationVI from '../public/locales/vi/common.json';

const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
};
const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  router.locale = lng; // Cập nhật router.locale
};
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
