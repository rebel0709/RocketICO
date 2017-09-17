import { connect } from 'react-redux'
import { fetchData } from '../reducers/actions'

import React,{Component} from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';

class SplashScreen extends Component{
	static navigationOptions = {	    
	    header:null
	}
	
	componentDidMount() {		
		this.props.fetchData()		
	}

	render(){		
	    return (
	      <View style={styles.mainContainer}>
	        <Image source={require('../Images/Splash.png')} style={styles.backgroundImage} resizeMode='cover'/>
	        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
	          <Text style={{color:'white', fontWeight:'bold', fontSize:25}}>our mission</Text>
	          <Text style={{color:'white', fontSize:22}}>To create a transparent and level</Text>
	          <Text style={{color:'white', fontSize:22}}>Crypto playing field</Text>
	        </View>
	        <View style={{flex:1, alignItems:'center'}}>
	          <Image source={require('../Images/rocket.png')} style={{width:25 ,height:60}}/>
	        </View>
	      </View>
	      )
	}
}

let styles={
  mainContainer:{
    flex: 1,
    backgroundColor:'transparent'
  },
  backgroundImage:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },    
}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen)