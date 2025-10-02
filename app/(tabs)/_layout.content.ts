import { t, type Dictionary } from "intlayer";

const tabsLayoutContent = {
  key: "tabs-layout",
  content: {
    homeTabTitle: t({ en: "Home", fr: "Accueil", es: "Inicio" }),
    exploreTabTitle: t({ en: "Explore", fr: "Explorer", es: "Explorar" }),
  },
} satisfies Dictionary;

export default tabsLayoutContent;
