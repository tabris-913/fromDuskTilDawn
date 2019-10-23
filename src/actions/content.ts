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

export interface ContentActions<C extends IContent> {
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

export const contentActionsBuilder = <C extends IContent>(
  actionTypeMap: { [P in keyof ContentActions<C>]: string }
): ContentActions<C> => {
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
