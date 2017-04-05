import React from 'react'
import { Navigator } from 'react-native'
import PeopleList from './components/PeopleList'
import NewsList from './components/NewsList'
import { connect } from 'react-redux'
import { newsScene, peopleScene } from './actions'

const App = (props) => {
  switch(props.scene) {
    case 'news':
      return <NewsList changeTab={tab => props.newsScene(tab)} />
    case 'people':
      return <PeopleList changeTab={tab => props.peopleScene(tab)} />
    default:
      return <NewsList />
  }
}

const mapStateToProps = (state) => {
  return {
    scene: state.scene
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    newsScene: (tab) => dispatch(newsScene(tab)),
    peopleScene: (tab) => dispatch(peopleScene(tab))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)
