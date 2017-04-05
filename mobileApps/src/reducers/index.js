
import { combineReducers } from 'redux'
import { newsReducer } from './newsReducer'
import { peopleReducer } from './peopleReducer'
import { sceneReducer } from './sceneReducer'

const rootReducers = combineReducers({
  news: newsReducer,
  people: peopleReducer,
  scene: sceneReducer
})

export default rootReducers
