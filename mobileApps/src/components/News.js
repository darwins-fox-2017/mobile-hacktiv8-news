import React from 'react'
import { ScrollView, View, Text, Image, ListView } from 'react-native'
import styles from './News.styles.js'

const News = (props) => (
  <View style={styles.box}>
    {props.data.rowIdentities == 0 &&
      <View style={styles.loader}>
        <Image style={styles.image} source={require('../image/load.gif')} />
      </View>
    }
    <ListView
      dataSource={props.data}
      renderRow={(rowData) => {
        return(
          <View style={styles.thumbnail}>
            <Text>{rowData.title}</Text>
          </View>
          )}
      }
    />
  </View>
)

export default News;
