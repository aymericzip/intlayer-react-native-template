import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useIntlayer, HTMLProvider, MarkdownProvider } from "react-intlayer";
import { IntlayerProvider } from "react-native-intlayer";
import "react-native-reanimated";

import React from "react";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { View } from "react-native";
import { ThemedText } from "@/components/themed-text";

export const unstable_settings = {
	anchor: "(tabs)",
};

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const { modalTitle } = useIntlayer("root-layout");

	return (
		<IntlayerProvider>
			<HTMLProvider
				components={{
					h1: (props: any) => (
						<ThemedText
							type="title"
							style={{ marginVertical: 10 }}
							{...props}
						/>
					),
					p: (props: any) => <ThemedText type="default" {...props} />,
					b: (props: any) => <ThemedText type="defaultSemiBold" {...props} />,
					strong: (props: any) => (
						<ThemedText type="defaultSemiBold" {...props} />
					),
					div: (props: any) => <View {...props} />,
					span: (props: any) => <ThemedText {...props} />,
				}}
			>
				<MarkdownProvider
					components={{
						h1: (props: any) => (
							<ThemedText
								type="title"
								style={{ marginVertical: 10 }}
								{...props}
							/>
						),
						p: (props: any) => <ThemedText type="default" {...props} />,
						b: (props: any) => <ThemedText type="defaultSemiBold" {...props} />,
						strong: (props: any) => (
							<ThemedText type="defaultSemiBold" {...props} />
						),
						div: (props: any) => <View {...props} />,
						span: (props: any) => <ThemedText {...props} />,
					}}
				>
					<ThemeProvider
						value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
					>
						<Stack>
							<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
							<Stack.Screen
								name="modal"
								options={{ presentation: "modal", title: modalTitle.value }}
							/>
						</Stack>
						<StatusBar style="auto" />
					</ThemeProvider>
				</MarkdownProvider>
			</HTMLProvider>
		</IntlayerProvider>
	);
}
