import { t, type Dictionary } from 'intlayer';

const homeScreenContent = {
  key: 'home-screen',
  content: {
    welcome: t({
      en: 'Welcome to Expo',
      fr: 'Bienvenue sur Expo',
      es: 'Bienvenido a Expo',
    }),
    getStarted: t({
      en: 'get started',
      fr: 'commencer',
      es: 'empezar',
    }),
    tryEditing: t({
      en: 'Try editing',
      fr: 'Essayez de modifier',
      es: 'Prueba a editar',
    }),
    devTools: t({
      en: 'Dev tools',
      fr: 'Outils de dev',
      es: 'Herramientas de dev',
    }),
    freshStart: t({
      en: 'Fresh start',
      fr: 'Nouveau départ',
      es: 'Empezar de nuevo',
    }),
  },
} satisfies Dictionary;

export default homeScreenContent;
