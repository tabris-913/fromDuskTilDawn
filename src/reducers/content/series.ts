import { seriesActions } from '../../actions';
import ISeries from '../../models/contents/series';
import { IContentState } from '../../models/ContentState';
import { contentReducerBuilder } from './content';

export interface ISeriesState extends IContentState<ISeries> {}
export const reducer = contentReducerBuilder(seriesActions, 'series');
