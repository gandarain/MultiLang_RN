import React, { Component } from 'react'
import {
  Text,
  View,
  Picker
} from 'react-native'
import {
  Container,
} from 'native-base'
import { strings } from '../../asset/lang/Lang'
import AsyncStorage from '@react-native-community/async-storage'
import RNRestart from 'react-native-restart'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: ''
    }
  }

  async componentDidMount(){
    let lang = await AsyncStorage.getItem('lang')
    this.setState({
      lang: lang
    })
  }

  async changeLang(lang) {
    strings.setLanguage(lang)
    this.setState({
      lang: lang
    })
    await AsyncStorage.setItem('lang', lang)
    this.setState({})
    RNRestart.Restart()
  }

  render() {
    return (
      <Container>
        <View style={{width: '100%', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <Picker
            selectedValue={this.state.lang}
            style={{height: 50, width: '30%'}}
            onValueChange={(itemValue) => this.changeLang(itemValue)
            }>
            <Picker.Item label="Indonesia" value="id" />
            <Picker.Item label="English" value="en" />
          </Picker>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: '#0f991b'}}>{strings.profile}</Text>
          <Text style={{fontSize: 20, color: '#0f991b'}}>{strings.fine}</Text>
        </View>
      </Container>
    )
  }
}

export default Profile