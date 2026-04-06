import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { useIntlayer } from 'react-intlayer';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  const {
    title,
    intro,
    fileRoutingTitle,
    fileRoutingDescription,
    fileRoutingLayout,
    fileRoutingLayoutSuffix,
    fileRoutingLearnMore,
    androidIosWebTitle,
    androidIosWebDescription,
    androidIosWebSuffix,
    imagesTitle,
    imagesDescription,
    imagesSuffix,
    imagesLearnMore,
    darkModeTitle,
    darkModeDescription,
    darkModeMiddle,
    darkModeLearnMore,
    animationsTitle,
    animationsDescription,
    animationsMiddle,
    animationsSuffix,
    animationsParallax,
    animationsParallaxSuffix,
  } = useIntlayer('explore-screen');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          {title}
        </ThemedText>
      </ThemedView>
      <ThemedText>{intro}</ThemedText>
      <Collapsible title={fileRoutingTitle.value}>
        <ThemedText>
          {fileRoutingDescription}{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          {fileRoutingLayout}{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          {fileRoutingLayoutSuffix}
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">{fileRoutingLearnMore}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={androidIosWebTitle.value}>
        <ThemedText>
          {androidIosWebDescription}{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText>{' '}
          {androidIosWebSuffix}
        </ThemedText>
      </Collapsible>
      <Collapsible title={imagesTitle.value}>
        <ThemedText>
          {imagesDescription}{' '}
          <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText>{' '}
          {imagesSuffix}
        </ThemedText>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">{imagesLearnMore}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={darkModeTitle.value}>
        <ThemedText>
          {darkModeDescription}{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText>{' '}
          {darkModeMiddle}
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">{darkModeLearnMore}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={animationsTitle.value}>
        <ThemedText>
          {animationsDescription}{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText>{' '}
          {animationsMiddle}{' '}
          <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
            react-native-reanimated
          </ThemedText>{' '}
          {animationsSuffix}
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              {animationsParallax}{' '}
              <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              {animationsParallaxSuffix}
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
