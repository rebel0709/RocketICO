import React,{Component} from 'react';
import {View,Image, Text, FlatList, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import IcoThumbnail from '../components/IcoItem';

import { connect } from 'react-redux'
import ActionSheet from 'react-native-actionsheet'

import {fetchMarkData} from '../reducers/actions';

const CANCEL_INDEX = 0

const sortOptions = [ 'Cancel','How many days to launch', 'How many days to closed', 'Rating', 'Review', 'Past ICOs']
const sortTitle = 'Sort by';

const moreTitle = 'More options';
const moreOptions = [ 'Logout','Submit an ICO', 'Donate to keep this project going', 'Report bugs', 'Contributor', 'Contact us']

class IcoListScreen extends Component{
    static navigationOptions = {      
      header:null
    }

  constructor(props) {
    super(props)
    this.state = {
      icos: this.props.appData.icos
    }
    
    this.showSortActionSheet = this.showSortActionSheet.bind(this)
    this.showMoreActionSheet = this.showMoreActionSheet.bind(this)    
  }

  showSortActionSheet() {
    this.SortActionSheet.show()
  }
  
  handleSortPress(i) {
    if(i==1){
      this.state.icos.sort(function(a,b){
        if(a.ico_state<b.ico_state) return -1;
        else if(a.ico_state==b.ico_state){
          return a.launch_days-b.launch_days;        
        }
        return 1;       
      })
    }else if(i==2){
      this.state.icos.sort(function(a,b){
        if(a.ico_state<b.ico_state) return -1;
        else if(a.ico_state==b.ico_state){
          return a.remain_days-b.remain_days;        
        }
        return 1;       
      })
    }else if(i==3){
      this.state.icos.sort(function(a,b){
        if(a.ico_state<b.ico_state) return -1;
        else if(a.ico_state==b.ico_state){
          return a.reviewd-b.reviewd;
        }
        return 1;       
      })
    }
    this.forceUpdate();
  }

  showMoreActionSheet() {
    this.MoreActionSheet.show()
  }

  handleMorePress(i) {
    console.log('More Press',i);
  }

  componentWillMount(){
      this.state.icos.sort(function(a,b){
        return a.ico_state-b.ico_state;      
      })      
  }

  render(){
		return(
			<View style={styles.containerStyle}>
        <View style={styles.header}>
          <Image source={require('../Images/rocket_landscape_copy.png')} style={{marginLeft:20}}/>
          <View style={{flexDirection:'row', position:'absolute', right:10}}>
            <Icon name='view-headline' containerStyle={{marginHorizontal:10}} onPress={this.showSortActionSheet}/>
            <Icon name='add' containerStyle={{marginHorizontal:10}}/>      
            <Icon name='more-horiz' containerStyle={{marginHorizontal:10}} onPress={this.showMoreActionSheet}/>
          </View>
        </View>
				<FlatList          
          data={this.state.icos}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => <IcoThumbnail item={item} onPress={()=>this._onPressItems(item)}/>}
          numColumns={2}
          horizontal={false}
          columnWrapperStyle={{width:5}}
        />
        <ActionSheet
          ref={o => this.SortActionSheet = o}
          title={sortTitle}
          options={sortOptions}
          cancelButtonIndex={CANCEL_INDEX}          
          onPress={(idx)=>this.handleSortPress(idx)} />

        <ActionSheet
          ref={o => this.MoreActionSheet = o}
          title={moreTitle}
          options={moreOptions}
          cancelButtonIndex={CANCEL_INDEX}          
          onPress={this.handleMorePress} />
			</View>
		)
	}

  _onPressItems(item){    
    this.props.fetchIcoMarks(item);
  }
}

let styles={
  header:{
    width:'100%', height:60, flexDirection:'row', alignItems:'center', backgroundColor:'white'
  },
  containerStyle:{
    flex:1, justifyContent:'center', paddingTop:20
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchIcoMarks: (anIco) => dispatch(fetchMarkData(anIco))
  }
}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IcoListScreen)