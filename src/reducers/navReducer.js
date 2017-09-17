//import {NavigationAction} from 'react-navigation';
import {NavigationAction} from 'react-navigation/lib-rn/react-navigation';
import { FETCHED_ICOS,FETCHED_ICO_MARKS} from './constants'

import {AppNavigator} from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('MySplash');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

export default function nav(state=initialNavState, action){
	let nextState;
	switch(action.type){
		case FETCHED_ICOS:
			const secondtAction = AppNavigator.router.getActionForPathAndParams('Intro');
			nextState=AppNavigator.router.getStateForAction(secondtAction, state);
			break;
		case FETCHED_ICO_MARKS:
			const nextAction = AppNavigator.router.getActionForPathAndParams('IcoRating');
			nextState=AppNavigator.router.getStateForAction(nextAction, state);
			break;
		default:
			nextState=AppNavigator.router.getStateForAction(action, state);
			break;
	}

	return nextState || state;
}