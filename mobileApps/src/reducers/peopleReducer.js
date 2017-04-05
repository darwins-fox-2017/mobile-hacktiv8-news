import * as actionType from '../actions/constants'

export const peopleReducer = (state = ['text'], action) =>
{
  switch (action.type) {
    case actionType.LOAD_PEOPLE:
      return action.payload
    case actionType.SEARCH_PEOPLE:
      return state.filter(people => (people.name === null ? '' : people.name).match(new RegExp(action.payload,'i')))
    default:
      return state
  }
}
