import { connectRouter, LocationChangeAction, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Reducer } from 'redux';

import { IContentsState } from '../models/ContentState';
import * as contentReducers from './content';
// import { IArtistState } from './content/artist';
// import { IGenreState } from './content/genre';
// import { ISelectionState } from './content/selection';
// import { ISeriesState } from './content/series';
// import { IWorkState } from './content/work';
// import { IYearBestState } from './content/yearBest';

export interface IStoreState {
  router: Reducer<RouterState, LocationChangeAction>;
  contents: IContentsState;
}

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    contents: contentReducers.appReducer,
  });
