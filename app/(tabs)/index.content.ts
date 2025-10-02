import { t, type Dictionary } from "intlayer";

const homeScreenContent = {
  key: "home-screen",
  content: {
    title: t({
      en: "Welcome!",
      fr: "Bienvenue !",
      es: "¡Bienvenido!",
    }),
    step1: {
      title: t({
        en: "Step 1: Try it",
        fr: "Étape 1 : Essayez",
        es: "Paso 1: Pruébalo",
      }),
      editPrefix: t({
        en: "Edit",
        fr: "Modifier",
        es: "Editar",
      }),
      file: "app/(tabs)/index.tsx",
      toSeeChanges: t({
        en: "to see changes. Press",
        fr: "pour voir les changements. Appuyez sur",
        es: "para ver los cambios. Presiona",
      }),
      openDevToolsSuffix: t({
        en: "to open developer tools.",
        fr: "pour ouvrir les outils de développement.",
        es: "para abrir las herramientas de desarrollador.",
      }),
    },
    step2: {
      title: t({
        en: "Step 2: Explore",
        fr: "Étape 2 : Explorer",
        es: "Paso 2: Explorar",
      }),
      description: t({
        en: "Tap the Explore tab to learn more about what's included in this starter app.",
        fr: "Touchez l'onglet Explorer pour en savoir plus sur ce que contient cette application de démarrage.",
        es: "Toca la pestaña Explorar para saber más sobre lo que incluye esta aplicación inicial.",
      }),
    },
    linkMenu: {
      action: t({ en: "Action", fr: "Action", es: "Acción" }),
      share: t({ en: "Share", fr: "Partager", es: "Compartir" }),
      more: t({ en: "More", fr: "Plus", es: "Más" }),
      delete: t({ en: "Delete", fr: "Supprimer", es: "Eliminar" }),
    },
    alerts: {
      actionPressed: t({
        en: "Action pressed",
        fr: "Action appuyée",
        es: "Acción presionada",
      }),
      sharePressed: t({
        en: "Share pressed",
        fr: "Partage appuyé",
        es: "Compartir presionado",
      }),
      deletePressed: t({
        en: "Delete pressed",
        fr: "Suppression appuyée",
        es: "Eliminar presionado",
      }),
    },
    step3: {
      title: t({
        en: "Step 3: Get a fresh start",
        fr: "Étape 3 : Repartir de zéro",
        es: "Paso 3: Empezar de nuevo",
      }),
      prefix: t({
        en: "When you're ready, run",
        fr: "Quand vous êtes prêt, exécutez",
        es: "Cuando estés listo, ejecuta",
      }),
      command: t({
        en: "npm run reset-project",
        fr: "npm run reset-project",
        es: "npm run reset-project",
      }),
      middle1: t({
        en: "to get a fresh",
        fr: "pour obtenir un",
        es: "para obtener una",
      }),
      app: "app",
      middle2: t({
        en: "directory. This will move the current",
        fr: "répertoire. Cela déplacera l'actuel",
        es: "carpeta. Esto moverá la",
      }),
      to: t({ en: "to", fr: "vers", es: "a" }),
      appExample: "app-example",
    },
  },
} satisfies Dictionary;

export default homeScreenContent;
