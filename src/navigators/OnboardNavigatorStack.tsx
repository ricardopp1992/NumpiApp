import { createStackNavigator } from '@react-navigation/stack'

import OnboardScreen from '@screens/OnboardScreen'
import SignInScreen from '@screens/SignInScreen'
import SignUpScreen from '@screens/SignUpScreen'
import { IOnboardNavigationStack, OnboardNavigationScreens } from '@interfaces/screens'
import MenuDrawerNavigator from '@navigators/MenuDrawerNavigator'

const {
  ONBOARD_SCREEN,
  SIGN_UP_SCREEN,
  SIGN_IN_SCREEN,
  DRAWER_NAVIGATOR,
} = OnboardNavigationScreens

const { Navigator, Screen } = createStackNavigator<IOnboardNavigationStack>()

const OnboardNavigatorStack = () => (
  <Navigator>
    <Screen name={ONBOARD_SCREEN} component={OnboardScreen} />
    <Screen name={SIGN_IN_SCREEN} component={SignInScreen} />
    <Screen name={SIGN_UP_SCREEN} component={SignUpScreen} />
    <Screen name={DRAWER_NAVIGATOR} component={MenuDrawerNavigator} />
  </Navigator>
)

export default OnboardNavigatorStack