import { IWork } from '../models/content/Work';
import { contentActionsBuilder } from './content';
import { ActionTypes } from './types';

export const workActions = contentActionsBuilder<IWork>({
  getContent: ActionTypes.WORK_GET_CONTENT,
});
