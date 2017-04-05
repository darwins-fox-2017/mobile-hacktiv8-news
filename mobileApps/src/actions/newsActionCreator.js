import * as actionType from './constants'

export const getNews = (data) => {
  return {
    type: actionType.LOAD_NEWS,
    payload:data
  }
}

export const searchNews = (data) => {
  return {
    type: actionType.SEARCH_NEWS,
    payload:data
  }
}

export const fetchNews = () => {
  return (dispatch) => {
    fetch(`http://hn.algolia.com/api/v1/search?query=redux`)
    .then(res => res.json())
    .then(data => {
      dispatch(getNews(data.hits))
    })
  }
}

export const fetchSearchNews = (keyword) => {
  return (dispatch) => {
    fetch(`http://hn.algolia.com/api/v1/search?query=`+keyword)
    .then(res => res.json())
    .then(data => {
      dispatch(searchNews(data.hits))
    })
  }
}
