import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen';
import IntroScreen from '../screens/IntroScreen';
import SocialLoginScreen from '../screens/SocialLoginScreen';
import IcoListScreen from '../screens/IcoListScreen';
import IcoRatingScreen from '../screens/IcoRatingScreen';
import GiveIcoRateScreen from '../screens/GiveIcoRateScreen';
import ReadCommentView from '../screens/ReadCommentView';
import GiveIcoCommentScreen from '../screens/GiveIcoCommentScreen';

export const AppNavigator = StackNavigator({
  MySplash: {screen: SplashScreen}, // this is displayed first
    Intro: {screen: IntroScreen},    
    Login: { screen: SocialLoginScreen }, 
    IcoList:{screen: IcoListScreen},
    IcoRating:{screen: IcoRatingScreen},
    GiveRate:{screen:GiveIcoRateScreen},
    ViewComment:{screen:ReadCommentView},
    GiveComment:{screen:GiveIcoCommentScreen}
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
