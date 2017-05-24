import React from 'react';
import { View, Text } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText} source={{uri:'https://github.com/MrEi91'}}>Made By : Eri Irawan</Text>
    </View>
  )
}

const styles = {
  footer: {
    height: '5%',
    width: '100%',
    backgroundColor: '#ff9900',
  },
  footerText:{
    color:'#ffffff',
    padding:5,
  },
}

export default Footer
