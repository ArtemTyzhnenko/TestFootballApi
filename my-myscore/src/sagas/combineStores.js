import {combineReducers} from 'redux';
import leagueTable from './LeagueTable/reducerSaga';
import teamInfo from './TeamInfo/reducerSaga';

export default combineReducers({leagueTable, teamInfo});

    