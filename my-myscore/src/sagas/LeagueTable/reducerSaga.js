import * as actionsTypes from './actionsTypes';

let initialState = {
  table: [],
  league: 0,
  leagueName: '',
  isFetching: true,
  didInvalidate: false,
};

const leagueTable = (state = initialState, action)=>{
  switch (action.type){
    case actionsTypes.FETCHING_REQUEST:
      return{
        ...state,
        league: action.league,
        leagueName: action.leagueName,
        isFetching: true,
        didInvalidate: false,
      }
    case actionsTypes.RECEIVE_LEAGUETABLE_SUCCESS:
      return{
        ...state,
        table: action.table,
        isFetching: false,
        didInvalidate: false,
      };

    case actionsTypes.RECEIVE_LEAGUETABLE_FAIL:
      return{
        ...state,
        isFetching: false,
        didInvalidate: true,
      };
    default:
      return state;
  }
};

export default leagueTable;