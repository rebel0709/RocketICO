import React from 'react'
import { Text, Image, View ,TouchableOpacity } from 'react-native'
import {Icon} from 'react-native-elements';

export default class LaunchScreen extends React.Component {
  static navigationOptions = {      
      header:null
  }
  render(){
    return(
      <View style={{flex:1}}>
        <TouchableOpacity style={{flex:2, backgroundColor:'dodgerblue', alignItems:'center', justifyContent:'center'}} onPress={()=>{this._toNextScreen('Facebook')}}>
            <Text style={styles.connect_text}>Connect with</Text>
            <Icon name='facebook' type='font-awesome' color='white' size={32}/>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:2, backgroundColor:'darkturquoise', alignItems:'center', justifyContent:'center'}} onPress={()=>{this._toNextScreen('GPlus')}}>
            <Text style={styles.connect_text}>Connect with</Text>
            <Icon name='twitter' type='font-awesome' color='white'  size={32}/>            
        </TouchableOpacity>
        <TouchableOpacity style={{flex:2, backgroundColor:'lightcoral', alignItems:'center', justifyContent:'center'}} onPress={()=>{this._toNextScreen('Twitter')}}>
            <Text style={styles.connect_text}>Connect With</Text>
            <Icon name='google-plus' type='font-awesome' color='white'/>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, backgroundColor:'grey', justifyContent:'center', alignItems:'center'}} onPress={()=>{this._toNextScreen('Skip')}}>
            <Text style={{fontSize:20, color:'white'}}>SKIP</Text>
        </TouchableOpacity>
      </View>
      )
  }
  _toNextScreen(loginType){
    const { navigate } = this.props.navigation;
    switch(loginType){
      case 'Facebook':
      case 'GPlus':
      case 'Twitter':
        break;
      default:
        navigate('IcoList');
    }
  }
}

let styles={
  connect_text:{
    position:'absolute',
    left:10,
    top:10,
    color:'white',
    fontSize:16
  }  
}