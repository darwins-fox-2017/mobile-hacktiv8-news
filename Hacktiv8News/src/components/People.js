import React, { Component } from 'react';
import { Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';

import Header from './Header'
import Nav from './Navbar'
import Footer from './Footer'

class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peoples:[]
    }
  }

  componentDidMount(){
    const self = this
    fetch('https://swapi.co/api/people/')
      .then((response, err) => {
        if (err) throw err
        return response.json()
      })
      .then(data => {
        self.setState({
          peoples: data.results
        })
      })
  }

  render(){
    return (
      <View>
        <Header/>
        <Nav />
          <Image style={styles.content} source={{uri:'https://hacktiv8.com/img/covers/faq--md5--306ca9e34ec60d2ce2dad1a3207ba604.jpg'}}>
            <ScrollView>
              <View key={index} style={styles.cardPeople}>
                {this.state.peoples.length === 0 ? <ActivityIndicator animation={true}/> :
                  this.state.peoples.map((item, index) => {
                    return (
                      <Text style={styles.textItem}>{item.name}</Text>
                    )
                  })
                }
              </View>
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
  cardPeople:{
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

export default People
