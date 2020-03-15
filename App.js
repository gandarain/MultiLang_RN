import React, { Component } from 'react'
import { Platform, StatusBar } from 'react-native'
import AppNavigator from './src/navigator/Navigator'
import { Root } from 'native-base'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Root>
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        <AppNavigator />
      </Root>
    )
  }
}