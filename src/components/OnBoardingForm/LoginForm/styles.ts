import { theme } from "@themes/theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  input: {
    backgroundColor: theme.inputBackgroundColor,
    borderRadius: theme.inputRadius,
    paddingHorizontal: '5%',
    marginBottom: '5%',
  },
  button: {
    marginTop: '5%',
  }
})