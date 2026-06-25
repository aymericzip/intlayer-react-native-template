import { t, type Dictionary } from 'intlayer';

const exploreScreenContent = {
  key: 'explore-screen',
  content: {
    title: t({
      en: 'Explore',
      fr: 'Explorer',
      es: 'Explorar',
    }),
    intro: t({
      en: 'This starter app includes example\ncode to help you get started.',
      fr: 'Cette application de démarrage inclut un exemple\nde code pour vous aider à démarrer.',
      es: 'Esta app de inicio incluye código\nde ejemplo para ayudarte a empezar.',
    }),
    expoDocs: t({
      en: 'Expo documentation',
      fr: 'Documentation Expo',
      es: 'Documentación de Expo',
    }),
    learnMore: t({
      en: 'Learn more',
      fr: 'En savoir plus',
      es: 'Más información',
    }),

    // Section: File-based routing
    routingTitle: t({
      en: 'File-based routing',
      fr: 'Routage basé sur les fichiers',
      es: 'Enrutamiento basado en archivos',
    }),
    routingScreensBefore: t({
      en: 'This app has two screens:',
      fr: 'Cette application a deux écrans :',
      es: 'Esta app tiene dos pantallas:',
    }),
    routingScreensAnd: t({
      en: 'and',
      fr: 'et',
      es: 'y',
    }),
    routingLayoutBefore: t({
      en: 'The layout file in',
      fr: 'Le fichier de layout dans',
      es: 'El archivo de layout en',
    }),
    routingLayoutAfter: t({
      en: 'sets up the tab navigator.',
      fr: 'configure le navigateur à onglets.',
      es: 'configura el navegador de pestañas.',
    }),

    // Section: Android, iOS, and web support
    platformTitle: t({
      en: 'Android, iOS, and web support',
      fr: "Prise en charge d'Android, iOS et web",
      es: 'Compatibilidad con Android, iOS y web',
    }),
    platformBefore: t({
      en: 'You can open this project on Android, iOS, and the web. To open the web version, press',
      fr: "Vous pouvez ouvrir ce projet sur Android, iOS et le web. Pour ouvrir la version web, appuyez sur",
      es: 'Puedes abrir este proyecto en Android, iOS y la web. Para abrir la versión web, pulsa',
    }),
    platformAfter: t({
      en: 'in the terminal running this project.',
      fr: 'dans le terminal qui exécute ce projet.',
      es: 'en el terminal que ejecuta este proyecto.',
    }),

    // Section: Images
    imagesTitle: t({
      en: 'Images',
      fr: 'Images',
      es: 'Imágenes',
    }),
    imagesBefore: t({
      en: 'For static images, you can use the',
      fr: 'Pour les images statiques, vous pouvez utiliser les suffixes',
      es: 'Para imágenes estáticas, puedes usar los sufijos',
    }),
    imagesAnd: t({
      en: 'and',
      fr: 'et',
      es: 'y',
    }),
    imagesAfter: t({
      en: 'suffixes to provide files for different screen densities.',
      fr: 'pour fournir des fichiers pour différentes densités d’écran.',
      es: 'para proporcionar archivos para diferentes densidades de pantalla.',
    }),

    // Section: Light and dark mode components
    themeTitle: t({
      en: 'Light and dark mode components',
      fr: 'Composants en mode clair et sombre',
      es: 'Componentes en modo claro y oscuro',
    }),
    themeBefore: t({
      en: 'This template has light and dark mode support. The',
      fr: 'Ce modèle prend en charge les modes clair et sombre. Le hook',
      es: 'Esta plantilla admite modo claro y oscuro. El hook',
    }),
    themeAfter: t({
      en: "hook lets you inspect what the user's current color scheme is, and so you can adjust UI colors accordingly.",
      fr: "vous permet d’inspecter le schéma de couleurs actuel de l’utilisateur, afin d’ajuster les couleurs de l’interface en conséquence.",
      es: 'te permite inspeccionar el esquema de color actual del usuario, para ajustar los colores de la interfaz en consecuencia.',
    }),

    // Section: Animations
    animationsTitle: t({
      en: 'Animations',
      fr: 'Animations',
      es: 'Animaciones',
    }),
    animationsBefore: t({
      en: 'This template includes an example of an animated component. The',
      fr: "Ce modèle inclut un exemple de composant animé. Le composant",
      es: 'Esta plantilla incluye un ejemplo de componente animado. El componente',
    }),
    animationsMiddle: t({
      en: 'component uses the powerful',
      fr: 'utilise la puissante bibliothèque',
      es: 'usa la potente biblioteca',
    }),
    animationsAfter: t({
      en: 'library to animate opening this hint.',
      fr: 'pour animer l’ouverture de cette astuce.',
      es: 'para animar la apertura de esta sugerencia.',
    }),
  },
} satisfies Dictionary;

export default exploreScreenContent;
