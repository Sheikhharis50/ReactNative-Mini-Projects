import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/RadioButton";

const RadioButton = ({ label, selected, handelType }) => {
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={handelType} style={styles.radioButton}>
        {selected && <View style={styles.radioButtonIcon} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={handelType}>
        <Text style={styles.radioButtonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;
