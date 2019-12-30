import { appActions } from '../../actions';
import ISeries, { ISeriesContent, ISeriesList } from '../../models/contents/series';
import { IWorkListContent } from '../../models/contents/work';
import { IContentState } from '../../models/ContentState';
import { contentReducerBuilder } from './content';

export interface ISeriesState extends IContentState<ISeries, ISeriesList> {
  content?: ISeriesContent;
  works?: { [x: string]: IWorkListContent };
}
export const reducer = contentReducerBuilder(appActions, 'series');
