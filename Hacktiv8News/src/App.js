import React, { Component } from 'react';
import { Navigator } from 'react-native';

import News from './components/News'
import People from './components/People'

const App = () => {
  return (
    <Navigator
      initialRoute={{ title: 'news', newsObj: {} }}
      renderScene={(route, navigator) => {
        switch(route.title) {
          case 'news': return <News navigator={navigator} />
          case 'people': return <People navigator={navigator} route={route} />
          default: return <News />
        }
      }}
    />
  )
}

export default App
