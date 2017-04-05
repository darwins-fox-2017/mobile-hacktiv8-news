import * as actionType from '../actions/constants'

export const peopleReducer = (state = [], action) =>
{
  switch (action.type) {
    case actionType.LOAD_PEOPLE:
      return action.payload
    case actionType.SEARCH_PEOPLE:
      return action.payload
    default:
      return state
  }
}
