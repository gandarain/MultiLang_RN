import React from 'react'
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { Icon } from 'native-base'

// ***** Import Screen ***** //
import SplashScreen from '../screen/splash/Splash' 
import HomeScreen from '../screen/home/Home'
import ProfileScreen from '../screen/profile/Profile'
// ***** /Import Screen ***** //
  
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false
    }
  }
})

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerShown: false
    }
  }
})

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = 'home'
        } else if (routeName === 'Profile') {
          iconName = 'account'
        }
        return (
          <Icon name={iconName} type="MaterialCommunityIcons" style={{color: tintColor, fontSize: 25}} />
        )
      },
    }),
    tabBarOptions: {
      activeTintColor: '#0f991b',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#424242',
      }
    },
  }
)

const AppNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  TabNavigator: TabNavigator,
})

export default createAppContainer(AppNavigator)