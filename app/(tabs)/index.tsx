import { Image } from "expo-image";
import { Button, Platform, StyleSheet } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import { useIntlayer, useLocale } from "react-intlayer";

export default function HomeScreen() {
  const { availableLocales, setLocale } = useLocale();
  const { title, step1, step2, linkMenu, alerts, step3 } =
    useIntlayer("home-screen");

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={styles.reactLogo}
          />
        }
      >
        <ThemedText>
          {availableLocales.map((locale) => (
            <Button
              key={locale}
              onPress={() => setLocale(locale)}
              title={locale.toUpperCase()}
            />
          ))}
        </ThemedText>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">{title}</ThemedText>
          <HelloWave />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">{step1.title}</ThemedText>
          <ThemedText>
            {step1.editPrefix}{" "}
            <ThemedText type="defaultSemiBold">{step1.file}</ThemedText>{" "}
            {step1.toSeeChanges}{" "}
            <ThemedText type="defaultSemiBold">
              {Platform.select({
                ios: "cmd + d",
                android: "cmd + m",
                web: "F12",
              })}
            </ThemedText>{" "}
            {step1.openDevToolsSuffix}
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <Link href="/modal">
            <Link.Trigger>
              <ThemedText type="subtitle">{step2.title}</ThemedText>
            </Link.Trigger>
            <Link.Preview />
            <Link.Menu>
              <Link.MenuAction
                title={linkMenu.action.value}
                icon="cube"
                onPress={() => alert(alerts.actionPressed)}
              />
              <Link.MenuAction
                title={linkMenu.share.value}
                icon="square.and.arrow.up"
                onPress={() => alert(alerts.sharePressed)}
              />
              <Link.Menu title={linkMenu.more.value} icon="ellipsis">
                <Link.MenuAction
                  title={linkMenu.delete.value}
                  icon="trash"
                  destructive
                  onPress={() => alert(alerts.deletePressed)}
                />
              </Link.Menu>
            </Link.Menu>
          </Link>

          <ThemedText>{step2.description}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">{step3.title}</ThemedText>
          <ThemedText>
            {step3.prefix}{" "}
            <ThemedText type="defaultSemiBold">{step3.command}</ThemedText>{" "}
            {step3.middle1}{" "}
            <ThemedText type="defaultSemiBold">{step3.app}</ThemedText>{" "}
            {step3.middle2}{" "}
            <ThemedText type="defaultSemiBold">{step3.app}</ThemedText>{" "}
            {step3.to}{" "}
            <ThemedText type="defaultSemiBold">{step3.appExample}</ThemedText>.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <Link href="/demo">
            <ThemedText type="subtitle">Go to Demo</ThemedText>
          </Link>
        </ThemedView>
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
