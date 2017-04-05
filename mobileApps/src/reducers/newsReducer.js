import * as actionType from '../actions/constants'

export const newsReducer = (state = ['text'], action) =>
{
  switch (action.type) {
    case actionType.LOAD_NEWS:
      return action.payload
    case actionType.SEARCH_NEWS:
      return action.payload
    default:
      return state
  }
}
