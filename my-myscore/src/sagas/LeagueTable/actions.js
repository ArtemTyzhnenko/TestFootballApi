import * as actionTypes from './actionsTypes';

export const receiveLeagueTableSuccess = (table) => ({
  type: actionTypes.RECEIVE_LEAGUETABLE_SUCCESS,
  table,
});

export const receiveLeagueTableFail = (leagueName) => ({
  type: actionTypes.RECEIVE_LEAGUETABLE_FAIL,
});

export const fetchingRequest = (league, leagueName) => ({
  type: actionTypes.FETCHING_REQUEST,
  league,
  leagueName,
});

export const fetchleagueTable = (league) => {
  const myHeaders = new Headers();
  myHeaders.append('X-Auth-Token', '3a81a675c33e43eb82577802f712e2ea');
  const myInit = {
    method: 'GET',
    headers: myHeaders
  };

  return fetch(`http://api.football-data.org/v1/competitions/${league}/leagueTable`, myInit)
    .then(res => res.json())
    .then(res => res.standing.map((item) => (
        {
          teamInfoLink: item._links.team.href,
          position: item.position,
          teamName: item.teamName,
          crestURI: item.crestURI,
          points: item.points,
          playedGames: item.playedGames,
          goals: item.goals,
          goalsAgainst: item.goalsAgainst,
        })
    ))
    .catch(error => alert.log(error));
};