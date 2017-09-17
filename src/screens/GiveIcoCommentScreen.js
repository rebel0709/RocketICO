import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native'
import {Button, Grid, Row, Col, Avatar} from 'react-native-elements'

import {submitIcoComment} from '../reducers/api';

const categoryNames={'concept':'Concept', 'whitepaper':'Whitepaper','team':'Team', 'tokendist':'Token Distribution', 'competition':'Competition',
						'working':'Working','easeof':'Ease '}
export default class GiveIcoCommentScreen extends Component{

	constructor(props){
		super(props)
		this.state={
			isAdd:false,
			comment:'',
			inputedComment:''
		}
	}

	render(){
		let icoID=this.props.navigation.state.params.icoId;
		let category=this.props.navigation.state.params.category;
		return(
			<View style={styles.container}>
				<Text style={styles.title}>Submit review for {categoryNames[category]}</Text>
				<View style={styles.reviewContent}>
					<TextInput style={{flex:9}} multiline={true} numberOfLines = {4} placeholder="Type here" value={this.state.comment} onChangeText={(text) => this.setState({comment:text})}/>
					<Button title='Add' containerStyle={{flex:1}} onPress={()=>this.onAddPress()}/>
				</View>
				{
					this.state.isAdd?(
						<Grid>
							<Row>
								<Col containerStyle={styles.avatarCol} size={1}>
									<Avatar rounded/>
								</Col>
								<Col containerStyle={styles.commentCol} size={5}>
									<Text>{this.state.inputedComment}</Text>
								</Col>
							</Row>					
						</Grid>
						):null
				}
			</View>
			)
	}
	onSuccessResponse(response){
		if(response.code==1){
			this.setState({inputedComment:this.state.comment});
			this.props.navigation.goBack();
		}
	}
	onAddPress(){
		this.setState({isAdd:true})
		let icoID=this.props.navigation.state.params.icoId;
		let category=this.props.navigation.state.params.category;
		submitIcoComment(icoID, category, this.state.comment)			
			.then((responseData)=>this.onSuccessResponse(responseData))
			.catch((err)=>{
				console.log(err)}
				)
		//submitIcoRatings
	}
}

let styles={
	container:{
		flex:1
	},
	reviewContent:{
		position:'absolute',
		bottom:0,
		width:'100%',
		flexDirection:'row',
		borderWidth:1,
		alignItems:'center'		
	},
	title:{
		fontSize:24
	}	
}