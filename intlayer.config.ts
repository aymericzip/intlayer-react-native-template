import { Locales, type IntlayerConfig } from "intlayer";

export const locales = [Locales.ENGLISH, Locales.FRENCH, Locales.SPANISH];

const config: IntlayerConfig = {
  internationalization: {
    locales,
    defaultLocale: Locales.ENGLISH,
    strictMode: "strict",
  },
};

export default config;
