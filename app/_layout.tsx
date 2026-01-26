import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useIntlayer } from "react-intlayer";
import { IntlayerProvider } from "react-native-intlayer";
import "react-native-reanimated";

import React from "react";
import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
	anchor: "(tabs)",
};

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const { modalTitle } = useIntlayer("root-layout");

	return (
		<IntlayerProvider>
			<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					<Stack.Screen
						name="modal"
						options={{ presentation: "modal", title: modalTitle.value }}
					/>
				</Stack>
				<StatusBar style="auto" />
			</ThemeProvider>
		</IntlayerProvider>
	);
}
