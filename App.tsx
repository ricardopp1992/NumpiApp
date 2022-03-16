import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'

import MenuDrawerNavigator from '@navigators/MenuDrawerNavigator'
import OnboardNavigatorStack from '@navigators/OnboardNavigatorStack';

const App = () => {
  return (
    <NavigationContainer>
      <OnboardNavigatorStack />
    </NavigationContainer>
  )
};

export default App;