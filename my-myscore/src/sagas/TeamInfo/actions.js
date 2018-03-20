import * as actionTypes from './actionsTypes';

export const receiveTeamInfoSuccess = (teamInfo) => ({
  type: actionTypes.RECEIVE_TEAMINFO_SUCCESS,
  teamInfo,  
});

export const receiveTeamInfoFail = () => ({
  type: actionTypes.RECEIVE_TEAMINFO_FAIL
});

export const fetchingTeamInfoRequest = (url, teamName, teamLogo) =>({
  type: actionTypes.FETCHING_TEAMINFO_REQUEST,
  url,
  teamName,
  teamLogo,
});

export const fetchTeamInfo = (url) =>{
  const myHeaders = new Headers();
  myHeaders.append('X-Auth-Token', '3a81a675c33e43eb82577802f712e2ea');
  const myInit = {
    method: 'GET',
    headers: myHeaders
  };
  return fetch(`${url}/fixtures`, myInit)
    .then(res => res.json())
    .then(res => res.fixtures)
    .catch(error => console.log( error ));
};