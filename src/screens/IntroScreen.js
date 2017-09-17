import React from 'react'
import {Image, Dimensions, ScrollView, Text, KeyboardAvoidingView,View, Platform} from 'react-native'
import { connect } from 'react-redux'
import {Button as NewButton} from 'react-native-elements';
import Button from 'react-native-button';
import Swiper from 'react-native-swiper';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
const {width, height}= Dimensions.get('window');
class IntroScreen extends React.Component {
	static navigationOptions = {	    
	    header:null
	}
  render () {
    return (
      <View style={{flex:1}}>      
      	<Swiper showsButtons dotStyle={{marginBottom:'28%'}} dotColor='darkgrey' activeDotColor='grey' activeDotStyle={{marginBottom:'28%'}}>
		    <Image style={styles.backgroundImage} resizeMode="cover" source={require('../Images/Intro.png')}>
		    {
		    	this.renderStartButton()		    	
		    }
		    </Image>		  
		    <Image style={styles.backgroundImage} source={require('../Images/Intro2.png')}>
		    {
		    	this.renderStartButton()		    	
		    }
		    </Image>		  
		    <Image style={styles.backgroundImage} source={require('../Images/Intro3.png')}>
		    {
		    	this.renderStartButton()		    	
		    }
		    </Image>		  
		</Swiper>		
      </View>
    )
  }
  renderStartButton(){
  	if (Platform.Version<21){
  		return(
  			<Button style={{color:'white', fontSize:24}} containerStyle={styles.startOldButtonStyle} onPress={()=>this._onPressStart()}>START</Button>
  		)  	
  	}else{
  		return(
  			<NewButton raised title='START' onPress={()=>this._onPressStart()} borderRadius={6} containerViewStyle={styles.startButtonStyle} backgroundColor='transparent'/>
  		)  		
  	}
  }
  _onPressStart(){
  	const { navigate } = this.props.navigation;
  	navigate('Login')
  }
}
export default IntroScreen;
let styles={
	slide:{
		flex: 1,
    	justifyContent: 'center',
	},
	backgroundImage:{
	    position: 'absolute',
	    width: width,
	    height: height,
	    alignItems:'center',
	    justifyContent:'flex-end',
	    paddingBottom:'12%'
  	},
  	startButtonStyle:{
  		borderWidth:2,
  		borderColor:'white',  		
  		width:'30%',
  		borderRadius:6
  	},
  	startOldButtonStyle:{
  		borderWidth:2,
  		borderColor:'white',  		
  		width:'30%',
  		borderRadius:6,
  		backgroundColor:'transparent',
  		borderRadius:6,
  		alignItems:'center',
  		justifyContent:'center'
  	}
}