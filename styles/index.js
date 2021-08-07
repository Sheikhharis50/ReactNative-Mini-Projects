import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 50,
    flex: 1,
  },
  flexContainer: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    flexDirection: "row",
  },
  flexBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
  label: {
    color: "#fff",
  },
  btnGroup: {
    marginBottom: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  btn: {
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignItems: "center",
    marginHorizontal: 2,
    marginVertical: 2,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  btnLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
});

export { styles };
