import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Enter Anything" style={styles.input} />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  input: {
    padding: 5,
    marginVertical: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
  },
});
