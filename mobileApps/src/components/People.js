import React from 'react'
import { View, Text, Image, ListView } from 'react-native'
import styles from './People.styles.js'

const People = (props) => (

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
              <Text>{rowData.name}</Text>
            </View>
            )}
      }
    />
  </View>
)
  

export default People;
