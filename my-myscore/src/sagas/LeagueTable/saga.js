import { takeEvery, put, call, select } from 'redux-saga/effects';
import {fetchleagueTable,
  receiveLeagueTableSuccess,
  receiveLeagueTableFail}  from './actions'


function* fetchLeagueTable () {
  try {
    const league = yield select(({leagueTable}) => leagueTable.league);
    const leagueTable = yield call(fetchleagueTable, league);
    yield  put(receiveLeagueTableSuccess(leagueTable));
  } catch (e){
    yield  put(receiveLeagueTableFail)
  }
}


function* LeagueTableSaga() {
  console.log("Starting up the root saga!");
  yield takeEvery('FETCHING_REQUEST', fetchLeagueTable)
}

export default [LeagueTableSaga];