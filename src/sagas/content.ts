import { call, put } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import { ContentActions } from '../actions/content';
import { ContentApis } from '../apis/content';
import { IArtistRequest, IArtistsRequest } from '../models/request/ArtistRequest';
import { IGenreRequest, IGenresRequest } from '../models/request/GenreRequest';
import { ISelectionRequest, ISelectionsRequest } from '../models/request/SelectionRequest';
import { ISeriesListRequest, ISeriesRequest } from '../models/request/SeriesRequest';
import { IWorkRequest, IWorksRequest } from '../models/request/WorkRequest';
import { IYearBestRequest, IYearBestsRequest } from '../models/request/YearBestRequest';
import { ReturnedType } from '../utils/MiscUtils';

export interface ContentSaga {
  getArtist: (action: Action<IArtistRequest>) => IterableIterator<any>;
  getGenre: (action: Action<IGenreRequest>) => IterableIterator<any>;
  getSelection: (action: Action<ISelectionRequest>) => IterableIterator<any>;
  getSeries: (action: Action<ISeriesRequest>) => IterableIterator<any>;
  getWork: (action: Action<IWorkRequest>) => IterableIterator<any>;
  getYearBest: (action: Action<IYearBestRequest>) => IterableIterator<any>;
  getArtists: (action: Action<IArtistsRequest>) => IterableIterator<any>;
  getGenres: (action: Action<IGenresRequest>) => IterableIterator<any>;
  getSelections: (action: Action<ISelectionsRequest>) => IterableIterator<any>;
  getSeriesList: (action: Action<ISeriesListRequest>) => IterableIterator<any>;
  getWorks: (action: Action<IWorksRequest>) => IterableIterator<any>;
  getYearBests: (action: Action<IYearBestsRequest>) => IterableIterator<any>;
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
    function*(action: Action<IArtistsRequest>): IterableIterator<any> {
      console.log();
      const req = action.payload;
      const res: ReturnedType<typeof apis.getArtists> = yield call(apis.getArtists, req);
      yield put(actions.getArtists.done({ params: req, result: res }));
    },
  getGenre: () =>
    function*(action: Action<IGenreRequest>): IterableIterator<any> {
      console.log();
    },
  getGenres: () =>
    function*(action: Action<IGenresRequest>): IterableIterator<any> {
      console.log();
    },
  getSelection: () =>
    function*(action: Action<ISelectionRequest>): IterableIterator<any> {
      console.log();
    },
  getSelections: () =>
    function*(action: Action<ISelectionsRequest>): IterableIterator<any> {
      console.log();
    },
  getSeries: () =>
    function*(action: Action<ISeriesRequest>): IterableIterator<any> {
      console.log();
    },
  getSeriesList: () =>
    function*(action: Action<ISeriesListRequest>): IterableIterator<any> {
      console.log();
    },
  getWork: () =>
    function*(action: Action<IWorkRequest>): IterableIterator<any> {
      console.log();
    },
  getWorks: () =>
    function*(action: Action<IWorksRequest>): IterableIterator<any> {
      console.log();
    },
  getYearBest: () =>
    function*(action: Action<IYearBestRequest>): IterableIterator<any> {
      console.log();
    },
  getYearBests: () =>
    function*(action: Action<IYearBestsRequest>): IterableIterator<any> {
      console.log();
    },
});

export default saga;
