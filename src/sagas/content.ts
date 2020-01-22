import { call, put } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import { ContentActions } from '../actions/content';
import { ContentApis } from '../apis/content';
import { ArtistUid, WorkUid } from '../models/Id';
import IArtistRequest, { IArtistListRequest } from '../models/requests/ArtistRequest';
import { IContentRequest } from '../models/requests/ContentRequest';
import IGenreRequest, { IGenreListRequest, IPrepareGenrePageRequest } from '../models/requests/GenreRequest';
import ISelectionRequest, { ISelectionListRequest } from '../models/requests/SelectionRequest';
import ISeriesRequest, { ISeriesListRequest } from '../models/requests/SeriesRequest';
import IWorkRequest, { IWorkListRequest } from '../models/requests/WorkRequest';
import IYearBestRequest, { IYearBestListRequest } from '../models/requests/YearBestRequest';
import { ReturnedType } from '../utils/MiscUtils';
import { SagaIterator } from 'redux-saga';

export interface ContentSaga {
  getArtist: (action: Action<IArtistRequest>) => SagaIterator;
  getGenre: (action: Action<IGenreRequest>) => SagaIterator;
  getSelection: (action: Action<ISelectionRequest>) => SagaIterator;
  getSeries: (action: Action<ISeriesRequest>) => SagaIterator;
  getSeriesContent: (action: Action<ISeriesRequest>) => SagaIterator;
  getWork: (action: Action<IWorkRequest>) => SagaIterator;
  getYearBest: (action: Action<IYearBestRequest>) => SagaIterator;
  getArtists: (action: Action<IArtistListRequest>) => SagaIterator;
  getGenres: (action: Action<IGenreListRequest>) => SagaIterator;
  getSelections: (action: Action<ISelectionListRequest>) => SagaIterator;
  getSeriesList: (action: Action<ISeriesListRequest>) => SagaIterator;
  getWorks: (action: Action<IWorkListRequest>) => SagaIterator;
  getYearBests: (action: Action<IYearBestListRequest>) => SagaIterator;

  prepareArtistPage: (action: Action<IArtistRequest>) => SagaIterator;
  prepareGenrePage: (action: Action<IPrepareGenrePageRequest>) => SagaIterator;
  prepareSeriesPage: (action: Action<ISeriesRequest>) => SagaIterator;
  prepareWorkPage: (action: Action<IWorkRequest>) => SagaIterator;

  getTopTopic: (action: Action<IContentRequest>) => SagaIterator;
}

const saga = (actions: ContentActions, apis: ContentApis) => ({
  getArtist: () =>
    function*(action: Action<IArtistRequest>): SagaIterator<any> {
      console.log('start get artist');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getArtist> = yield call(apis.getArtist, req);
      yield put(actions.getArtist.done({ params: req, result: res }));
    },
  getArtists: () =>
    function*(action: Action<IArtistListRequest>): SagaIterator {
      console.log('start get artist list');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getArtists> = yield call(apis.getArtists, req);
      yield put(actions.getArtists.done({ params: req, result: res }));
    },
  getGenre: () =>
    function*(action: Action<IGenreRequest>): SagaIterator {
      console.log('start get genre');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getGenre> = yield call(apis.getGenre, req);
      yield put(actions.getGenre.done({ params: req, result: res }));
    },
  getGenres: () =>
    function*(action: Action<IGenreListRequest>): SagaIterator {
      console.log('start get genre list');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getGenres> = yield call(apis.getGenres, req);
      yield put(actions.getGenres.done({ params: req, result: res }));
    },
  getSelection: () =>
    function*(action: Action<ISelectionRequest>): SagaIterator {
      console.log('start get selection');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getSelection> = yield call(apis.getSelection, req);
      yield put(actions.getSelection.done({ params: req, result: res }));
    },
  getSelections: () =>
    function*(action: Action<ISelectionListRequest>): SagaIterator {
      console.log('start get selection list');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getSelections> = yield call(apis.getSelections, req);
      yield put(actions.getSelections.done({ params: req, result: res }));
    },
  getSeriesContent: () =>
    function*(action: Action<ISeriesRequest>): SagaIterator {
      console.log('start get series content');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getSeriesContent> = yield call(apis.getSeriesContent, req);
      yield put(actions.getSeriesContent.done({ params: req, result: res }));
    },
  getSeries: () =>
    function*(action: Action<ISeriesRequest>): SagaIterator {
      console.log('start get series');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getSeries> = yield call(apis.getSeries, req);
      yield put(actions.getSeries.done({ params: req, result: res }));
    },
  getSeriesList: () =>
    function*(action: Action<ISeriesListRequest>): SagaIterator {
      console.log('start get series list');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getSeriesList> = yield call(apis.getSeriesList, req);
      yield put(actions.getSeriesList.done({ params: req, result: res }));
    },
  getWork: () =>
    function*(action: Action<IWorkRequest>): SagaIterator {
      console.log('start get work');
      const req = action.payload;
      // let res: ReturnedType<typeof apis.getWork>;
      // let throw_flag = true;
      // try {
      //   res = yield call(apis.getWork, req);
      // } catch (e) {
      //   if (req.artistUids) {
      //     for (const uid of req.artistUids) {
      //       try {
      //         res = yield call(apis.getWork, { ...req, artistUid: uid });
      //         console.log(res);
      //         throw_flag = false;
      //         break;
      //       } catch (e) {
      //         //
      //       }
      //     }
      //   }
      //   if (!throw_flag) throw e;
      // }
      const res: ReturnedType<typeof apis.getWork> = yield call(apis.getWork, req);
      yield put(actions.getWork.done({ params: req, result: res! }));
    },
  getWorks: () =>
    function*(action: Action<IWorkListRequest>): SagaIterator {
      console.log('start get work list');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getWorks> = yield call(apis.getWorks, req);
      yield put(actions.getWorks.done({ params: req, result: res }));
    },
  getYearBest: () =>
    function*(action: Action<IYearBestRequest>): SagaIterator {
      console.log('start get year best');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getYearBest> = yield call(apis.getYearBest, req);
      yield put(actions.getYearBest.done({ params: req, result: res }));
    },
  getYearBests: () =>
    function*(action: Action<IYearBestListRequest>): SagaIterator {
      console.log('start get year best lists');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getYearBests> = yield call(apis.getYearBests, req);
      yield put(actions.getYearBests.done({ params: req, result: res }));
    },
  prepareArtistPage: () =>
    function*(action: Action<IArtistRequest>): SagaIterator {
      console.log('start preparing artist page');
      const req = action.payload;
      const artistDoc: ReturnedType<typeof apis.getArtist> = yield call(apis.getArtist, req);
      const artistList: ReturnedType<typeof apis.getArtists> = yield call(apis.getArtists, req);
      const work: ReturnedType<typeof apis.getWorks> = yield call(apis.getWorks, req);
      yield put(
        actions.prepareArtistPage.done({
          params: req,
          result: { artist: { doc: artistDoc, list: artistList }, work: { list: work } },
        })
      );
    },
  prepareGenrePage: () =>
    function*(action: Action<IPrepareGenrePageRequest>): SagaIterator {
      console.log('start preparing genre page');
      const req = action.payload;
      const artistList: ReturnedType<typeof apis.getArtists> = yield call(apis.getArtists, {});
      const genre: ReturnedType<typeof apis.getGenre> = yield call(apis.getGenre, req);
      yield put(
        actions.prepareGenrePage.done({ params: req, result: { artist: { list: artistList }, genre: { doc: genre } } })
      );
    },
  prepareSeriesPage: () =>
    function*(action: Action<ISeriesRequest>): SagaIterator {
      console.log('start preparing series content page');
      const req = action.payload;
      const content: ReturnedType<typeof apis.getSeriesContent> = yield call(apis.getSeriesContent, req);
      const artists: ArtistUid[] = [req.seriesUid];
      const uids: WorkUid[] = [];
      content.work_list.map(w => {
        if (!uids.includes(w.uid)) uids.push(w.uid);
        for (const a of w.artist || []) {
          if (!artists.includes(a)) artists.push(a);
        }
      });
      const doc: ReturnedType<typeof apis.getSeries> = yield call(apis.getSeries, req);
      const works = {};
      for (const a of artists) {
        try {
          const res: ReturnedType<typeof apis.getWorks> = yield call(apis.getWorks, { artistUid: a });
          console.log(res);
          for (const key of ['albums', 'singles', 'others']) {
            for (const uid of Object.keys(res[key])) {
              if (uids.includes(uid)) works[uid] = res[key][uid];
            }
          }
        } catch (e) {
          //
        }
      }
      yield put(
        actions.prepareSeriesPage.done({
          params: req,
          result: { series: { doc: doc, content: content, works: works } },
        })
      );
    },
  prepareWorkPage: () =>
    function*(action: Action<IWorkRequest>): SagaIterator {
      console.log('start preparing work page');
      const req = action.payload;
      const work: ReturnedType<typeof apis.getWork> = yield call(apis.getWork, req);
      const genre: ReturnedType<typeof apis.getGenres> = yield call(apis.getGenres, req);
      const artist: ReturnedType<typeof apis.getArtists> = yield call(apis.getArtists, req);
      yield put(
        actions.prepareWorkPage.done({
          params: req,
          result: { work: { doc: work }, artist: { list: artist }, genre: { list: genre } },
        })
      );
    },
  getTopTopic: () =>
    function*(action: Action<IContentRequest>): SagaIterator {
      console.log('start getting topic');
      const req = action.payload;
      const topic: ReturnedType<typeof apis.getTopTopic> = yield call(apis.getTopTopic);
      yield put(actions.topTopic.done({ params: req, result: topic }));
    },
});

export default saga;
