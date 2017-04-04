import React from 'react'
import { ScrollView, Text, ActivityIndicator } from 'react-native'

import NewsListItem from './NewsListItem'

const NewsData = [
  {
    title: 'React',
    url: 'https://google.com',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://google.com',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
]

export default class NewsList extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      News : '',
      animatingNews : true,
    }
  }

  fetchNews () {
    fetch('https://hn.algolia.com/api/v1/search?query=react')
    .then ( response => response.json() )
    .then ( data => this.setState({
      News: data.hits,
      animatingNews: false
    }))
    .catch( err => {console.log(err);})
  }

  componentDidMount() {
    this.fetchNews()
  }

  render() {
    return (
      <ScrollView style={{height: '74%'}}>
        <Text>
          News List
        </Text>
          {
            this.state.News === ''
            ?
            <ActivityIndicator animation={this.state.animatingNews} />
            :
            this.state.News
            .filter( News => {
              let regPattern = new RegExp(this.props.searchKey, 'gi')
              return regPattern.test(News.title)
            })
            .map( News => (
              <NewsListItem key={News.objectID} News={News} />
            ))
          }
      </ScrollView>
    )
  }
}
