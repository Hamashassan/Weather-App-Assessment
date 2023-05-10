import { StyleSheet, ViewStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  name: ViewStyle;
  temperature: ViewStyle;
  highLow: ViewStyle;
  loader: ViewStyle;
  noInternetContainer: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: { flex: 1 },
  contentContainer: { alignItems: "center", justifyContent: "center", flex: 1 },
  name: { fontSize: 30, fontWeight: "500" },
  temperature: { fontSize: 50, fontWeight: "bold" },
  highLow: { fontSize: 20, fontWeight: "500" },
  loader: {
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
  },
  noInternetContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
