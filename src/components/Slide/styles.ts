import { StyleSheet } from 'react-native'

import { theme } from '@themes/theme'

export default StyleSheet.create({
  slideContainer: {
    width: '100%',
  },
  slideText: {
    marginTop: '10%',
    alignSelf: 'center',
    fontSize: 30,
    textAlign: 'center',
    color: theme.onboardingTextColor
  },
  slideImage: {
    marginTop: '5%',
    alignSelf: 'center',
    width: '80%',
    height: '70%'
  }
})