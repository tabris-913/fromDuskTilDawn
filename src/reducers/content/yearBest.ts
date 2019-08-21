import { yearBestActions } from '../../actions';
import { IYearBest } from '../../models/content/YearBest';
import { IContentState } from '../../models/ContentState';
import { contentReducerBuilder } from './content';

export interface IYearBestState extends IContentState<IYearBest> {}
export const reducer = contentReducerBuilder(yearBestActions, 'yearBest');
