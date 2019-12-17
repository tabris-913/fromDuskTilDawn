import { ISelection } from '../models/content/Selection';
import { contentActionsBuilder } from './content';
import { ActionTypes } from './types';

export const selectionActions = contentActionsBuilder<ISelection>({
  getContent: ActionTypes.SELECTION_GET_CONTENT,
});
