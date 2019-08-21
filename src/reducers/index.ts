import { connectRouter, LocationChangeAction, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Reducer } from 'redux';

import * as contentReducers from './content';
import { IArtistState } from './content/artist';
import { IGenreState } from './content/genre';
import { ISelectionState } from './content/selection';
import { ISeriesState } from './content/series';
import { IWorknState } from './content/work';
import { IYearBestState } from './content/yearBest';

export interface IStoreState {
  router: Reducer<RouterState, LocationChangeAction>;
  contents: {
    artist: IArtistState;
    genre: IGenreState;
    selection: ISelectionState;
    series: ISeriesState;
    work: IWorknState;
    yearBest: IYearBestState;
  };
}

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    contents: combineReducers({ ...contentReducers }),
  });
