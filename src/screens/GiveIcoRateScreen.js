import React,{Component} from 'react';
import {Grid, Row, Col, Slider, Button} from 'react-native-elements';
import {ActivityIndicator, Dimensions, ScrollView, Text, Image, TouchableOpacity} from 'react-native'

import { connect } from 'react-redux';

const {width, height} = Dimensions.get('window');
import {submitIcoRatings} from '../reducers/api';

class GiveIcoRateScreen extends Component{
	constructor(props){
		super(props)
		this.state={
			data:[],
			averageScore:0,
			loading:false,			
		}
	}
	render(){
		let data=this.state
		return(
			<ScrollView style={styles.container}>
			<Grid containerStyle={{width:'100%', paddingHorizontal:10}}>
				<Row ><Text>Concept</Text></Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Col size={9} containerStyle={styles.colWrapStyle}>
						<Slider maximumValue={5} step={0.1} value={data.concept} onValueChange={(value) => this._onChangeValue(value,'concept')}/>
					</Col>
					<Col size={1} containerStyle={{alignItems:'flex-end'}}>
						<TouchableOpacity onPress={()=>this._onNavigateComment('concept')}>
							<Image source={require('../Images/circle_plus.png')} style={styles.reviewIcon}/>
						</TouchableOpacity>
					</Col>
				</Row>
				<Row size={2}><Text>Whitepaper</Text></Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Col size={9} containerStyle={styles.colWrapStyle}>
						<Slider maximumValue={5} step={0.1} value={data.whitepaper} onValueChange={(value) => this._onChangeValue(value,'whitepaper')}/>
					</Col>
					<Col size={1} containerStyle={{alignItems:'flex-end'}}>
						<TouchableOpacity onPress={()=>this._onNavigateComment('whitepaper')}>
							<Image source={require('../Images/circle_plus.png')} style={styles.reviewIcon}/>
						</TouchableOpacity>
					</Col>
				</Row>
				<Row size={2}><Text>Team</Text></Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Col size={9} containerStyle={styles.colWrapStyle}>
						<Slider maximumValue={5} step={0.1} value={data.team} onValueChange={(value) => this._onChangeValue(value,'team')} />
					</Col>
					<Col size={1} containerStyle={{alignItems:'flex-end'}}>
						<TouchableOpacity onPress={()=>this._onNavigateComment('team')}>
							<Image source={require('../Images/circle_plus.png')} style={styles.reviewIcon}/>
						</TouchableOpacity>
					</Col>
				</Row>
				<Row size={2}><Text>Token Distribution</Text></Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Col size={9} containerStyle={styles.colWrapStyle}>
						<Slider maximumValue={5} step={0.1} value={data.tokendist} onValueChange={(value) => this._onChangeValue(value,'tokendist')} />
					</Col>
					<Col size={1} containerStyle={{alignItems:'flex-end'}}>
						<TouchableOpacity onPress={()=>this._onNavigateComment('tokendist')}>	
							<Image source={require('../Images/circle_plus.png')} style={styles.reviewIcon}/>
						</TouchableOpacity>
					</Col>
				</Row>
				<Row size={2}><Text>Competition</Text></Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Col size={9} containerStyle={styles.colWrapStyle}>
						<Slider maximumValue={5} step={0.1} value={data.competition} onValueChange={(value) => this._onChangeValue(value,'competition')} />
					</Col>
					<Col size={1} containerStyle={{alignItems:'flex-end'}}>
						<TouchableOpacity onPress={()=>this._onNavigateComment('competition')}>	
							<Image source={require('../Images/circle_plus.png')} style={styles.reviewIcon}/>
						</TouchableOpacity>
					</Col>
				</Row>
				<Row size={2}><Text>Working Prototype</Text></Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Col size={9} containerStyle={styles.colWrapStyle}>
						<Slider maximumValue={5} step={0.1} value={data.working} onValueChange={(value) => this._onChangeValue(value,'working')} />
					</Col>
					<Col size={1} containerStyle={{alignItems:'flex-end'}}>
						<TouchableOpacity onPress={()=>this._onNavigateComment('working')}>	
							<Image source={require('../Images/circle_plus.png')} style={styles.reviewIcon}/>
						</TouchableOpacity>
					</Col>
				</Row>
				<Row><Text>Ease of funding</Text></Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Col size={9} containerStyle={styles.colWrapStyle}>
						<Slider maximumValue={5} step={0.1} value={data.easeof} onValueChange={(value) => this._onChangeValue(value,'easeof')} />
					</Col>
					<Col size={1} containerStyle={{alignItems:'flex-end'}}>
						<TouchableOpacity onPress={()=>this._onNavigateComment('easeof')}>	
							<Image source={require('../Images/circle_plus.png')} style={styles.reviewIcon}/>
						</TouchableOpacity>
					</Col>
				</Row>
				<Row><Text>Escrow</Text></Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Col size={9} containerStyle={styles.colWrapStyle}>
						<Slider maximumValue={5} step={0.1} value={data.escrow} onValueChange={(value) => this._onChangeValue(value,'escrow')} />
					</Col>
					<Col size={1} containerStyle={{alignItems:'flex-end'}}>
						<TouchableOpacity onPress={()=>this._onNavigateComment('escrow')}>
							<Image source={require('../Images/circle_plus.png')} style={styles.reviewIcon}/>
						</TouchableOpacity>
					</Col>
				</Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Text style={{fontSize:50}}>{this.state.averageScore}</Text>
				</Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Text style={{marginBottom:20}}>Average score</Text>
				</Row>
				<Row containerStyle={{alignItems:'center', justifyContent:'center'}}>
					<Col size={1}>
					{						
						this.state.loading?	(<ActivityIndicator size='small' animating={true}/>):(<Button title='SUBMIT RATIG AND REVIEW' onPress={()=>this._submitIcoAndReview()}/>)
					}
					</Col>
				</Row>
			</Grid>
			</ScrollView>
		)
	}
	_onChangeValue(value,index){		
		let data=Object.assign({},this.state.data, {[index]:value})
		this.setState({data:data})
		let average=0;
		for (var prop in data) {
		  average+=data[prop]
		}
		this.setState({averageScore:Math.floor(average/8*10)/10});
	}

	_onNavigateComment(category){		
		const { navigate } = this.props.navigation;
		let icoID=this.props.navigation.state.params.icoId;
  		navigate('GiveComment',{icoId:icoID, category:category})
	}

	_submitIcoAndReview(){
		this.setState({loading:true})
		let icoID=this.props.navigation.state.params.icoId;
		submitIcoRatings(icoID, {...this.state.data,'loginType':this.props.login} )
			.then((response)=>{
				this.setState({loading:false});
				console.log(response); })
			.catch((err)=>{
				this.setState({loading:false});
				alert('failed send review data');
				console.log(err); }				
			);
	}
}
let styles={
	container:{
		flex:1,
		marginBottom:10
	},
	rowWrapStyle:{
		alignItems:'center',
		marginRight:5,
		justifyContent:'center'
	},
	reviewIcon:{
		width:28,
		height:28,
		resizeMode:'cover'
	},
}

function mapStateToProps (state) {
  return {
    login: state.appData.login
  }
}
export default connect(mapStateToProps)(GiveIcoRateScreen);