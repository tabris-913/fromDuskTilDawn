import { call, put } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import { ContentActions } from '../actions/content';
import { ContentApis } from '../apis/content';
import IArtistRequest, { IArtistListRequest } from '../models/requests/ArtistRequest';
import IGenreRequest, { IGenreListRequest } from '../models/requests/GenreRequest';
import ISelectionRequest, { ISelectionListRequest } from '../models/requests/SelectionRequest';
import ISeriesRequest, { ISeriesListRequest } from '../models/requests/SeriesRequest';
import IWorkRequest, { IWorkListRequest } from '../models/requests/WorkRequest';
import IYearBestRequest, { IYearBestListRequest } from '../models/requests/YearBestRequest';
import { ReturnedType } from '../utils/MiscUtils';

export interface ContentSaga {
  getArtist: (action: Action<IArtistRequest>) => IterableIterator<any>;
  getGenre: (action: Action<IGenreRequest>) => IterableIterator<any>;
  getSelection: (action: Action<ISelectionRequest>) => IterableIterator<any>;
  getSeries: (action: Action<ISeriesRequest>) => IterableIterator<any>;
  getWork: (action: Action<IWorkRequest>) => IterableIterator<any>;
  getYearBest: (action: Action<IYearBestRequest>) => IterableIterator<any>;
  getArtists: (action: Action<IArtistListRequest>) => IterableIterator<any>;
  getGenres: (action: Action<IGenreListRequest>) => IterableIterator<any>;
  getSelections: (action: Action<ISelectionListRequest>) => IterableIterator<any>;
  getSeriesList: (action: Action<ISeriesListRequest>) => IterableIterator<any>;
  getWorks: (action: Action<IWorkListRequest>) => IterableIterator<any>;
  getYearBests: (action: Action<IYearBestListRequest>) => IterableIterator<any>;
}

const saga = (actions: ContentActions, apis: ContentApis) => ({
  getArtist: () =>
    function*(action: Action<IArtistRequest>): IterableIterator<any> {
      console.log();
      const req = action.payload;
      const res: ReturnedType<typeof apis.getArtist> = yield call(apis.getArtist, req);
      yield put(actions.getArtist.done({ params: req, result: res }));
    },
  getArtists: () =>
    function*(action: Action<IArtistListRequest>): IterableIterator<any> {
      console.log();
      const req = action.payload;
      const res: ReturnedType<typeof apis.getArtists> = yield call(apis.getArtists, req);
      yield put(actions.getArtists.done({ params: req, result: res }));
    },
  getGenre: () =>
    function*(action: Action<IGenreRequest>): IterableIterator<any> {
      console.log();
      const req = action.payload;
      const res: ReturnedType<typeof apis.getGenre> = yield call(apis.getGenre, req);
      yield put(actions.getGenre.done({ params: req, result: res }));
    },
  getGenres: () =>
    function*(action: Action<IGenreListRequest>): IterableIterator<any> {
      console.log();
      const req = action.payload;
      const res: ReturnedType<typeof apis.getGenres> = yield call(apis.getGenres, req);
      yield put(actions.getGenres.done({ params: req, result: res }));
    },
  getSelection: () =>
    function*(action: Action<ISelectionRequest>): IterableIterator<any> {
      console.log();
      const req = action.payload;
      const res: ReturnedType<typeof apis.getSelection> = yield call(apis.getSelection, req);
      yield put(actions.getSelection.done({ params: req, result: res }));
    },
  getSelections: () =>
    function*(action: Action<ISelectionListRequest>): IterableIterator<any> {
      console.log();
      const req = action.payload;
      const res: ReturnedType<typeof apis.getSelections> = yield call(apis.getSelections, req);
      yield put(actions.getSelections.done({ params: req, result: res }));
    },
  getSeries: () =>
    function*(action: Action<ISeriesRequest>): IterableIterator<any> {
      console.log();
      const req = action.payload;
      const res: ReturnedType<typeof apis.getSeries> = yield call(apis.getSeries, req);
      yield put(actions.getSeries.done({ params: req, result: res }));
    },
  getSeriesList: () =>
    function*(action: Action<ISeriesListRequest>): IterableIterator<any> {
      console.log();
      const req = action.payload;
      const res: ReturnedType<typeof apis.getSeriesList> = yield call(apis.getSeriesList, req);
      yield put(actions.getSeriesList.done({ params: req, result: res }));
    },
  getWork: () =>
    function*(action: Action<IWorkRequest>): IterableIterator<any> {
      console.log();
      const req = action.payload;
      const res: ReturnedType<typeof apis.getWork> = yield call(apis.getWork, req);
      yield put(actions.getWork.done({ params: req, result: res }));
    },
  getWorks: () =>
    function*(action: Action<IWorkListRequest>): IterableIterator<any> {
      console.log();
      const req = action.payload;
      const res: ReturnedType<typeof apis.getWorks> = yield call(apis.getWorks, req);
      yield put(actions.getWorks.done({ params: req, result: res }));
    },
  getYearBest: () =>
    function*(action: Action<IYearBestRequest>): IterableIterator<any> {
      console.log();
      const req = action.payload;
      const res: ReturnedType<typeof apis.getYearBest> = yield call(apis.getYearBest, req);
      yield put(actions.getYearBest.done({ params: req, result: res }));
    },
  getYearBests: () =>
    function*(action: Action<IYearBestListRequest>): IterableIterator<any> {
      console.log();
      const req = action.payload;
      const res: ReturnedType<typeof apis.getYearBests> = yield call(apis.getYearBests, req);
      yield put(actions.getYearBests.done({ params: req, result: res }));
    },
});

export default saga;
