import React, { FC } from 'react'

import { OnboardNavigationScreens, SignInScreenProps } from '@interfaces/screens'
import OnBoardingForm from '@components/OnBoardingForm'
import LoginForm from '@components/OnBoardingForm/LoginForm'
import LinkButton from '@components/shared/LinkButton'

const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
  const navigateToHome = () => {
    navigation.navigate(OnboardNavigationScreens.DRAWER_NAVIGATOR)
  }
  
  const navigateToSignUpScreen = () => {
    navigation.navigate(OnboardNavigationScreens.SIGN_UP_SCREEN)
  }

  return (
    <OnBoardingForm
      Form={
        <LoginForm goToHome={navigateToHome} />
      }
      LinkButton={
        <LinkButton onPress={navigateToSignUpScreen}>I do not have an account yet, Sign Up</LinkButton>
      }
    />
  )
}

export default SignInScreen