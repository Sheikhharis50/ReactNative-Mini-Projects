import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/RadioButton";

const RadioButton = ({ label, type, handelType }) => {
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={handelType} style={styles.radioButton}>
        {type === label && <View style={styles.radioButtonIcon} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={handelType}>
        <Text style={styles.radioButtonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;
