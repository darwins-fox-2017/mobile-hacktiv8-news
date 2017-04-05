import * as actionType from '../actions/constants'

export const sceneReducer = (state = 'news', action) =>
{
  switch (action.type) {
    case actionType.NEWS_SCENE:
      return action.payload
    case actionType.PEOPLE_SCENE:
      return action.payload
    default:
      return state
  }
}
