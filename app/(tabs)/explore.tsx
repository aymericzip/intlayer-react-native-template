import { Image } from "expo-image";
import { Button, Platform, StyleSheet } from "react-native";

import { ExternalLink } from "@/components/external-link";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Collapsible } from "@/components/ui/collapsible";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Fonts } from "@/constants/theme";
import { useIntlayer, useLocale } from "react-intlayer";

export default function TabTwoScreen() {
  const {
    title,
    intro,
    routing,
    common,
    platforms,
    youCanOpen,
    images,
    themes,
    animations,
  } = useIntlayer("tab-two-screen");
  const { availableLocales, setLocale } = useLocale();

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
          <IconSymbol
            size={310}
            color="#808080"
            name="chevron.left.forwardslash.chevron.right"
            style={styles.headerImage}
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
          <ThemedText
            type="title"
            style={{
              fontFamily: Fonts.rounded,
            }}
          >
            {title}
          </ThemedText>
        </ThemedView>
        <ThemedText>{intro}</ThemedText>
        <Collapsible title={routing.title.value}>
          <ThemedText>
            {routing.part1}{" "}
            <ThemedText type="defaultSemiBold">
              {routing.screenIndex}
            </ThemedText>{" "}
            {routing.and}{" "}
            <ThemedText type="defaultSemiBold">
              {routing.screenExplore}
            </ThemedText>
          </ThemedText>
          <ThemedText>
            {routing.part2a}{" "}
            <ThemedText type="defaultSemiBold">{routing.layoutFile}</ThemedText>{" "}
            {routing.part2b}
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/router/introduction">
            <ThemedText type="link">{common.learnMore}</ThemedText>
          </ExternalLink>
        </Collapsible>
        <Collapsible title={platforms.title}>
          <ThemedText>
            {youCanOpen[0]}{" "}
            <ThemedText type="defaultSemiBold">{youCanOpen[1]}</ThemedText>
          </ThemedText>
        </Collapsible>
        <Collapsible title={images.title}>
          <ThemedText>
            {images.part1}{" "}
            <ThemedText type="defaultSemiBold">{images.at2x}</ThemedText>{" "}
            {images.and}{" "}
            <ThemedText type="defaultSemiBold">{images.at3x}</ThemedText>{" "}
            {images.part2}
          </ThemedText>
          <Image
            source={require("@/assets/images/react-logo.png")}
            style={{ width: 100, height: 100, alignSelf: "center" }}
          />
          <ExternalLink href="https://reactnative.dev/docs/images">
            <ThemedText type="link">{common.learnMore}</ThemedText>
          </ExternalLink>
        </Collapsible>
        <Collapsible title={themes.title}>
          <ThemedText>
            {themes.part1}{" "}
            <ThemedText type="defaultSemiBold">{themes.hook}</ThemedText>{" "}
            {themes.part2}
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
            <ThemedText type="link">{common.learnMore}</ThemedText>
          </ExternalLink>
        </Collapsible>
        <Collapsible title={animations.title}>
          <ThemedText>
            {animations.part1}{" "}
            <ThemedText type="defaultSemiBold">
              {animations.component}
            </ThemedText>{" "}
            {animations.part2}{" "}
            <ThemedText
              type="defaultSemiBold"
              style={{ fontFamily: Fonts.mono }}
            >
              {animations.library}
            </ThemedText>{" "}
            {animations.part3}
          </ThemedText>
          {Platform.select({
            ios: (
              <ThemedText>
                {animations.iosPart1}{" "}
                <ThemedText type="defaultSemiBold">
                  {animations.iosComponent}
                </ThemedText>{" "}
                {animations.iosPart2}
              </ThemedText>
            ),
          })}
        </Collapsible>
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
