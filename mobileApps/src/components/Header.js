import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import styles from './Header.styles.js'

const Header = (props) => (
  <View style={styles.box}>
    <Image style={styles.image} source={{uri: 'https://wordpress.codepolitan.com/wp-content/uploads/2016/10/logo-hacktiv8.png'}} />
    <Text style={styles.text}>News</Text>
    <TextInput style={styles.input} onChangeText={(text)=>props.changeHandler(text)} placeholder="Search..."/>
  </View>
)

export default Header;
