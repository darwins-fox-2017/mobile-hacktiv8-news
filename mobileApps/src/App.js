import React from 'react'
import { Navigator } from 'react-native'
import PeopleList from './components/PeopleList'
import NewsList from './components/NewsList'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      selectedTab:'news'
    }
  }

  changeTab(tab){
    this.setState({
      selectedTab: tab
    })
  }

  render(){
    switch(this.state.selectedTab) {
      case 'news':
        return <NewsList changeTab={tab => this.changeTab(tab)} />
      case 'people':
        return <PeopleList changeTab={tab => this.changeTab(tab)} />
      default:
        return <NewsList />
    }
  }
}

export default App;
