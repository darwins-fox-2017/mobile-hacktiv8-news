import React from 'react'
import { View, ListView } from 'react-native'
import Header from './Header'
import People from './People'
import Menubar from './Menubar'

class PeopleList extends React.Component {
  constructor(props){
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
      people: this.ds.cloneWithRows(['tempPeople']),
      search: ''
    }
  }

  componentDidMount(){
    fetch(`https://swapi.co/api/people/`)
    .then(res => res.json())
    .then(data =>
      this.setState({
        people: this.ds.cloneWithRows(data.results)
      })
    )
  }

  changeHandler(keyword){
    this.setState({
      search: keyword
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Header changeHandler={(keyword)=> this.changeHandler(keyword)}/>
        <People data={this.state.people} keyword={this.state.search}/>
        <Menubar navigator={this.props.navigator} />
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

export default PeopleList;
