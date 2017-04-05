import React from 'react';
import { View, TextInput, Image } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.Header}>
      <TextInput
        style = {styles.searchInput}
        placeholder = 'Search . . .'
        autoCapitalize = 'none'
        defaultValue={props.keyword}
        onChangeText={(keyword) => props.handleChange(keyword)}
      />
      <Image style={styles.imageHeader} source={{uri:"https://hacktiv8.com/img/ogdefault.jpg"}}/>
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
  searchInput: {
      margin: 3,
      height: 35,
  },
}


export default Header
