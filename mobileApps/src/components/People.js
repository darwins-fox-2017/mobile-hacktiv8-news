import React from 'react'
import { View, Text, Image, ListView } from 'react-native'
import styles from './People.styles.js'
import { fetchPeople } from '../actions'
import { connect } from 'react-redux'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class People extends React.Component{
  componentDidMount(){
    this.props.fetchPeople()
  }

  render(){
    return(
      <View style={styles.box}>
        {this.props.people.rowIdentities == 0 &&
          <View style={styles.loader}>
            <Image style={styles.image} source={require('../image/load.gif')} />
          </View>
        }
        <ListView
          dataSource={this.props.people}
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
  }
}


const mapStateToProps = (state) => {
  return {
    people: ds.cloneWithRows(state.people)
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchPeople: () => dispatch(fetchPeople())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (People)
