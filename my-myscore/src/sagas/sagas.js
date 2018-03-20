import { fork } from 'redux-saga/effects';
import LeagueTableSaga from './LeagueTable/saga';
import teamInfoSaga from './TeamInfo/saga';

const sagas = [
  ...LeagueTableSaga,
  ...teamInfoSaga
];

export default function* root() {
  yield sagas.map(saga => fork(saga));
}