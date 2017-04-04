import React from 'react'
import { Navigator } from 'react-native'

import App from './App'
import AppPeoples from './AppPeoples'

export default class AppNavigator extends React.Component {
  render () {
    return (
      <Navigator
        initialRoute={{title: 'Home'}}
        renderScene={(route, navigator) => {
          switch (route.title) {
            case 'Home': return <App navigator={navigator} />
            case 'Peoples': return <AppPeoples navigator={navigator} />
            default: return <App />
          }
        }}
      />
    )
  }
}
