import React from 'react'
import { View, Text, Platform, ActivityIndicator } from 'react-native'

import Menu from './components/MenuBar'

export default class AppPeoples extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      listPeople: '',
      animatingIndicator: true
    }
  }

  componentDidMount () {
    this.fetchListPeople()
  }
  fetchListPeople () {
    fetch('https://swapi.co/api/people/')
    .then( response => (response.json()))
    .then( data => {
      this.setState({
        listPeople: data.results,
        animatingIndicator: false
      })
    })
    .catch( err => console.log(err))
  }
  render () {
    return (
      <View>
        <View style={styles.Heading}>
          <Text style={styles.HeadingText}>
            List Peoples
          </Text>
        </View>

        <Menu navigator={this.props.navigator} />

        <View style={styles.listPeople}>
          {
            this.state.listPeople === ''
            ?
              <ActivityIndicator animation={this.state.animatingIndicator} />
            :
              this.state.listPeople.map( people => {
                return ( <Text key={people.name}>{people.name}</Text> )
              })
          }
        </View>
      </View>
    )
  }
}

const styles = {
  Heading : {
    height: '19%',
    width: '100%',
    backgroundColor: '#ecf0f1',
    paddingTop: 20,
  },
  HeadingText : {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: (Platform.isTVOS ? 'Times' : 'Futura'),
  },
  listPeople : {
    height: '74%'
  }
}
