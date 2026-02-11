import { StyleSheet, ScrollView, Button } from "react-native";
import { useIntlayer } from "react-intlayer";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Stack } from "expo-router";
import { useState } from "react";

export default function DemoScreen() {
  const content = useIntlayer("demo-screen");
  const [count, setCount] = useState(0);
  const [condition, setCondition] = useState(true);
  const [gender, setGender] = useState<"male" | "female" | undefined>("male");

  return (
    <>
      <Stack.Screen options={{ title: "Demo" }} />
      <ScrollView>
        <ThemedView style={styles.container}>
          <ThemedText type="title">Intlayer Demo</ThemedText>

          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Translation</ThemedText>
            <ThemedText>{content.translation}</ThemedText>
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Enumeration</ThemedText>
            <ThemedText>Count: {count}</ThemedText>
            <ThemedText>{content.enumeration(count)}</ThemedText>
            <Button title="Increment" onPress={() => setCount((c) => c + 1)} />
            <Button title="Reset" onPress={() => setCount(0)} />
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Condition</ThemedText>
            <ThemedText>Condition: {condition.toString()}</ThemedText>
            <ThemedText>{content.condition(condition)}</ThemedText>
            <Button title="Toggle" onPress={() => setCondition((c) => !c)} />
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Insertion</ThemedText>
            <ThemedText>
              {content.insertion({ name: "User", age: 25 })}
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Nested Content</ThemedText>
            <ThemedText>Nested Title: {content.nested.title}</ThemedText>
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Markdown</ThemedText>
            <ThemedText>{content.markdown}</ThemedText>
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">HTML</ThemedText>
            <ThemedText>{content.htmlContent}</ThemedText>
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">File Content</ThemedText>
            <ThemedText>{content.fileContent}</ThemedText>
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Function Content</ThemedText>
            <ThemedText>{content.functionContent}</ThemedText>
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Async Function Content</ThemedText>
            <ThemedText>{content.asyncFunctionContent}</ThemedText>
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Gender</ThemedText>
            <ThemedText>Current Gender: {gender}</ThemedText>
            <ThemedText>{content.genderContent(gender as "male")}</ThemedText>
            <Button title="Set Male" onPress={() => setGender("male")} />
            <Button title="Set Female" onPress={() => setGender("female")} />
            <Button
              title="Set Undefined"
              onPress={() => setGender(undefined)}
            />
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  section: {
    gap: 8,
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
});
