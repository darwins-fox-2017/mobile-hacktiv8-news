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
        // if(rowData.name.match(new RegExp(props.keyword,'i'))){
          return(
            <View style={styles.thumbnail}>
              <Text>{rowData.name}</Text>
            </View>
            )}
        // }
      }
    />
  </View>
)
  //   {props.data.filter(results => (results.name === null ? '' : results.name).match(new RegExp(props.keyword,'i'))).map((item,index)=>{

export default People;
