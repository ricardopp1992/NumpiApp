import { theme } from "@themes/theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  onboardContainer: {
    height: '100%',
    backgroundColor: 'red'
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '8%',
    marginBottom: '2%',
  },
  activeDot: {
    backgroundColor: theme.activeDotColor
  },
  dot: {
    borderRadius: 50,
    backgroundColor: theme.slideDotInactive,
    marginHorizontal: '5%',
    width: 15,
    height: 15,
  },
})