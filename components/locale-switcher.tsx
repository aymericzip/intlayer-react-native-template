import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getLocaleName } from 'intlayer';
import { useLocale } from 'react-intlayer';

export function LocaleSwitcher() {
  const { setLocale, availableLocales, locale } = useLocale();

  return (
    <View style={styles.container}>
      {availableLocales.map((loc) => (
        <TouchableOpacity
          key={loc}
          style={[styles.button, loc === locale && styles.activeButton]}
          onPress={() => setLocale(loc)}>
          <Text style={[styles.text, loc === locale && styles.activeText]}>
            {getLocaleName(loc)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#ddd',
  },
  activeButton: {
    backgroundColor: '#0a7ea4',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  activeText: {
    color: '#fff',
  },
});
