import React,{Component} from 'react';
import {Grid, Row, Col, Slider, Button} from 'react-native-elements';
import {View, Dimensions, Image, ScrollView,Text} from 'react-native';
const {width, height}= Dimensions.get('window');

import {Button} from 'react-native-elements';

class IcoCategoryMarks extends Component{
	render(){
		let marks=this.props.content;
		let {content}= marks;
		return(
			<Grid containerStyle={{paddingLeft:10, width:'100%'}}>
				<Row size={2}><Text>Concept</Text></Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Col size={6} containerStyle={styles.colWrapStyle}>
						<Slider disabled value={data.concept} maxiumValue={5} step={0.1}/>
					</Col>
					<Col size={1} containerStyle={styles.colWrapStyleRight}><Image source={require('../Images/comment.png')} style={styles.commentIcon}/></Col>
				</Row>
				<Row size={2}><Text>Whitepaper</Text></Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Col size={6} containerStyle={styles.colWrapStyle}><Slider value={content.whitepaper} disabled/></Col>
					<Col size={1} containerStyle={styles.colWrapStyleRight}><Image source={require('../Images/comment.png')} style={styles.commentIcon}/></Col>
				</Row>
				<Row size={2}><Text>Team</Text></Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Col size={6} containerStyle={styles.colWrapStyle}><Slider value={0.7} disabled/></Col>
					<Col size={1} containerStyle={styles.colWrapStyle}><Image source={require('../Images/comment.png')} style={styles.commentIcon}/></Col>
				</Row>
				<Row size={2}><Text>Token Distribution</Text></Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Col size={6} containerStyle={styles.colWrapStyle}><Slider value={0.7} disabled/></Col>
					<Col size={1} containerStyle={styles.colWrapStyle}><Image source={require('../Images/comment.png')} style={styles.commentIcon}/></Col>
				</Row>
				<Row size={2}><Text>Competition</Text></Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Col size={6} containerStyle={styles.colWrapStyle}><Slider value={0.7} disabled /></Col>
					<Col size={1} containerStyle={styles.colWrapStyle}><Image source={require('../Images/comment.png')} style={styles.commentIcon}/></Col>
				</Row>
				<Row size={2}><Text>Working</Text></Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Col size={6} containerStyle={styles.colWrapStyle}><Slider value={0.7} disabled/></Col>
					<Col size={1} containerStyle={styles.colWrapStyle}><Image source={require('../Images/comment.png')} style={styles.commentIcon}/></Col>
				</Row>
				<Row><Text>Ease of</Text></Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Col size={6} containerStyle={styles.colWrapStyle}><Slider value={0.7} disabled/></Col>
					<Col size={1} containerStyle={styles.colWrapStyle}><Image source={require('../Images/comment.png')} style={styles.commentIcon}/></Col>
				</Row>
				<Row><Text>Escrow</Text></Row>
				<Row containerStyle={styles.rowWrapStyle}>
					<Col size={6} containerStyle={styles.colWrapStyle}><Slider value={0.7} disabled/></Col>
					<Col size={1} containerStyle={styles.colWrapStyle}><Image source={require('../Images/comment.png')} style={styles.commentIcon}/></Col>
				</Row>
				<Row containerStyle={{alignItems:'center', justifyContent:'center'}}>
					<Button title='Rate and review ICO' />
				</Row>						
			</Grid>	
			)		
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
	/*rowWrapStyleLeft:{
		alignItems:'flex-end',
		marginRight:5,
		justifyContent:'center'				
	},
	rowWrapStyleRight:{
		alignItems:'flex-start',
		marginRight:5,
		justifyContent:'center'				
	},*/
	colWrapStyle:{
		marginHorizontal:6
	},
	colWrapStyleLeft:{
		marginHorizontal:6,
		alignItems:'flex-end'
	},
	colWrapStyleRight:{
		marginHorizontal:6,
		alignItems:'flex-start'
	}
}
