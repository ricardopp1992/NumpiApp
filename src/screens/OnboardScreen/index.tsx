import React, { FC } from 'react'
import { View } from 'react-native'

import OnboardSlideContent from '@components/OnboardSlideContent'
import { OnboardNavigationScreens, OnboardScreenProps } from '@interfaces/screens'

const OnboardScreen: FC<OnboardScreenProps> = ({ navigation }) => {

  const navigateToLoginPage = () => {
    navigation.navigate(OnboardNavigationScreens.SIGN_IN_SCREEN)
  }

  return (
    <View>
      <OnboardSlideContent navigateToLoginPage={navigateToLoginPage} />
    </View>
  )
}

export default OnboardScreen