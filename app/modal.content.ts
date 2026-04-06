import { t, type Dictionary } from "intlayer";

const modalContent = {
  key: "modal-screen",
  content: {
    title: t({
      en: "This is a modal",
      fr: "Ceci est une modale",
      es: "Esto es un modal",
    }),
    goHome: t({
      en: "Go to home screen",
      fr: "Aller à l'écran d'accueil",
      es: "Ir a la pantalla de inicio",
    }),
  },
} satisfies Dictionary;

export default modalContent;
