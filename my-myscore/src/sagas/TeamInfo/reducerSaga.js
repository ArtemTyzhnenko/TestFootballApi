import * as actionsTypes from './actionsTypes';

let initialState = {
  games: [],
  teamName: '',
  teamLogo: '',
  url: '',
  isFetching: true,
  didInvalidate: false,
};

const teamInfo = (state = initialState, action)=>{
  switch (action.type){
    case actionsTypes.FETCHING_TEAMINFO_REQUEST:
      return{
        ...state,
        teamName: action.teamName,
        teamLogo: action.teamLogo,
        url: action.url,
      };

    case actionsTypes.RECEIVE_TEAMINFO_SUCCESS:
      return{
        ...state,
        games: action.teamInfo,
        isFetching: false,
        didInvalidate: false,
      };
    
    case actionsTypes.RECEIVE_TEAMINFO_FAIL:
      return{
        ...state,
        isFetching: false,
        didInvalidate: true,
      };
    default:
      return state;
  }
};

export default teamInfo;