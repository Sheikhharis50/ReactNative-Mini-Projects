import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function App() {
  const [answer, setAnswer] = useState(0);
  const [operand, setOperand] = useState(undefined);

  const add = (num) => {
    return answer + num;
  };

  const sub = (num) => {
    return Math.max(answer - num, 0);
  };

  const mul = (num) => {
    return answer * num;
  };

  const handelAns = (num) => {
    if (answer && num && operand) setAnswer(operand(num));
    else setAnswer(num);
  };

  const handelOperand = (operand) => {
    if (answer) setOperand(operand);
    else setOp(undefined);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.answer}>{answer}</Text>
      {[...Array(5)].map((_, i) => (
        <View style={styles.btn} key={i}>
          <Button title={(i + 1).toString()} onPress={() => handelAns(i + 1)} />
        </View>
      ))}
      <View style={styles.btn}>
        <Button
          title="CLEAR"
          color="rgb(255, 0, 0)"
          onPress={() => handelAns(0)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  answer: {
    fontSize: 50,
    fontWeight: "bold",
  },
  btn: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    margin: 5,
  },
});
