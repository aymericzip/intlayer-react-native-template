import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.RUSSIAN,
      // ... Add any other locales you need
    ],
    defaultLocale: Locales.ENGLISH,
  },
  content: {
    contentDirName: ".", // Check content files in the whole application
  },
};

export default config;
