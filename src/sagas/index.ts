import { all, takeEvery } from 'redux-saga/effects';
import { appActions } from '../actions/content';
import { ActionTypes } from '../actions/types';
import { appApi } from '../apis/content';
import saga from './content';

const appSaga = saga(appActions, appApi);

export default function* rootSaga(): IterableIterator<any> {
  yield all([
    takeEvery(`${ActionTypes.GET_ARTIST}_STARTED`, appSaga.getArtist),
    takeEvery(`${ActionTypes.GET_ARTIST_LIST}_STARTED`, appSaga.getArtists),
    takeEvery(`${ActionTypes.GET_GENRE}_STARTED`, appSaga.getGenre),
    takeEvery(`${ActionTypes.GET_GENRE_LIST}_STARTED`, appSaga.getGenres),
    takeEvery(`${ActionTypes.GET_SELECTION}_STARTED`, appSaga.getSelection),
    takeEvery(`${ActionTypes.GET_SELECTION_LIST}_STARTED`, appSaga.getSelections),
    takeEvery(`${ActionTypes.GET_SERIES}_STARTED`, appSaga.getSeries),
    takeEvery(`${ActionTypes.GET_SERIES_LIST}_STARTED`, appSaga.getSeriesList),
    takeEvery(`${ActionTypes.GET_WORK}_STARTED`, appSaga.getWork),
    takeEvery(`${ActionTypes.GET_WORK_LIST}_STARTED`, appSaga.getWorks),
    takeEvery(`${ActionTypes.GET_YEARBEST}_STARTED`, appSaga.getYearBest),
    takeEvery(`${ActionTypes.GET_YEARBEST_LIST}_STARTED`, appSaga.getYearBests),
  ]);
}
