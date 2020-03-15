import React, { Component } from 'react'
import {
  Text,
  ActivityIndicator,
  View
} from 'react-native'
import {
  Container,
} from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import { strings } from '../../asset/lang/Lang'

class SplashScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount() {
    let default_lang = 'en'
    let lang = await AsyncStorage.getItem('lang')
    if(lang){
      strings.setLanguage(lang)
    } else {
      strings.setLanguage(default_lang)
      await AsyncStorage.setItem('lang', default_lang)
    }
    setTimeout(() => {
      this.props.navigation.navigate('Home')
    }, 3500)
  }

  render() {
    return (
      <Container>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size='large' color='#0f991b' />
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#0f991b' }}>{strings.loading}</Text>
        </View>
      </Container>
    )
  }
}

export default SplashScreen