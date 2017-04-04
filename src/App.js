import React from 'react'
import { View, Text } from 'react-native'

import Header from './components/Header'
import NewsList from './components/NewsList'
import Menu from './components/MenuBar'

export default class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      searchKey : '',
    }
  }

  setSearch (text) {
    this.setState({
      searchKey: text
    })
  }

  render () {
    return (
      <View>
        <Header setSearch={this.setSearch.bind(this)} />
        <Menu navigator={this.props.navigator} />
        <NewsList searchKey={this.state.searchKey} />
      </View>
    )
  }
}
