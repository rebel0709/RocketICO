import {getAllIcos,fetchICOMarks} from './api';
import {FETCHING_ICOS, FETCHED_ICOS, FETCHED_FAILED,FETCHING_ICO_MARKS,FETCHED_ICO_MARKS} from './constants';

export function fetchData(){  
  return (dispatch) => {
    dispatch(getIco())
    getAllIcos()
      .then((data) => {        
        dispatch(getIcosSuccess(data))
      })
      .catch(
        (err) => dispatch(getIcoFailure())
        )
  }
}

export function getIco() {
  return {
    type: FETCHING_ICOS
  }
}

export function getIcoFailure() {
  return {
    type: FETCHED_FAILED
  }
}

export function getIcosSuccess(data) {
  return {
    type: FETCHED_ICOS,
    data
  }
}

////////////////ICO Mark ACTIONS////////////////////
export function getIcoMarks(data) {
  return {
    type: FETCHING_ICO_MARKS,
    data    
  }
}

export function getIcosMarkSuccess(data) {  
  return {
    type: FETCHED_ICO_MARKS,
    data
  }
}

export function getFailure(err) {
  console.log(err)
  return {
    type: FETCHED_FAILED
  }
}

export function fetchMarkData(anIco){  
  return (dispatch) => {
    dispatch(getIcoMarks(anIco))
    fetchICOMarks(anIco.id)
      .then((data) => {
        const param={...data.data, item:anIco}
        dispatch(getIcosMarkSuccess(param))
      })
      .catch(
        (err) => dispatch(getFailure(err))
      )
  }
}