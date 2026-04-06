import '@/polyfills';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { getLocales } from 'expo-localization';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { IntlayerProvider } from 'react-native-intlayer';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

const getDeviceLocale = () => getLocales()[0]?.languageTag;

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <IntlayerProvider defaultLocale={getDeviceLocale()}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </IntlayerProvider>
  );
}
