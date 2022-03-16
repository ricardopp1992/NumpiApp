import { FC, ReactElement } from "react"
import { GestureResponderEvent, ImageStyle, StyleProp, ViewStyle } from "react-native"

export type OnboardSlideContentProps = {
  navigateToLoginPage: () => void
}

export type LogoProps = {
  imageStyle: StyleProp<ImageStyle>
}

export type LoginFormValues = {
  email: string
  password: string
}

export type SignUpFormValues = {
  firstName: string
  email: string
  password: string
}

export type PrimaryButtonProps = {
  onPress: (event: GestureResponderEvent) => void
  style?: StyleProp<ViewStyle>
}

export type LinkButtonProps = {
  onPress: (event: GestureResponderEvent) => void,
  style?: StyleProp<ViewStyle>
}

export type OnBoardingFormProps = {
  Form: ReactElement
  LinkButton: ReactElement
}

export type LoginFormProps = {
  goToHome: () => void
}

export type SignUpFormProps = {
  goToHome: () => void
}