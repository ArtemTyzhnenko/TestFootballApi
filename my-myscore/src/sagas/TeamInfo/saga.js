import { takeEvery, put, call, select } from 'redux-saga/effects';
import {receiveTeamInfoSuccess,
  receiveTeamInfoFail,
  fetchTeamInfo}  from './actions'


function* TeamInfo () {
  try {
    const url = yield select(({teamInfo}) => teamInfo.url);
    const teamInfo = yield call(fetchTeamInfo, url);
    yield  put(receiveTeamInfoSuccess(teamInfo))
  } catch (e){
    yield  put(receiveTeamInfoFail)
  }
}


function* teamInfoSaga() {
  console.log("Starting up the root saga!");
  yield takeEvery('FETCHING_TEAMINFO_REQUEST', TeamInfo)
}

export default [teamInfoSaga];
