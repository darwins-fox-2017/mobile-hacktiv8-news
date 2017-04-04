import React from 'react'
import { Navigator } from 'react-native'
import PeopleList from './components/PeopleList'
import NewsList from './components/NewsList'

const App = () => (
  <Navigator
    initialRoute={{ title: 'news'}}
    renderScene={(route, navigator) => {
      switch(route.title) {
        case 'news':
          return <NewsList navigator={navigator} />
        case 'people':
          return <PeopleList navigator={navigator} />
        default:
          return <NewsList />
      }
    }}
  />
)


export default App;
