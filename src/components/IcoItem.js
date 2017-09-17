import React, {Component} from 'react';
import {Image, TouchableOpacity, View, Dimensions, Text} from 'react-native';

const {width, height}= Dimensions.get('window');
const stateString=['Live','Coming Soon', 'Ended'];
const stateColor=['green','gold', 'red'];
export default class IcoThumbnail extends Component{
	constructor(props){
		super(props)		
	}

	render(){
		const {item}= this.props;
		return(
			<TouchableOpacity style={styles.wrapper} onPress={this.props.onPress}>
				<Image style={styles.icoImage} source={{uri:item.image}}/>
				<View style={styles.icoStatusWrap}>
					<View style={styles.icoDaysWrap}>
						<Text style={styles.icoStartDay}>{item.ico_disp_startdate}</Text>
						<View style={{flexDirection:'row'}}>
							<Text style={{color:stateColor[item.ico_state]}}>{stateString[item.ico_state]}  </Text>							
							<Text>{this.printDays(item)}</Text>
						</View>
					</View>					
					<Text style={{fontSize:20, flex:2, textAlign:'right'}}>8.2</Text>					
				</View>
				<View>
					<Text style={{fontSize:18}}>{item.ico_name}</Text>
					<Text style={{fontSize:14}}>{item.ico_desc}</Text>
				</View>				
			</TouchableOpacity>
			)
	}
	printDays(item){
		if(item.ico_state==0){
			return 'End in '+item.remain_days+' Days';
		}else if(item.ico_state==1){
			return (item.remain_days.toString()+' Days');
		}
		//return item.ico_funded+' Funded'
		return '2M Funded'
	}
}
let styles={
	wrapper:{
		height:200,
		margin:2
	},
	icoImage:{
		width:width/2-5,
		height:80,
		resizeMode:'stretch'
	},
	icoStatusWrap:{
		width:width/2-30,
		flexDirection:'row',
		justifyContent:'space-between',
		marginBottom:10
	},
	icoDaysWrap:{
		flex:7
	},
	icoStartDay:{
		fontSize:12
	}
}