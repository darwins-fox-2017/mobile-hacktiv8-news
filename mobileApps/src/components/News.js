import React from 'react'
import { ScrollView, View, Text, Image, ListView } from 'react-native'
import { connect } from 'react-redux'
import { fetchNews } from '../actions'
import styles from './News.styles.js'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class News extends React.Component {

  componentDidMount(){
    this.props.fetchNews()
  }

  render(){
    return(
      <View style={styles.box}>
        {this.props.news.rowIdentities == 0 &&
          <View style={styles.loader}>
            <Image style={styles.image} source={require('../image/load.gif')} />
          </View>
        }
        <ListView
          dataSource={this.props.news}
          renderRow={(rowData) => {
            return(
              <View style={styles.thumbnail}>
                <Text>{rowData.title}</Text>
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
    news: ds.cloneWithRows(state.news)
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchNews: () => dispatch(fetchNews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (News)
