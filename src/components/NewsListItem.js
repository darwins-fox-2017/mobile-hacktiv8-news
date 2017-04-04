import React from 'react'
import { View, Text } from 'react-native'

const NewsListItem = (props) => {

  return (
    <View style={styles.ListView}>
      <Text>Title : {props.News.title}</Text>
      <Text>URL : {props.News.url}</Text>
      <Text>Author : {props.News.author}</Text>
      <Text style={styles.Meta}>
        Comment : {props.News.num_comments} |
        Points : {props.News.points} |
        ID : {props.News.objectID}
      </Text>

    </View>
  )
}

const styles = {
  ListView: {
    marginTop: 5,
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'black',
    padding: 5,
  },
  Meta: {
    fontSize: 12,
    color: '#BDC3C7'
  }
}

export default NewsListItem
