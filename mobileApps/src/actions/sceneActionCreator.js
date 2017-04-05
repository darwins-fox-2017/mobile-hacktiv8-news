import * as actionType from './constants'

export const newsScene = (data) => {
  return {
    type: actionType.NEWS_SCENE,
    payload:data
  }
}

export const peopleScene = (data) => {
  return {
    type: actionType.PEOPLE_SCENE,
    payload:data
  }
}
