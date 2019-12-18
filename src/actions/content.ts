import { actionCreatorFactory, AsyncActionCreators } from 'typescript-fsa';
import IArtist from '../models/contents/artist';
import IGenre from '../models/contents/genre';
import ISelection from '../models/contents/selection';
import ISeries, { ISeriesContent } from '../models/contents/series';
import IWork from '../models/contents/work';
import IYearBest from '../models/contents/yearBest';
import IArtistRequest, { IArtistListRequest } from '../models/requests/ArtistRequest';
import IGenreRequest, { IGenreListRequest } from '../models/requests/GenreRequest';
import ISelectionRequest, { ISelectionListRequest } from '../models/requests/SelectionRequest';
import ISeriesRequest, { ISeriesListRequest } from '../models/requests/SeriesRequest';
import IWorkRequest, { IWorkListRequest } from '../models/requests/WorkRequest';
import IYearBestRequest, { IYearBestListRequest } from '../models/requests/YearBestRequest';
import { ActionTypes } from './types';

export interface ContentActions {
  getArtist: AsyncActionCreators<IArtistRequest, IArtist, any>;
  getArtists: AsyncActionCreators<IArtistListRequest, IArtist[], any>;
  getGenre: AsyncActionCreators<IGenreRequest, IGenre, any>;
  getGenres: AsyncActionCreators<IGenreListRequest, IGenre[], any>;
  getSelection: AsyncActionCreators<ISelectionRequest, ISelection, any>;
  getSelections: AsyncActionCreators<ISelectionListRequest, ISelection[], any>;
  getSeries: AsyncActionCreators<ISeriesRequest, ISeriesContent, any>;
  getSeriesList: AsyncActionCreators<ISeriesListRequest, ISeries[], any>;
  getWork: AsyncActionCreators<IWorkRequest, IWork, any>;
  getWorks: AsyncActionCreators<IWorkListRequest, IWork[], any>;
  getYearBest: AsyncActionCreators<IYearBestRequest, IYearBest, any>;
  getYearBests: AsyncActionCreators<IYearBestListRequest, string[], any>;
}

export const contentActionsBuilder = (actionTypeMap: { [P in keyof ContentActions]: string }): ContentActions => {
  const actionCreator = actionCreatorFactory().async;

  return {
    getArtist: actionCreator<IArtistRequest, IArtist, any>(actionTypeMap.getArtist),
    getArtists: actionCreator<IArtistListRequest, IArtist[], any>(actionTypeMap.getArtists),
    getGenre: actionCreator<IGenreRequest, IGenre, any>(actionTypeMap.getGenre),
    getGenres: actionCreator<IGenreListRequest, IGenre[], any>(actionTypeMap.getGenres),
    getSelection: actionCreator<ISelectionRequest, ISelection, any>(actionTypeMap.getSelection),
    getSelections: actionCreator<ISelectionListRequest, ISelection[], any>(actionTypeMap.getSelections),
    getSeries: actionCreator<ISeriesRequest, ISeriesContent, any>(actionTypeMap.getSeries),
    getSeriesList: actionCreator<ISeriesListRequest, ISeries[], any>(actionTypeMap.getSeriesList),
    getWork: actionCreator<IWorkRequest, IWork, any>(actionTypeMap.getWork),
    getWorks: actionCreator<IWorkListRequest, IWork[], any>(actionTypeMap.getWorks),
    getYearBest: actionCreator<IYearBestRequest, IYearBest, any>(actionTypeMap.getYearBest),
    getYearBests: actionCreator<IYearBestListRequest, string[], any>(actionTypeMap.getYearBests),
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
  getSeriesList: ActionTypes.GET_SERIES_LIST,
  getWork: ActionTypes.GET_WORK,
  getWorks: ActionTypes.GET_WORK_LIST,
  getYearBest: ActionTypes.GET_YEARBEST,
  getYearBests: ActionTypes.GET_YEARBEST_LIST,
});
