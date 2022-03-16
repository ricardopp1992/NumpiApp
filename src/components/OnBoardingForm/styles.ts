import { theme } from "@themes/theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  text: {
    marginVertical: '5%',
    textAlign: 'center',
    color: theme.primaryTextColor,
    fontSize: 24,
  },
  logoImage: {
    marginTop: '8%',
    alignSelf: 'center',
    width: '50%',
    height: '20%'
  },
  formContainer: {
    marginTop: '5%',
    alignSelf: 'center',
    width: '90%',
  },
  linkButton: {
    marginTop: '5%',
    alignSelf: 'center',
    width: '80%'
  },
})