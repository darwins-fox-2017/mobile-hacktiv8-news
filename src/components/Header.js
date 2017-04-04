import React from 'react'
import Platform from 'Platform'

import { View, Text, TextInput } from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.Heading}>
      <Text style={styles.HeadingText}>
        Hacktiv8 News
      </Text>
      <TextInput onChangeText={props.setSearch} style={styles.FormSearch} placeholder="Search Good News..."/>
    </View>
  )
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
  FormSearch : {
    marginTop: 10,
    width: '100%',
    height: 30,
    borderColor: '#2c3e50',
    borderWidth: 0.3,
  },
}

export default Header
