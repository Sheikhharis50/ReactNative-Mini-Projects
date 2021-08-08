import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { styles } from "./styles";
import RadioButton from "./components/RadioButton";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
  const [selectedType, setSelectedType] = useState("justifyContent");
  const types = {
    justifyContent: [
      { name: "Start", val: "flex-start" },
      { name: "End", val: "flex-end" },
      { name: "Center", val: "center" },
      { name: "Space Between", val: "space-between" },
      { name: "Space Around", val: "space-around" },
      { name: "Space Evenly", val: "space-evenly" },
    ],
    alignItems: [
      { name: "Start", val: "flex-start" },
      { name: "End", val: "flex-end" },
      { name: "Center", val: "center" },
      { name: "Stretch", val: "stretch" },
    ],
  };
  const [jTypeIndex, setJTypeIndex] = useState(0);
  const [aTypeIndex, setATypeIndex] = useState(0);
  const handelType = (type) => {
    setSelectedType(type);
  };
  const handelJTypeIndex = (index) => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        500,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.scaleX
      )
    );
    setJTypeIndex(index);
  };
  const handelATypeIndex = (index) => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        500,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.scaleY
      )
    );
    setATypeIndex(index);
  };

  return (
    <View style={styles.container}>
      <Text>{jTypeIndex._value}</Text>
      <View style={styles.btnGroup}>
        {types[selectedType].map((type, i) => (
          <TouchableOpacity
            style={[
              styles.btn,
              types[selectedType][
                selectedType === "justifyContent" ? jTypeIndex : aTypeIndex
              ].val === type.val
                ? styles.selected
                : {},
            ]}
            key={i}
            onPress={() =>
              selectedType === "justifyContent"
                ? handelJTypeIndex(i)
                : handelATypeIndex(i)
            }
          >
            <Text
              style={[
                styles.btnLabel,
                types[selectedType][
                  selectedType === "justifyContent" ? jTypeIndex : aTypeIndex
                ].val === type.val
                  ? { color: "oldlace" }
                  : {},
              ]}
            >
              {type.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={[
          styles.flexContainer,
          {
            justifyContent: types["justifyContent"][jTypeIndex].val,
            alignItems: types["alignItems"][aTypeIndex].val,
          },
        ]}
      >
        {["powderblue", "skyblue", "steelblue"].map((color, i) => (
          <View
            key={i}
            style={[
              styles.flexBox,
              { backgroundColor: color },
              types["alignItems"][aTypeIndex].val === "stretch"
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
            label={key === "justifyContent" ? "Horizontal" : "Vertical"}
            selected={selectedType === key}
            handelType={() => handelType(key)}
          />
        ))}
      </View>
    </View>
  );
}
