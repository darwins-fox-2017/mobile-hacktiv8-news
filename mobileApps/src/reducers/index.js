
import { combineReducers } from 'redux'
import { newsReducer } from './newsReducer'
import { peopleReducer } from './peopleReducer'

const rootReducers = combineReducers({
  news: newsReducer,
  people: peopleReducer
})

export default rootReducers
