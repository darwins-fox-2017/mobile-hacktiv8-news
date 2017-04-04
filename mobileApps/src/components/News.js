import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import styles from './News.styles.js'

const News = (props) => (
  <ScrollView style={styles.box}>
    {props.data.length === 0 &&
      <View style={styles.loader}>
        <Image style={styles.image} source={require('../image/load.gif')} />
      </View>
    }
    {props.data.map((item,index)=>{
      return(
        <View key={index} style={styles.thumbnail}>
          <Text>{item.title}</Text>
        </View>
      )
    })}
  </ScrollView>
)

export default News;
