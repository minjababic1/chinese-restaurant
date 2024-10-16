import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    header: require('@/locales/en/header.json'),
    footer: require('@/locales/en/footer.json'),
    about: require('@/locales/en/about.json'),
    home: require('@/locales/en/home.json'),
    gallery: require('@/locales/en/gallery.json')

  },
  sr: {
    header: require('@/locales/sr/header.json'),
    footer: require('@/locales/sr/footer.json'),
    about: require('@/locales/sr/about.json'),
    home: require('@/locales/sr/home.json'),
    gallery: require('@/locales/sr/gallery.json')

  }
};

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
