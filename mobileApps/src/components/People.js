import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import styles from './People.styles.js'

const People = (props) => (
  <ScrollView style={styles.box}>
    {props.data.length === 0 &&
      <View style={styles.loader}>
        <Image style={styles.image} source={require('../image/load.gif')} />
      </View>
    }
    {props.data.filter(results => (results.name === null ? '' : results.name).match(new RegExp(props.keyword,'i'))).map((item,index)=>{
      return(
        <View key={index} style={styles.thumbnail}>
          <Text>{item.name}</Text>
        </View>
      )
    })}
  </ScrollView>
)

export default People;
