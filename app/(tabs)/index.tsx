import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { useIntlayer } from 'react-intlayer';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { LocaleSwitcher } from '@/components/locale-switcher';

export default function HomeScreen() {
  const {
    title,
    step1Title,
    step1Description,
    step1Keys,
    step1KeysAndroid,
    step1KeysWeb,
    step1Suffix,
    step2Title,
    step2Description,
    step3Title,
    step3Description,
    step3Middle,
    step3Suffix,
    step3End,
  } = useIntlayer('home-screen');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{title}</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{step1Title}</ThemedText>
        <ThemedText>
          {step1Description}{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>.{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: step1Keys.value,
              android: step1KeysAndroid.value,
              web: step1KeysWeb.value,
            })}
          </ThemedText>{' '}
          {step1Suffix}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">{step2Title}</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>
        <ThemedText>{step2Description}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{step3Title}</ThemedText>
        <ThemedText>
          {step3Description}{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{' '}
          {step3Middle}{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText>{' '}
          {step3Suffix}{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText>{' '}
          {step3End}{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
      <LocaleSwitcher />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    position: 'absolute',
  },
});
