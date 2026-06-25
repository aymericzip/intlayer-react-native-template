import { Image } from "expo-image";
import { SymbolView } from "expo-symbols";
import { Platform, Pressable, ScrollView, StyleSheet } from "react-native";
import { useIntlayer } from "react-native-intlayer";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ExternalLink } from "@/components/external-link";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Collapsible } from "@/components/ui/collapsible";
import { WebBadge } from "@/components/web-badge";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export default function TabTwoScreen() {
  const content = useIntlayer("explore-screen");
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
  };
  const theme = useTheme();

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
    web: {
      paddingTop: Spacing.six,
      paddingBottom: Spacing.four,
    },
  });

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentInset={insets}
      contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}
    >
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="subtitle">{content.title.value}</ThemedText>
          <ThemedText style={styles.centerText} themeColor="textSecondary">
            {content.intro.value}
          </ThemedText>

          <ExternalLink href="https://docs.expo.dev" asChild>
            <Pressable style={({ pressed }) => pressed && styles.pressed}>
              <ThemedView type="backgroundElement" style={styles.linkButton}>
                <ThemedText type="link">{content.expoDocs.value}</ThemedText>
                <SymbolView
                  tintColor={theme.text}
                  name={{
                    ios: "arrow.up.right.square",
                    android: "link",
                    web: "link",
                  }}
                  size={12}
                />
              </ThemedView>
            </Pressable>
          </ExternalLink>
        </ThemedView>

        <ThemedView style={styles.sectionsWrapper}>
          <Collapsible title={content.routingTitle.value}>
            <ThemedText type="small">
              {content.routingScreensBefore.value}{" "}
              <ThemedText type="code">src/app/index.tsx</ThemedText>{" "}
              {content.routingScreensAnd.value}{" "}
              <ThemedText type="code">src/app/explore.tsx</ThemedText>
            </ThemedText>
            <ThemedText type="small">
              {content.routingLayoutBefore.value}{" "}
              <ThemedText type="code">src/app/_layout.tsx</ThemedText>{" "}
              {content.routingLayoutAfter.value}
            </ThemedText>
            <ExternalLink href="https://docs.expo.dev/router/introduction">
              <ThemedText type="linkPrimary">
                {content.learnMore.value}
              </ThemedText>
            </ExternalLink>
          </Collapsible>

          <Collapsible title={content.platformTitle.value}>
            <ThemedView
              type="backgroundElement"
              style={styles.collapsibleContent}
            >
              <ThemedText type="small">
                {content.platformBefore.value}{" "}
                <ThemedText type="smallBold">w</ThemedText>{" "}
                {content.platformAfter.value}
              </ThemedText>
              <Image
                source={require("@/assets/images/tutorial-web.png")}
                style={styles.imageTutorial}
              />
            </ThemedView>
          </Collapsible>

          <Collapsible title={content.imagesTitle.value}>
            <ThemedText type="small">
              {content.imagesBefore.value}{" "}
              <ThemedText type="code">@2x</ThemedText> {content.imagesAnd.value}{" "}
              <ThemedText type="code">@3x</ThemedText>{" "}
              {content.imagesAfter.value}
            </ThemedText>
            <Image
              source={require("@/assets/images/react-logo.png")}
              style={styles.imageReact}
            />
            <ExternalLink href="https://reactnative.dev/docs/images">
              <ThemedText type="linkPrimary">
                {content.learnMore.value}
              </ThemedText>
            </ExternalLink>
          </Collapsible>

          <Collapsible title={content.themeTitle.value}>
            <ThemedText type="small">
              {content.themeBefore.value}{" "}
              <ThemedText type="code">useColorScheme()</ThemedText>{" "}
              {content.themeAfter.value}
            </ThemedText>
            <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
              <ThemedText type="linkPrimary">
                {content.learnMore.value}
              </ThemedText>
            </ExternalLink>
          </Collapsible>

          <Collapsible title={content.animationsTitle.value}>
            <ThemedText type="small">
              {content.animationsBefore.value}{" "}
              <ThemedText type="code">
                src/components/ui/collapsible.tsx
              </ThemedText>{" "}
              {content.animationsMiddle.value}{" "}
              <ThemedText type="code">react-native-reanimated</ThemedText>{" "}
              {content.animationsAfter.value}
            </ThemedText>
          </Collapsible>
        </ThemedView>
        {Platform.OS === "web" && <WebBadge />}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1,
  },
  titleContainer: {
    gap: Spacing.three,
    alignItems: "center",
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.six,
  },
  centerText: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
  linkButton: {
    flexDirection: "row",
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.five,
    justifyContent: "center",
    gap: Spacing.one,
    alignItems: "center",
  },
  sectionsWrapper: {
    gap: Spacing.five,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
  },
  collapsibleContent: {
    alignItems: "center",
  },
  imageTutorial: {
    width: "100%",
    aspectRatio: 296 / 171,
    borderRadius: Spacing.three,
    marginTop: Spacing.two,
  },
  imageReact: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
