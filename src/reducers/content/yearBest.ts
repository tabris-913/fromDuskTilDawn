import { appActions } from '../../actions';
import IYearBest from '../../models/contents/yearBest';
import { IContentState } from '../../models/ContentState';
import { contentReducerBuilder } from './content';

export interface IYearBestState extends IContentState<IYearBest, number[]> {}
export const reducer = contentReducerBuilder(appActions, 'yearBest');
