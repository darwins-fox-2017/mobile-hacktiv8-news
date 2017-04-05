import React from 'react'
import { View, ListView } from 'react-native'
import Header from './Header'
import News from './News'
import Menubar from './Menubar'
import { connect } from 'react-redux'
import { fetchSearchNews } from '../actions'

class NewsList extends React.Component {

  changeHandler(keyword){
    this.props.fetchSearchNews(keyword)
  }

  render(){
    return (
      <View style={styles.container}>
        <Header changeHandler={(keyword)=>this.changeHandler(keyword)}/>
        <News />
        <Menubar changeTab={this.props.changeTab}/>
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
const mapDispatchToProps = (dispatch) => {
  return{
    fetchSearchNews: (keyword) => dispatch(fetchSearchNews(keyword))
  }
}

export default connect(null, mapDispatchToProps) (NewsList)
