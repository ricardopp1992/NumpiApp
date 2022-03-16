import React, { FC } from 'react'

import OnBoardingForm from '@components/OnBoardingForm'
import LinkButton from '@components/shared/LinkButton'
import SignUpForm from '@components/OnBoardingForm/SignUpForm'
import { OnboardNavigationScreens, SignUpScreenProps } from '@interfaces/screens'

const SignUpScreen: FC<SignUpScreenProps> = ({ navigation }) => {

  const navigateToHome = () => {
    navigation.navigate(OnboardNavigationScreens.DRAWER_NAVIGATOR)
  }

  const navigateToSignIn = () => {
    navigation.navigate(OnboardNavigationScreens.SIGN_IN_SCREEN)
  }

  return (
    <OnBoardingForm
      Form={<SignUpForm goToHome={navigateToHome} />}
      LinkButton={
        <LinkButton onPress={navigateToSignIn}>I already have an account, Login</LinkButton>
      }
    />
  )
}

export default SignUpScreen