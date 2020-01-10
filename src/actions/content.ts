import { actionCreatorFactory, AsyncActionCreators } from 'typescript-fsa';
import IArtist, { IArtistList, IArtistPage } from '../models/contents/artist';
import IGenre, { IGenreList, IGenrePage } from '../models/contents/genre';
import ISelection, { ISelectionList } from '../models/contents/selection';
import ISeries, { ISeriesContent, ISeriesList, ISeriesPage } from '../models/contents/series';
import { ITopTopic } from '../models/contents/top';
import IWork, { IWorkList, IWorkPage } from '../models/contents/work';
import IYearBest, { IYearBestList } from '../models/contents/yearBest';
import IArtistRequest, { IArtistListRequest } from '../models/requests/ArtistRequest';
import { IContentRequest } from '../models/requests/ContentRequest';
import IGenreRequest, { IGenreListRequest, IPrepareGenrePageRequest } from '../models/requests/GenreRequest';
import ISelectionRequest, { ISelectionListRequest } from '../models/requests/SelectionRequest';
import ISeriesRequest, { ISeriesListRequest } from '../models/requests/SeriesRequest';
import IWorkRequest, { IWorkListRequest } from '../models/requests/WorkRequest';
import IYearBestRequest, { IYearBestListRequest } from '../models/requests/YearBestRequest';
import { ActionTypes } from './types';

export interface ContentActions {
  getArtist: AsyncActionCreators<IArtistRequest, IArtist, any>;
  getArtists: AsyncActionCreators<IArtistListRequest, IArtistList, any>;
  getGenre: AsyncActionCreators<IGenreRequest, IGenre, any>;
  getGenres: AsyncActionCreators<IGenreListRequest, IGenreList, any>;
  getSelection: AsyncActionCreators<ISelectionRequest, ISelection, any>;
  getSelections: AsyncActionCreators<ISelectionListRequest, ISelectionList, any>;
  getSeries: AsyncActionCreators<ISeriesRequest, ISeries, any>;
  getSeriesContent: AsyncActionCreators<ISeriesRequest, ISeriesContent, any>;
  getSeriesList: AsyncActionCreators<ISeriesListRequest, ISeriesList, any>;
  getWork: AsyncActionCreators<IWorkRequest, IWork, any>;
  getWorks: AsyncActionCreators<IWorkListRequest, IWorkList, any>;
  getYearBest: AsyncActionCreators<IYearBestRequest, IYearBest, any>;
  getYearBests: AsyncActionCreators<IYearBestListRequest, IYearBestList, any>;

  prepareArtistPage: AsyncActionCreators<IArtistRequest, IArtistPage, any>;
  prepareGenrePage: AsyncActionCreators<IPrepareGenrePageRequest, IGenrePage, any>;
  prepareSeriesPage: AsyncActionCreators<ISeriesRequest, ISeriesPage, any>;
  prepareWorkPage: AsyncActionCreators<IWorkRequest, IWorkPage, any>;

  topTopic: AsyncActionCreators<IContentRequest, ITopTopic, any>;
}

export const contentActionsBuilder = (actionTypeMap: { [P in keyof ContentActions]: string }): ContentActions => {
  const actionCreator = actionCreatorFactory().async;

  return {
    getArtist: actionCreator<IArtistRequest, IArtist, any>(actionTypeMap.getArtist),
    getArtists: actionCreator<IArtistListRequest, IArtistList, any>(actionTypeMap.getArtists),
    getGenre: actionCreator<IGenreRequest, IGenre, any>(actionTypeMap.getGenre),
    getGenres: actionCreator<IGenreListRequest, IGenreList, any>(actionTypeMap.getGenres),
    getSelection: actionCreator<ISelectionRequest, ISelection, any>(actionTypeMap.getSelection),
    getSelections: actionCreator<ISelectionListRequest, ISelectionList, any>(actionTypeMap.getSelections),
    getSeries: actionCreator<ISeriesRequest, ISeries, any>(actionTypeMap.getSeries),
    getSeriesContent: actionCreator<ISeriesRequest, ISeriesContent, any>(actionTypeMap.getSeriesContent),
    getSeriesList: actionCreator<ISeriesListRequest, ISeriesList, any>(actionTypeMap.getSeriesList),
    getWork: actionCreator<IWorkRequest, IWork, any>(actionTypeMap.getWork),
    getWorks: actionCreator<IWorkListRequest, IWorkList, any>(actionTypeMap.getWorks),
    getYearBest: actionCreator<IYearBestRequest, IYearBest, any>(actionTypeMap.getYearBest),
    getYearBests: actionCreator<IYearBestListRequest, IYearBestList, any>(actionTypeMap.getYearBests),

    prepareArtistPage: actionCreator<IArtistRequest, IArtistPage, any>(actionTypeMap.prepareArtistPage),
    prepareGenrePage: actionCreator<IPrepareGenrePageRequest, IGenrePage, any>(actionTypeMap.prepareGenrePage),
    prepareSeriesPage: actionCreator<ISeriesRequest, ISeriesPage, any>(actionTypeMap.prepareSeriesPage),
    prepareWorkPage: actionCreator<IWorkRequest, IWorkPage, any>(actionTypeMap.prepareWorkPage),

    topTopic: actionCreator<IContentRequest, ITopTopic, any>(actionTypeMap.topTopic),
  };
};

export const appActions = contentActionsBuilder({
  getArtist: ActionTypes.GET_ARTIST,
  getArtists: ActionTypes.GET_ARTIST_LIST,
  getGenre: ActionTypes.GET_GENRE,
  getGenres: ActionTypes.GET_GENRE_LIST,
  getSelection: ActionTypes.GET_SELECTION,
  getSelections: ActionTypes.GET_SELECTION_LIST,
  getSeries: ActionTypes.GET_SERIES,
  getSeriesContent: ActionTypes.GET_SERIES_CONTENT,
  getSeriesList: ActionTypes.GET_SERIES_LIST,
  getWork: ActionTypes.GET_WORK,
  getWorks: ActionTypes.GET_WORK_LIST,
  getYearBest: ActionTypes.GET_YEARBEST,
  getYearBests: ActionTypes.GET_YEARBEST_LIST,

  prepareArtistPage: ActionTypes.PREPARE_ARTIST_PAGE,
  prepareGenrePage: ActionTypes.PREPARE_GENRE_PAGE,
  prepareSeriesPage: ActionTypes.PREPARE_SERIES_PAGE,
  prepareWorkPage: ActionTypes.PREPARE_WORK_PAGE,

  topTopic: ActionTypes.TOP_TOPIC,
});
