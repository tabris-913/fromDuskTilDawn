import { appActions } from '../../actions';
import ISelection from '../../models/contents/selection';
import { IContentState } from '../../models/ContentState';
import { contentReducerBuilder } from './content';

export interface ISelectionState extends IContentState<ISelection> {}
export const reducer = contentReducerBuilder(appActions, 'selection');
