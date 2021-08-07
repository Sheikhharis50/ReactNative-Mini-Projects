import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import RadioButton from "./components/RadioButton";

export default function App() {
  const [selectedType, setSelectedType] = useState("justifyContent");
  const types = {
    justifyContent: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
    alignItems: ["flex-start", "flex-end", "center", "baseline", "stretch"],
  };
  const [jTypeIndex, setJTypeIndex] = useState(0);
  const [aTypeIndex, setATypeIndex] = useState(0);
  const handelType = (type) => {
    setSelectedType(type);
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnGroup}>
        {types[selectedType].map((type, i) => (
          <TouchableOpacity
            style={[
              styles.btn,
              types[selectedType][
                selectedType === "justifyContent" ? jTypeIndex : aTypeIndex
              ] === type
                ? styles.selected
                : {},
            ]}
            key={i}
            onPress={() =>
              selectedType === "justifyContent"
                ? setJTypeIndex(i)
                : setATypeIndex(i)
            }
          >
            <Text
              style={[
                styles.btnLabel,
                types[selectedType][
                  selectedType === "justifyContent" ? jTypeIndex : aTypeIndex
                ] === type
                  ? { color: "oldlace" }
                  : {},
              ]}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={[
          styles.flexContainer,
          {
            justifyContent: types["justifyContent"][jTypeIndex],
            alignItems: types["alignItems"][aTypeIndex],
          },
        ]}
      >
        {["powderblue", "skyblue", "steelblue"].map((color, i) => (
          <View
            key={i}
            style={[
              styles.flexBox,
              { backgroundColor: color },
              types["alignItems"][aTypeIndex] === "stretch"
                ? {}
                : { height: 100 },
            ]}
          >
            <Text style={styles.label}>{(i + 1).toString()}</Text>
          </View>
        ))}
      </View>
      <View style={[styles.btnGroup, { justifyContent: "space-around" }]}>
        {Object.keys(types).map((key, i) => (
          <RadioButton
            key={i}
            label={key}
            type={selectedType}
            handelType={() => handelType(key)}
          />
        ))}
      </View>
    </View>
  );
}
