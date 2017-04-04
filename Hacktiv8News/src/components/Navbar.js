import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Nav = (props) => {
  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => this.props.navigator.pop()}>
        <Text style={styles.navText}>News |</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigator.push({ title:'people', newsObj: people})}>
        <Text style={styles.navText}>People</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  nav: {
    height: '8%',
    width: '100%',
    padding: 10 ,
    backgroundColor: '#ff9900',
    flexDirection:'row',
  },
  navText:{
    color:'#ffffff',
    padding:3,
    fontSize:20
  },
}


export default Nav
