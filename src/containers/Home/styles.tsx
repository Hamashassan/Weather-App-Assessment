import { StyleSheet, ViewStyle } from "react-native";

interface Styles {
  container: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: { width: "100%", height: "100%" },
});
