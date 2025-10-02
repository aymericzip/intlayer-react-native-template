import { t, type Dictionary } from "intlayer";

const rootLayoutContent = {
  key: "root-layout",
  content: {
    modalTitle: t({ en: "Modal", fr: "Modale", es: "Modal" }),
  },
} satisfies Dictionary;

export default rootLayoutContent;
