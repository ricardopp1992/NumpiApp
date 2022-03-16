import { StyleSheet } from "react-native"

export const theme = {
  primaryTextColor: '#fff',
  onboardingTextColor: 'rgba(255, 219, 219, 1)',

  slideDotInactive: 'rgba(194, 134, 255, 0.7)',
  activeDotColor: '#7D2CCE',

  primaryColor: '#873BD3',

  inputBackgroundColor: '#fff',
  inputRadius: 15,
}


export const primaryButton = StyleSheet.create({
  button: {
    backgroundColor: theme.primaryColor,
    borderRadius: 20,
  },
  text: {
    color: theme.primaryTextColor,
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 5,
    width: '100%',
    paddingHorizontal: 25,
    fontWeight: '400',
  }
})

export const linkButton = StyleSheet.create({
  text: {
    color: theme.primaryTextColor,
    fontSize: 16,
    textAlign: 'center',
  },
})