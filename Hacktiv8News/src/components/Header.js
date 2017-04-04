import React from 'react';
import { View, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.Header}>
      <Image style={styles.imageHeader} source={{uri:"https://hacktiv8.com/img/ogdefault.jpg"}} />
    </View>
  )
}

const styles = {
  Header: {
    height: '20%',
    width: '100%',
  },
  imageHeader: {
    height: '100%',
    width:'100%',
    resizeMode:'cover',
  },
}


export default Header
