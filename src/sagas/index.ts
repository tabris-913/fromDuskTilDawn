import { all, takeEvery } from 'redux-saga/effects';
import { appActions } from '../actions/content';
import { ActionTypes } from '../actions/types';
import { appApi } from '../apis/content';
import saga, { ContentSaga } from './content';

const sagas = saga(appActions, appApi);
const appSaga: ContentSaga = {
  getArtist: sagas.getArtist(),
  getArtists: sagas.getArtists(),
  getGenre: sagas.getGenre(),
  getGenres: sagas.getGenres(),
  getSelection: sagas.getSelection(),
  getSelections: sagas.getSelections(),
  getSeries: sagas.getSeries(),
  getSeriesContent: sagas.getSeriesContent(),
  getSeriesList: sagas.getSeriesList(),
  getWork: sagas.getWork(),
  getWorks: sagas.getWorks(),
  getYearBest: sagas.getYearBest(),
  getYearBests: sagas.getYearBests(),

  prepareGenrePage: sagas.prepareGenrePage(),
};

export default function* rootSaga(): IterableIterator<any> {
  yield all([
    takeEvery(`${ActionTypes.GET_ARTIST}_STARTED`, appSaga.getArtist),
    takeEvery(`${ActionTypes.GET_ARTIST_LIST}_STARTED`, appSaga.getArtists),
    takeEvery(`${ActionTypes.GET_GENRE}_STARTED`, appSaga.getGenre),
    takeEvery(`${ActionTypes.GET_GENRE_LIST}_STARTED`, appSaga.getGenres),
    takeEvery(`${ActionTypes.GET_SELECTION}_STARTED`, appSaga.getSelection),
    takeEvery(`${ActionTypes.GET_SELECTION_LIST}_STARTED`, appSaga.getSelections),
    takeEvery(`${ActionTypes.GET_SERIES}_STARTED`, appSaga.getSeries),
    takeEvery(`${ActionTypes.GET_SERIES_CONTENT}_STARTED`, appSaga.getSeriesContent),
    takeEvery(`${ActionTypes.GET_SERIES_LIST}_STARTED`, appSaga.getSeriesList),
    takeEvery(`${ActionTypes.GET_WORK}_STARTED`, appSaga.getWork),
    takeEvery(`${ActionTypes.GET_WORK_LIST}_STARTED`, appSaga.getWorks),
    takeEvery(`${ActionTypes.GET_YEARBEST}_STARTED`, appSaga.getYearBest),
    takeEvery(`${ActionTypes.GET_YEARBEST_LIST}_STARTED`, appSaga.getYearBests),

    takeEvery(`${ActionTypes.PREPARE_GENRE_PAGE}_STARTED`, appSaga.prepareGenrePage),
  ]);
}
