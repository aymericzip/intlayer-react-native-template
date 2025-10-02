/* eslint-disable */
import { Locales } from 'intlayer';
import _uWh7hyOuzg42Y2meOsvk from './home-screen.ts';
import _Griqhy1OOiUmcckM7jz3 from './root-layout.ts';
import _ZCrWKA3YDb1UFl3pWnfw from './tab-two-screen.ts';
import _Xft7xk30lBfG6UYiHUlL from './tabs-layout.ts';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {
    "home-screen": typeof _uWh7hyOuzg42Y2meOsvk;
    "root-layout": typeof _Griqhy1OOiUmcckM7jz3;
    "tab-two-screen": typeof _ZCrWKA3YDb1UFl3pWnfw;
    "tabs-layout": typeof _Xft7xk30lBfG6UYiHUlL;
  }

  type DeclaredLocales = Locales.ENGLISH | Locales.FRENCH | Locales.SPANISH;
  type RequiredLocales = Locales.ENGLISH | Locales.FRENCH | Locales.SPANISH;
  type ExtractedLocales = Extract<Locales, RequiredLocales>;
  type ExcludedLocales = Exclude<Locales, RequiredLocales>;
  interface IConfigLocales<Content> extends Record<DeclaredLocales, Content> {}
}