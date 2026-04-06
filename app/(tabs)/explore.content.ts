import { t, type Dictionary } from "intlayer";

const exploreScreenContent = {
  key: "explore-screen",
  content: {
    title: t({
      en: "Explore",
      fr: "Explorer",
      es: "Explorar",
    }),
    intro: t({
      en: "This app includes example code to help you get started.",
      fr: "Cette application inclut du code d'exemple pour vous aider à démarrer.",
      es: "Esta aplicación incluye código de ejemplo para ayudarte a comenzar.",
    }),
    fileRoutingTitle: t({
      en: "File-based routing",
      fr: "Routage basé sur les fichiers",
      es: "Enrutamiento basado en archivos",
    }),
    fileRoutingDescription: t({
      en: "This app has two screens:",
      fr: "Cette application a deux écrans :",
      es: "Esta aplicación tiene dos pantallas:",
    }),
    fileRoutingLayout: t({
      en: "The layout file in",
      fr: "Le fichier de mise en page dans",
      es: "El archivo de diseño en",
    }),
    fileRoutingLayoutSuffix: t({
      en: "sets up the tab navigator.",
      fr: "configure le navigateur à onglets.",
      es: "configura el navegador de pestañas.",
    }),
    fileRoutingLearnMore: t({
      en: "Learn more",
      fr: "En savoir plus",
      es: "Aprender más",
    }),
    androidIosWebTitle: t({
      en: "Android, iOS, and web support",
      fr: "Support Android, iOS et web",
      es: "Soporte Android, iOS y web",
    }),
    androidIosWebDescription: t({
      en: "You can open this project on Android, iOS, and the web. To open the web version, press",
      fr: "Vous pouvez ouvrir ce projet sur Android, iOS et le web. Pour ouvrir la version web, appuyez sur",
      es: "Puedes abrir este proyecto en Android, iOS y la web. Para abrir la versión web, presiona",
    }),
    androidIosWebSuffix: t({
      en: "in the terminal running this project.",
      fr: "dans le terminal exécutant ce projet.",
      es: "en el terminal que ejecuta este proyecto.",
    }),
    imagesTitle: t({
      en: "Images",
      fr: "Images",
      es: "Imágenes",
    }),
    imagesDescription: t({
      en: "For static images, you can use the",
      fr: "Pour les images statiques, vous pouvez utiliser les suffixes",
      es: "Para imágenes estáticas, puedes usar los sufijos",
    }),
    imagesSuffix: t({
      en: "suffixes to provide files for different screen densities",
      fr: "pour fournir des fichiers pour différentes densités d'écran",
      es: "para proporcionar archivos para diferentes densidades de pantalla",
    }),
    imagesLearnMore: t({
      en: "Learn more",
      fr: "En savoir plus",
      es: "Aprender más",
    }),
    darkModeTitle: t({
      en: "Light and dark mode components",
      fr: "Composants mode clair et sombre",
      es: "Componentes de modo claro y oscuro",
    }),
    darkModeDescription: t({
      en: "This template has light and dark mode support. The",
      fr: "Ce modèle prend en charge les modes clair et sombre. Le hook",
      es: "Esta plantilla tiene soporte para modo claro y oscuro. El hook",
    }),
    darkModeMiddle: t({
      en: "hook lets you inspect what the user's current color scheme is, and so you can adjust UI colors accordingly.",
      fr: "vous permet d'inspecter le schéma de couleurs actuel de l'utilisateur et d'ajuster les couleurs de l'interface en conséquence.",
      es: "te permite inspeccionar el esquema de colores actual del usuario y ajustar los colores de la interfaz en consecuencia.",
    }),
    darkModeLearnMore: t({
      en: "Learn more",
      fr: "En savoir plus",
      es: "Aprender más",
    }),
    animationsTitle: t({
      en: "Animations",
      fr: "Animations",
      es: "Animaciones",
    }),
    animationsDescription: t({
      en: "This template includes an example of an animated component. The",
      fr: "Ce modèle inclut un exemple de composant animé. Le composant",
      es: "Esta plantilla incluye un ejemplo de componente animado. El componente",
    }),
    animationsMiddle: t({
      en: "component uses the powerful",
      fr: "utilise la puissante bibliothèque",
      es: "usa la poderosa biblioteca",
    }),
    animationsSuffix: t({
      en: "library to create a waving hand animation.",
      fr: "pour créer une animation de main qui salue.",
      es: "para crear una animación de mano saludando.",
    }),
    animationsParallax: t({
      en: "The",
      fr: "Le composant",
      es: "El componente",
    }),
    animationsParallaxSuffix: t({
      en: "component provides a parallax effect for the header image.",
      fr: "fournit un effet de parallaxe pour l'image d'en-tête.",
      es: "proporciona un efecto de paralaje para la imagen del encabezado.",
    }),
  },
} satisfies Dictionary;

export default exploreScreenContent;
