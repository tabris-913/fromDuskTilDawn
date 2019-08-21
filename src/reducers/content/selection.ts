import { selectionActions } from '../../actions';
import { ISelection } from '../../models/content/Selection';
import { IContentState } from '../../models/ContentState';
import { contentReducerBuilder } from './content';

export interface ISelectionState extends IContentState<ISelection> {}
export const reducer = contentReducerBuilder(selectionActions, 'selection');
