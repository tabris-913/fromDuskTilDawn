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

export interface ContentSaga {
  getArtist: (action: Action<IArtistRequest>) => IterableIterator<any>;
  getGenre: (action: Action<IGenreRequest>) => IterableIterator<any>;
  getSelection: (action: Action<ISelectionRequest>) => IterableIterator<any>;
  getSeries: (action: Action<ISeriesRequest>) => IterableIterator<any>;
  getSeriesContent: (action: Action<ISeriesRequest>) => IterableIterator<any>;
  getWork: (action: Action<IWorkRequest>) => IterableIterator<any>;
  getYearBest: (action: Action<IYearBestRequest>) => IterableIterator<any>;
  getArtists: (action: Action<IArtistListRequest>) => IterableIterator<any>;
  getGenres: (action: Action<IGenreListRequest>) => IterableIterator<any>;
  getSelections: (action: Action<ISelectionListRequest>) => IterableIterator<any>;
  getSeriesList: (action: Action<ISeriesListRequest>) => IterableIterator<any>;
  getWorks: (action: Action<IWorkListRequest>) => IterableIterator<any>;
  getYearBests: (action: Action<IYearBestListRequest>) => IterableIterator<any>;

  prepareArtistPage: (action: Action<IArtistRequest>) => IterableIterator<any>;
  prepareGenrePage: (action: Action<IPrepareGenrePageRequest>) => IterableIterator<any>;
  prepareSeriesPage: (action: Action<ISeriesRequest>) => IterableIterator<any>;
  prepareWorkPage: (action: Action<IWorkRequest>) => IterableIterator<any>;

  getTopTopic: (action: Action<IContentRequest>) => IterableIterator<any>;
}

const saga = (actions: ContentActions, apis: ContentApis) => ({
  getArtist: () =>
    function*(action: Action<IArtistRequest>): IterableIterator<any> {
      console.log('start get artist');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getArtist> = yield call(apis.getArtist, req);
      yield put(actions.getArtist.done({ params: req, result: res }));
    },
  getArtists: () =>
    function*(action: Action<IArtistListRequest>): IterableIterator<any> {
      console.log('start get artist list');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getArtists> = yield call(apis.getArtists, req);
      yield put(actions.getArtists.done({ params: req, result: res }));
    },
  getGenre: () =>
    function*(action: Action<IGenreRequest>): IterableIterator<any> {
      console.log('start get genre');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getGenre> = yield call(apis.getGenre, req);
      yield put(actions.getGenre.done({ params: req, result: res }));
    },
  getGenres: () =>
    function*(action: Action<IGenreListRequest>): IterableIterator<any> {
      console.log('start get genre list');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getGenres> = yield call(apis.getGenres, req);
      yield put(actions.getGenres.done({ params: req, result: res }));
    },
  getSelection: () =>
    function*(action: Action<ISelectionRequest>): IterableIterator<any> {
      console.log('start get selection');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getSelection> = yield call(apis.getSelection, req);
      yield put(actions.getSelection.done({ params: req, result: res }));
    },
  getSelections: () =>
    function*(action: Action<ISelectionListRequest>): IterableIterator<any> {
      console.log('start get selection list');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getSelections> = yield call(apis.getSelections, req);
      yield put(actions.getSelections.done({ params: req, result: res }));
    },
  getSeriesContent: () =>
    function*(action: Action<ISeriesRequest>): IterableIterator<any> {
      console.log('start get series content');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getSeriesContent> = yield call(apis.getSeriesContent, req);
      yield put(actions.getSeriesContent.done({ params: req, result: res }));
    },
  getSeries: () =>
    function*(action: Action<ISeriesRequest>): IterableIterator<any> {
      console.log('start get series');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getSeries> = yield call(apis.getSeries, req);
      yield put(actions.getSeries.done({ params: req, result: res }));
    },
  getSeriesList: () =>
    function*(action: Action<ISeriesListRequest>): IterableIterator<any> {
      console.log('start get series list');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getSeriesList> = yield call(apis.getSeriesList, req);
      yield put(actions.getSeriesList.done({ params: req, result: res }));
    },
  getWork: () =>
    function*(action: Action<IWorkRequest>): IterableIterator<any> {
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
    function*(action: Action<IWorkListRequest>): IterableIterator<any> {
      console.log('start get work list');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getWorks> = yield call(apis.getWorks, req);
      yield put(actions.getWorks.done({ params: req, result: res }));
    },
  getYearBest: () =>
    function*(action: Action<IYearBestRequest>): IterableIterator<any> {
      console.log('start get year best');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getYearBest> = yield call(apis.getYearBest, req);
      yield put(actions.getYearBest.done({ params: req, result: res }));
    },
  getYearBests: () =>
    function*(action: Action<IYearBestListRequest>): IterableIterator<any> {
      console.log('start get year best lists');
      const req = action.payload;
      const res: ReturnedType<typeof apis.getYearBests> = yield call(apis.getYearBests, req);
      yield put(actions.getYearBests.done({ params: req, result: res }));
    },
  prepareArtistPage: () =>
    function*(action: Action<IArtistRequest>): IterableIterator<any> {
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
    function*(action: Action<IPrepareGenrePageRequest>): IterableIterator<any> {
      console.log('start preparing genre page');
      const req = action.payload;
      const artistList: ReturnedType<typeof apis.getArtists> = yield call(apis.getArtists, {});
      const genre: ReturnedType<typeof apis.getGenre> = yield call(apis.getGenre, req);
      yield put(
        actions.prepareGenrePage.done({ params: req, result: { artist: { list: artistList }, genre: { doc: genre } } })
      );
    },
  prepareSeriesPage: () =>
    function*(action: Action<ISeriesRequest>): IterableIterator<any> {
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
    function*(action: Action<IWorkRequest>): IterableIterator<any> {
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
    function*(action: Action<IContentRequest>): IterableIterator<any> {
      console.log('start getting topic');
      const req = action.payload;
      const topic: ReturnedType<typeof apis.getTopTopic> = yield call(apis.getTopTopic);
      yield put(actions.topTopic.done({ params: req, result: topic }));
    },
});

export default saga;
