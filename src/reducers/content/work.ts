import { workActions } from '../../actions';
import IWork from '../../models/contents/work';
import { IContentState } from '../../models/ContentState';
import { contentReducerBuilder } from './content';

export interface IWorknState extends IContentState<IWork> {}
export const reducer = contentReducerBuilder(workActions, 'work');
