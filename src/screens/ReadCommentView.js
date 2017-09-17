import React, {Component} from 'react'
import {View, Text} from 'react-native';
import {Avatar, List, ListItem} from 'react-native-elements'
import axios from 'axios';
var qs=require('qs');
const BASE_URL = 'http://www.rocketico.com/rocketico/index.php/Api';
const GET_COMMENT=`${BASE_URL}/getIcoCommentByCategory`;

export default class ReadCommentView extends Component{
	constructor(props){
		super(props)
		this.state={
			categoryName:this.props.navigation.state.params.category,
			id:this.props.navigation.state.params.ico_id,
			loading:false,
			comments:[]
		}
	}
	render(){		
		return(
			<View style={styles.container}>
				<Text style={styles.categoryName}>{this.state.categoryName} review</Text>				
				{
					this.state.loading ?(<Text>loading...</Text>) :
						(<List containerStyle={{marginBottom: 20}}>
							{
								this.state.comments.map((v,i)=>(
									<ListItem key={i} 
										roundAvatar
										avatar={require('../Images/user_icon.png')}
										subtitle={v.comment}
										hideChevron={true}
									/>
								))
							}							
						</List>)
				}				
			</View>
			)
	}
	componentDidMount(){
		this.setState({loading:true})
		axios.post(GET_COMMENT, qs.stringify({
		    id: this.state.id,
		    category: this.state.categoryName
		  }))
		  .then(function (response) {
		    this.setState({loading:false, comments:response.data.content})
		  }.bind(this))
		  .catch(function (error) {
		    console.log(error);
		  });
	}
}

let styles={
	container:{
		flex:1,
		padding:10
	},
	categoryName:{
		fontSize:26
	}
}