import { FETCHING_ICO_MARKS, FETCHED_ICO_MARKS} from './constants'
const initialState = {    
  fetching: false,
  error: false,
  content:[]
}
export default function reviewReducer (state = initialState, action) {
	switch (action.type) {
		case FETCHING_ICO_MARKS:
			return {
				...state,
				content: [],
				fetching: true
			}
		case FETCHED_ICO_MARKS:
			let newState;
			// if(action.data.message==='Nofeedback'){
			// 	newState= {
			// 	  ...state,
			// 	  fetching: false,				  
			// 	  ...action.data
			// 	}
			// }
			newState= {
				  ...state,
				  fetching: false,				  
				  ...action.data
			}
			return newState;
		default:
			return {
				...state
			}
	}
	return state;
}