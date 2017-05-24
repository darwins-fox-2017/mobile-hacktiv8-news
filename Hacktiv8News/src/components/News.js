import React, { Component } from 'react';
import { Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';

import Header from './Header'
import Nav from './Navbar'
import Footer from './Footer'

class News extends Component {
  constructor(){
		super()
		this.state = {
			listNews:[],
      searchKey: ''
		}
	}

  componentDidMount () {
    const self = this
		fetch('https://hn.algolia.com/api/v1/search?query=redux')
			.then((response, err) => {
        if (err) throw err
				return response.json()
			})
			.then(data => {
				self.setState({
				listNews : data.hits
				})
			})
  }

  setSearchKey (keyword) {
    this.setState ({
      searchKey: keyword
    })
  }

  render () {
    return (
      <View>
        <Header handleChange={this.setSearchKey.bind(this)}/>
        <Nav navigator={this.props.navigator} />
        <Image style={styles.content} source={{uri:'https://hacktiv8.com/img/covers/faq--md5--306ca9e34ec60d2ce2dad1a3207ba604.jpg'}}>
          <ScrollView>
            {this.state.listNews.length === 0 ? <ActivityIndicator animation={true}/> :
              this.state.listNews.filter((item, index) => {
                let patternFilter = new RegExp(this.state.searchKey, 'gi')
                return patternFilter.test(item.title)
              }).map((item, index) => {
                return (
                  <View key={index} style={styles.cardNews}>
                    <Text handleKeyword={this.state.searchKey} style={styles.textItem}>{item.title}</Text>
                  </View>
                )
              })
            }
          </ScrollView>
        </Image>
        <Footer/>
      </View>
    )
  }
}

const styles = {
  content: {
    height: '67%',
    width: '100%',
    padding: 10,
    resizeMode:'cover',
  },
  cardNews:{
    padding: 5,
    marginBottom:10,
    width:'100%',
    backgroundColor:'#fff',
    justifyContent:'center',
  },
  textItem:{
    fontFamily: 'sans-serif',
    textAlign:'justify',
    fontSize: 15,
    color:'#000000',
  }
}

export default News
