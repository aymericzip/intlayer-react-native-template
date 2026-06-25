import type { LocalesValues } from "intlayer";
import { getLocaleName } from "intlayer";
import { Pressable, StyleSheet, View } from "react-native";
import { useLocale } from "react-native-intlayer";

import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { ThemedText } from "./themed-text";

export function LocaleSwitcher() {
  const { locale, setLocale, availableLocales } = useLocale();
  const theme = useTheme();

  return (
    <View style={styles.row}>
      {availableLocales.map((loc: LocalesValues) => {
        const active = loc === locale;
        return (
          <Pressable
            key={loc}
            onPress={() => setLocale(loc)}
            style={[
              styles.button,
              { borderColor: theme.text },
              active && { backgroundColor: theme.text },
            ]}
          >
            <ThemedText
              type="small"
              style={[styles.label, active && { color: theme.background }]}
            >
              {getLocaleName(loc)}
            </ThemedText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: Spacing.two,
  },
  button: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: Spacing.five,
    borderWidth: 1,
  },
  label: {
    fontSize: 13,
  },
});
