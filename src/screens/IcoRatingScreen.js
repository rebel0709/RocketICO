import React,{Component} from 'react';
import {View, Dimensions, Image, ScrollView,Text, Platform, WebView, TouchableOpacity} from 'react-native';
import {Grid, Row, Col, Slider, Button} from 'react-native-elements'

const {width, height}= Dimensions.get('window');
const statusString=['Live','Coming Soon','Ended'];
const statusStyle=[{color:'green', fontSize:22},{color:'yellow', fontSize:22},{color:'red', fontSize:22}]

import { connect } from 'react-redux'
import {getIcoMarks} from '../reducers/actions';
//import IcoCategoryMarks from '../components/IcoCategoryMarks';

class IcoRatingScreen extends Component{
	constructor(props){
		super(props)		
	}

	render(){		
		let {item}=this.props.item;
		let content=this.props.item.content
		let url='http://www.rocketico.com/rocketico/index.php/Api/IcoDetail/'+item.id
		let averageSum=0;
		for (prop in content) {
			if((prop=='ico_id') || (prop=='count_reviews'))	continue;
			averageSum+=parseFloat(content[prop]);
		}
		return(
			<View style={{flex:1}}>
				<ScrollView style={{width:width}}>
					<Image source={{uri:item.image}} style={styles.image}/>
					<View style={{flexDirection:'row',paddingHorizontal:10, marginBottom:10}}>
						<View style={{flex:8}}>
							<Text>{item.ico_disp_startdate}</Text>
							<View style={{flexDirection:'row', alignItems:'center'}}>								
								<Text style={statusStyle[item.ico_state]}>{statusString[item.ico_state]}   </Text>
								<Text>{this.printDays(item)}</Text>
							</View>
						</View>
						<View style={{flex:2}}>
							<Text>{averageSum }</Text>
							<Text>{content.count_reviews} rating</Text>
						</View>
					</View>
					<Grid containerStyle={{paddingLeft:10, width:'100%'}}>
						<Row size={2}><Text>Concept</Text></Row>
						<Row containerStyle={styles.rowWrapStyle}>
							<Col size={6} containerStyle={styles.colWrapStyle}>
								<Slider disabled value={Platform.OS=='ios'?parseFloat(content.concept):content.concept/5} maxiumValue={5} miniumValue={0.1}/>
							</Col>
							<Col size={1} containerStyle={styles.colWrapStyle}>
								<TouchableOpacity onPress={()=>this.gotoCommentView('Concept')}>
									<Image source={require('../Images/comment.png')} style={styles.commentIcon}/>
								</TouchableOpacity>
							</Col>
						</Row>
						<Row size={2}><Text>Whitepaper</Text></Row>
						<Row containerStyle={styles.rowWrapStyle}>
							<Col size={6} containerStyle={styles.colWrapStyle}>
								<Slider disabled maxiumValue={5} value={Platform.OS=='ios'?parseFloat(content.concept):content.concept/5} step={0.1}/>
							</Col>
							<Col size={1} containerStyle={styles.colWrapStyle}>
								<TouchableOpacity onPress={()=>this.gotoCommentView('Whitepaper')}>
									<Image source={require('../Images/comment.png')} style={styles.commentIcon}/>
								</TouchableOpacity>
							</Col>
						</Row>
						<Row size={2}><Text>Team</Text></Row>
						<Row containerStyle={styles.rowWrapStyle}>
							<Col size={6} containerStyle={styles.colWrapStyle}>
 								<Slider disabled maxiumValue={5} step={0.1} value={Platform.OS=='ios'?parseFloat(content.team):content.team/5 }/>
							</Col>
							<Col size={1} containerStyle={styles.colWrapStyle}>
								<TouchableOpacity onPress={()=>this.gotoCommentView('Team')}>
									<Image source={require('../Images/comment.png')} style={styles.commentIcon}/>
								</TouchableOpacity>
							</Col>
						</Row>
						<Row size={2}><Text>Token Distribution</Text></Row>
						<Row containerStyle={styles.rowWrapStyle}>
							<Col size={6} containerStyle={styles.colWrapStyle}>
								<Slider disabled maxiumValue={5} step={0.1} value={Platform.OS=='ios'?parseFloat(content.tokendist):content.tokendist/5}/>
							</Col>
							<Col size={1} containerStyle={styles.colWrapStyle}>
								<TouchableOpacity onPress={()=>this.gotoCommentView('Token Distribution')}>
									<Image source={require('../Images/comment.png')} style={styles.commentIcon}/>
								</TouchableOpacity>
							</Col>
						</Row>						
						<Row size={2}><Text>Competition</Text></Row>
						<Row containerStyle={styles.rowWrapStyle}>
							<Col size={6} containerStyle={styles.colWrapStyle}>
								<Slider disabled maxiumValue={5} step={0.1} value={Platform.OS=='ios'?parseFloat(content.competition):content.competition/5}/>
							</Col>
							<Col size={1} containerStyle={styles.colWrapStyle}>
								<TouchableOpacity onPress={()=>this.gotoCommentView('Competition')}>
									<Image source={require('../Images/comment.png')} style={styles.commentIcon}/>
								</TouchableOpacity>
							</Col>
						</Row>
						<Row size={2}><Text>Working</Text></Row>
						<Row containerStyle={styles.rowWrapStyle}>
							<Col size={6} containerStyle={styles.colWrapStyle}>
								<Slider value={0.7} disabled maxiumValue={5} step={0.1} value={Platform.OS=='ios'?parseFloat(content.working):content.working/5}/>
							</Col>
							<Col size={1} containerStyle={styles.colWrapStyle}>
								<TouchableOpacity onPress={()=>this.gotoCommentView('Working')}>
									<Image source={require('../Images/comment.png')} style={styles.commentIcon}/>
								</TouchableOpacity>
							</Col>
						</Row>						
						<Row><Text>Ease of</Text></Row>
						<Row containerStyle={styles.rowWrapStyle}>
							<Col size={6} containerStyle={styles.colWrapStyle}>
								<Slider value={0.7} disabled maxiumValue={5} step={0.1} value={Platform.OS=='ios'?parseFloat(content.easeof):content.easeof/5}/>
							</Col>
							<Col size={1} containerStyle={styles.colWrapStyle}>
								<TouchableOpacity onPress={()=>this.gotoCommentView('Ease of')}>
									<Image source={require('../Images/comment.png')} style={styles.commentIcon}/>
								</TouchableOpacity>
							</Col>
						</Row>
						<Row><Text>Escrow</Text></Row>
						<Row containerStyle={styles.rowWrapStyle}>
							<Col size={6} containerStyle={styles.colWrapStyle}>
								<Slider value={0.7} disabled maxiumValue={5} step={0.1} value={Platform.OS=='ios'?parseFloat(content.escrow):content.escrow/5}/>
							</Col>
							<Col size={1} containerStyle={styles.colWrapStyle}>
								<TouchableOpacity onPress={()=>this.gotoCommentView('Escrow')}>
									<Image source={require('../Images/comment.png')} style={styles.commentIcon}/>
								</TouchableOpacity>
							</Col>
						</Row>
						<Row containerStyle={{alignItems:'center', justifyContent:'center'}}>
							<Button title='Rate and review ICO' onPress={()=>this._gotoGiveReview()}/>
						</Row>
					</Grid>
					<WebView source={{uri: url}} style={{height: 350}}/>
				</ScrollView>
			</View>)
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

	_gotoGiveReview(){
		const { navigate } = this.props.navigation;
  		navigate('GiveRate',{icoId:this.props.item.item.id})
	}

	gotoCommentView(category){
		const { navigate } = this.props.navigation;
  		navigate('ViewComment',{icoId:this.props.item.id, category:category})		
	}
}

let styles={
	image:{
		width:width,
		height:200,
		resizeMode:'stretch'	
	},
	commentIcon:{
		width:28,
		height:28,
		resizeMode:'cover'

	},
	rowWrapStyle:{
		alignItems:'center',
		marginRight:5,
		justifyContent:'center'				
	},
	colWrapStyle:{
		marginHorizontal:6
	},
	
}

function mapStateToProps (state) {
  return {
    item: state.review
  }
}
/*item: state.review.item,
    category:state.review.content
    */

export default connect(mapStateToProps)(IcoRatingScreen);