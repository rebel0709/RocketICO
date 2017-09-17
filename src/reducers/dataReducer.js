import { FETCHING_ICOS, FETCHED_ICOS, FETCHED_FAILED} from './constants'
const initialState = {
  icos: [],
  icoFetched: false,
  isFetching: false,
  error: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_ICOS:
      return {
        ...state,
        icos: [],
        isFetching: true
      }
    case FETCHED_ICOS:      
      newState= {
          ...state,
          isFetching: false,
          icos: action.data.data.content
        }
      return newState      
    case FETCHED_FAILED:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return {
        ...state
      }
  }
}