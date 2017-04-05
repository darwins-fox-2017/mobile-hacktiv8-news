import * as actionType from './constants'

export const getPeople = (data) => {
  return {
    type: actionType.LOAD_PEOPLE,
    payload:data
  }
}

export const searchPeople = (keyword,data) => {
  return {
    type: actionType.SEARCH_PEOPLE,
    payload:{
      keyword,
      data
    }
  }
}
