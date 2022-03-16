import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from '@screens/HomeScreen'
import { MenuDrawerNavigation, MenuDrawerNavigationEnum } from '@interfaces/screens'

const { HOME_SCREEN } = MenuDrawerNavigationEnum

const { Navigator, Screen } = createDrawerNavigator<MenuDrawerNavigation>()

const MenuDrawerNavigator = () => (
  <Navigator screenOptions={{
    headerShown: false
    }}
  >
    <Screen name={HOME_SCREEN} component={HomeScreen} />
  </Navigator>
)

export default MenuDrawerNavigator