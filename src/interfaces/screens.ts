import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

export type IOnboardNavigationStack = {
  onboardScreen: undefined,
  signInScreen: undefined,
  signUpScreen: undefined
  menuDrawerNavigator: undefined,
}

export enum OnboardNavigationScreens {
  ONBOARD_SCREEN = 'onboardScreen',
  SIGN_IN_SCREEN = 'signInScreen',
  SIGN_UP_SCREEN = 'signUpScreen',
  DRAWER_NAVIGATOR = 'menuDrawerNavigator'
}

export type MenuDrawerNavigation = {
  [MenuDrawerNavigationEnum.HOME_SCREEN]: undefined
}

export enum MenuDrawerNavigationEnum {
  HOME_SCREEN = 'homeScreen',
}

export type SlideProps = {
  text: string,
  image: string,
}

export interface OnboardScreenProps
  extends NativeStackScreenProps<IOnboardNavigationStack, OnboardNavigationScreens.ONBOARD_SCREEN> {
}

export interface SignInScreenProps
  extends NativeStackScreenProps<IOnboardNavigationStack, OnboardNavigationScreens.SIGN_IN_SCREEN> {
}

export interface SignUpScreenProps
  extends NativeStackScreenProps<IOnboardNavigationStack, OnboardNavigationScreens.SIGN_UP_SCREEN> {
}