import { IArtistState } from '../reducers/content/artist';
import { IGenreState } from '../reducers/content/genre';
import { ISelectionState } from '../reducers/content/selection';
import { ISeriesState } from '../reducers/content/series';
import { IWorknState } from '../reducers/content/work';
import { IYearBestState } from '../reducers/content/yearBest';
import IContent from './contents/content';
import { Uid } from './Id';

export interface IContentState<C extends IContent<Uid>> {
  doc?: C;
  list?: { [x: string]: C };
}

export interface IContentsState {
  artist: IArtistState;
  genre: IGenreState;
  selection: ISelectionState;
  series: ISeriesState;
  work: IWorknState;
  yearBest: IYearBestState;
}
