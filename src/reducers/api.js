import axios from 'axios';
var qs=require('qs');

const BASE_URL = 'http://www.rocketico.com/rocketico/index.php/Api';

const GET_ALL_ICOS = `${BASE_URL}/icos`;
const GET_ICO_MARK = `${BASE_URL}/getIcosMarks`;
const SUBMIT_ICO_RATES=`${BASE_URL}/rates`;
const SUBMIT_ICO_COMMENTS=`${BASE_URL}/commentsByCategory`;

export async function getAllIcos(){
	return await axios.post(GET_ALL_ICOS);
}

export async function fetchICOMarks(icoID){
	return await axios.post(GET_ICO_MARK, qs.stringify({'ico_id': icoID }))
}

export async function submitIcoRatings(icoID, data){
	let api=`${SUBMIT_ICO_RATES}/`+icoID;
	const response = await axios.post(api,qs.stringify(data));
	//const parsedResponse = await response.json();	
	//return parseResponse;
	return response.data;
}

export async function submitIcoComment(icoID,category,data){
	let api=`${SUBMIT_ICO_COMMENTS}/`;
	const response = await axios.post(api,qs.stringify({'content':data,'icoID':icoID, 'subject':category}));
	//const parsedResponse = await response.json();	
	//return parseResponse;
	return response.data;	
}