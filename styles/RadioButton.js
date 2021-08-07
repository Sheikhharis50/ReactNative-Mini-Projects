import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: "powderblue",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: "steelblue",
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
  },
});

export { styles };
