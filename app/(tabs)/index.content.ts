import { t, type Dictionary } from "intlayer";

const homeScreenContent = {
  key: "home-screen",
  content: {
    title: t({
      en: "Welcome!",
      fr: "Bienvenue !",
      es: "¡Bienvenido!",
    }),
    step1Title: t({
      en: "Step 1: Try it",
      fr: "Étape 1 : Essayez",
      es: "Paso 1: Pruébalo",
    }),
    step1Description: t({
      en: "Edit app/(tabs)/index.tsx to see changes. Press",
      fr: "Modifiez app/(tabs)/index.tsx pour voir les changements. Appuyez sur",
      es: "Edita app/(tabs)/index.tsx para ver los cambios. Presiona",
    }),
    step1Keys: t({
      en: "cmd + d",
      fr: "cmd + d",
      es: "cmd + d",
    }),
    step1KeysAndroid: t({
      en: "cmd + m",
      fr: "cmd + m",
      es: "cmd + m",
    }),
    step1KeysWeb: t({
      en: "F12",
      fr: "F12",
      es: "F12",
    }),
    step1Suffix: t({
      en: "to open developer tools.",
      fr: "pour ouvrir les outils de développement.",
      es: "para abrir las herramientas de desarrollador.",
    }),
    step2Title: t({
      en: "Step 2: Explore",
      fr: "Étape 2 : Explorez",
      es: "Paso 2: Explorar",
    }),
    step2Description: t({
      en: "Tap the Explore tab to learn more about what's included in this starter app.",
      fr: "Appuyez sur l'onglet Explorer pour en savoir plus sur ce qui est inclus dans cette application de démarrage.",
      es: "Toca la pestaña Explorar para obtener más información sobre lo que se incluye en esta aplicación de inicio.",
    }),
    step3Title: t({
      en: "Step 3: Get a fresh start",
      fr: "Étape 3 : Repartir à zéro",
      es: "Paso 3: Empezar de nuevo",
    }),
    step3Description: t({
      en: "When you're ready, run",
      fr: "Quand vous êtes prêt, exécutez",
      es: "Cuando estés listo, ejecuta",
    }),
    step3Middle: t({
      en: "to get a fresh",
      fr: "pour obtenir un nouveau répertoire",
      es: "para obtener un nuevo directorio",
    }),
    step3Suffix: t({
      en: "directory. This will move the current",
      fr: ". Cela déplacera le répertoire actuel",
      es: ". Esto moverá el directorio actual",
    }),
    step3End: t({
      en: "to",
      fr: "vers",
      es: "hacia",
    }),
  },
} satisfies Dictionary;

export default homeScreenContent;
