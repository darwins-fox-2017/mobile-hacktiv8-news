import React from 'react'
import { View } from 'react-native'
import Header from './Header'
import News from './News'
import Menubar from './Menubar'

class NewsList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      news: [],
      search: ''
    }
  }

  componentDidMount(){
    fetch(`http://hn.algolia.com/api/v1/search?query=redux`)
    .then(res => res.json())
    .then(data => this.setState ({news: data.hits}))
  }

  changeHandler(keyword){
    this.setState({
      search: keyword
    })
    fetch(`http://hn.algolia.com/api/v1/search?query=`+this.state.search)
    .then(res => res.json())
    .then(data => this.setState ({news: data.hits}))
  }

  render(){
    return(
      <View style={styles.container}>
        <Header changeHandler={(keyword)=> this.changeHandler(keyword)}/>
        <News data={this.state.news}/>
        <Menubar navigator={this.props.navigator}/>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
}

export default NewsList;
