import React from 'react'
import { View, ListView } from 'react-native'
import Header from './Header'
import People from './People'
import Menubar from './Menubar'
import { searchPeople } from '../actions'
import { connect } from 'react-redux'

class PeopleList extends React.Component {

  changeHandler(keyword){
    this.props.searchPeople(keyword)
  }

  render(){
    return(
      <View style={styles.container}>
        <Header changeHandler={(keyword)=> this.changeHandler(keyword)}/>
        <People />
        <Menubar changeTab={this.props.changeTab} />
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
    searchPeople: (keyword) => dispatch(searchPeople(keyword))
  }
}

export default connect(null, mapDispatchToProps) (PeopleList)
