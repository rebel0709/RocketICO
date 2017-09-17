import {combineReducers} from 'redux';
import nav from './navReducer';
import appData from './dataReducer';
import review from './reviewReducer';
const AppReducer = combineReducers({
	nav,
	appData,
	review
})

export default AppReducer;