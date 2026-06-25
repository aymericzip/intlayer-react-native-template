import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { getLocales } from 'expo-localization';
import { useColorScheme } from 'react-native';
import { IntlayerProvider } from 'react-native-intlayer';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';

const getDeviceLocale = () => getLocales()[0]?.languageTag;

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <IntlayerProvider defaultLocale={getDeviceLocale()}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AnimatedSplashOverlay />
        <AppTabs />
      </ThemeProvider>
    </IntlayerProvider>
  );
}
