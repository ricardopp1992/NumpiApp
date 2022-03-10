import { NavigationContainerProps } from "@react-navigation/native";

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