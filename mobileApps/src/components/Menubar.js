import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Menubar.styles.js'

const Menubar = (props) => (
  <View style={styles.box}>
    <TouchableOpacity onPress={() => props.navigator.push({title: 'news'})} style={styles.highlight}>
      <Image style={styles.button} source={require('../image/paper.png')} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigator.push({title: 'people'})} style={styles.highlight}>
      <Image style={styles.button} source={require('../image/people.png')} />
    </TouchableOpacity>
  </View>
)

export default Menubar;
