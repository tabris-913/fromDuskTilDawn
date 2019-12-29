import { appActions } from '../../actions';
import ISeries, { ISeriesContent, ISeriesList } from '../../models/contents/series';
import { IContentState } from '../../models/ContentState';
import { contentReducerBuilder } from './content';

export interface ISeriesState extends IContentState<ISeries, ISeriesList> {
  content?: ISeriesContent;
}
export const reducer = contentReducerBuilder(appActions, 'series');
