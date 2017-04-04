import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

const MenuBar = (props) => {
  return (
    <View style={styles.Menu}>
        {
          props.navigator.getCurrentRoutes().length > 1
          ?
          <TouchableOpacity onPress={() => props.navigator.pop()}>
            <Text style={styles.TextList}> &lt; </Text>
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={() => props.navigator.push({title: 'Peoples'})}>
            <Text style={styles.TextList}> People </Text>
          </TouchableOpacity>
        }
    </View>
  )
}

const styles = {
  Menu: {
    flexDirection: 'row',
    height: '7%',
    width: '100%',
    backgroundColor: '#2ecc71',
    margin: 0,
    paddingLeft: 5,
    paddingTop: 10,
  },
  TextList: {
    marginLeft: 3,
  }
}

export default MenuBar
