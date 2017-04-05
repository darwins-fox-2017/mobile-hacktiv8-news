import * as actionType from './constants'

export const getPeople = (data) => {
  return {
    type: actionType.LOAD_PEOPLE,
    payload:data
  }
}

export const searchPeople = (keyword) => {
  return {
    type: actionType.SEARCH_PEOPLE,
    payload:keyword
  }
}

export const fetchPeople = () => {
  return (dispatch) => {
    fetch(`https://swapi.co/api/people/`)
    .then(res => res.json())
    .then(data => dispatch(getPeople(data.results)))
  }
}
