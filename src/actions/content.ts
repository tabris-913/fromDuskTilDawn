import { actionCreatorFactory, AsyncActionCreators } from 'typescript-fsa';
import { IArtist } from '../models/content/Artist';
import { IContent } from '../models/content/content';
import { IGenre } from '../models/content/Genre';
import { ISelection } from '../models/content/Selection';
import { ISeries, ISeriesContent } from '../models/content/Series';
import { IWork } from '../models/content/Work';
import { IYearBest } from '../models/content/YearBest';
import { IArtistRequest, IArtistsRequest } from '../models/request/ArtistRequest';
import { IGenreRequest, IGenresRequest } from '../models/request/GenreRequest';
import { ISelectionRequest, ISelectionsRequest } from '../models/request/SelectionRequest';
import { ISeriesListRequest, ISeriesRequest } from '../models/request/SeriesRequest';
import { IWorkRequest, IWorksRequest } from '../models/request/WorkRequest';
import { IYearBestRequest, IYearBestsRequest } from '../models/request/YearBestRequest';
import { ActionTypes } from './types';

export interface ContentActions {
  getArtist: AsyncActionCreators<IArtistRequest, IArtist, any>;
  getArtists: AsyncActionCreators<IArtistsRequest, IContent[], any>;
  getGenre: AsyncActionCreators<IGenreRequest, IGenre, any>;
  getGenres: AsyncActionCreators<IGenresRequest, IContent[], any>;
  getSelection: AsyncActionCreators<ISelectionRequest, ISelection, any>;
  getSelections: AsyncActionCreators<ISelectionsRequest, IContent[], any>;
  getSeries: AsyncActionCreators<ISeriesRequest, ISeriesContent, any>;
  getSeriesList: AsyncActionCreators<ISeriesListRequest, ISeries[], any>;
  getWork: AsyncActionCreators<IWorkRequest, IWork, any>;
  getWorks: AsyncActionCreators<IWorksRequest, IContent[], any>;
  getYearBest: AsyncActionCreators<IYearBestRequest, IYearBest, any>;
  getYearBests: AsyncActionCreators<IYearBestsRequest, string[], any>;
}

export const contentActionsBuilder = (actionTypeMap: { [P in keyof ContentActions]: string }): ContentActions => {
  const actionCreator = actionCreatorFactory().async;

  return {
    getArtist: actionCreator<IArtistRequest, IArtist, any>(actionTypeMap.getArtist),
    getArtists: actionCreator<IArtistsRequest, IContent[], any>(actionTypeMap.getArtists),
    getGenre: actionCreator<IGenreRequest, IGenre, any>(actionTypeMap.getGenre),
    getGenres: actionCreator<IGenresRequest, IContent[], any>(actionTypeMap.getGenres),
    getSelection: actionCreator<ISelectionRequest, ISelection, any>(actionTypeMap.getSelection),
    getSelections: actionCreator<ISelectionsRequest, IContent[], any>(actionTypeMap.getSelections),
    getSeries: actionCreator<ISeriesRequest, ISeriesContent, any>(actionTypeMap.getSeries),
    getSeriesList: actionCreator<ISeriesListRequest, ISeries[], any>(actionTypeMap.getSeriesList),
    getWork: actionCreator<IWorkRequest, IWork, any>(actionTypeMap.getWork),
    getWorks: actionCreator<IWorksRequest, IContent[], any>(actionTypeMap.getWorks),
    getYearBest: actionCreator<IYearBestRequest, IYearBest, any>(actionTypeMap.getYearBest),
    getYearBests: actionCreator<IYearBestsRequest, string[], any>(actionTypeMap.getYearBests),
  };
};

export const appActions = contentActionsBuilder({
  getArtist: ActionTypes.GET_ARTIST,
  getArtists: ActionTypes.GET_ARTISTS,
  getGenre: ActionTypes.GET_GENRE,
  getGenres: ActionTypes.GET_GENRES,
  getSelection: ActionTypes.GET_SELECTION,
  getSelections: ActionTypes.GET_SELECTIONS,
  getSeries: ActionTypes.GET_SERIES,
  getSeriesList: ActionTypes.GET_SERIES_LIST,
  getWork: ActionTypes.GET_WORK,
  getWorks: ActionTypes.GET_WORKS,
  getYearBest: ActionTypes.GET_YEAR_BEST,
  getYearBests: ActionTypes.GET_YEAR_BESTS,
});
