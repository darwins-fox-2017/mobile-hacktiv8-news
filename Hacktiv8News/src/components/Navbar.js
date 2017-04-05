import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Nav = (props) => {
  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => props.navigator.pop()}>
        <Text style={styles.navText}>News |</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigator.push({ title:'people'})}>
        <Text style={styles.navText}>People</Text>
      </TouchableOpacity>
    </View>
  )
}
Nav.propTypes = {
  navigator: React.PropTypes.object.isRequired
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
  }
}


export default Nav
