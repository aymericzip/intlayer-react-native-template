import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { IntlayerProviderContent, useIntlayer } from "react-intlayer";
import { intlayerPolyfill } from "react-native-intlayer";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";

export const unstable_settings = {
  anchor: "(tabs)",
};

intlayerPolyfill();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <IntlayerProviderContent>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <ModalLayout />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </IntlayerProviderContent>
  );
}

export function ModalLayout() {
  const { modalTitle } = useIntlayer("root-layout");
  return (
    <Stack.Screen
      name="modal"
      options={{ presentation: "modal", title: modalTitle }}
    />
  );
}
