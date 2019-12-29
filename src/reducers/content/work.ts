import { appActions } from '../../actions';
import IWork, { IWorkList } from '../../models/contents/work';
import { IContentState } from '../../models/ContentState';
import { contentReducerBuilder } from './content';

export interface IWorkState extends IContentState<IWork, IWorkList> {}
export const reducer = contentReducerBuilder(appActions, 'work');
