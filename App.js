import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
