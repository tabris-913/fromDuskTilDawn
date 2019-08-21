import { ISeries } from '../models/content/Series';
import { contentActionsBuilder } from './content';
import { ActionTypes } from './types';

export const seriesActions = contentActionsBuilder<ISeries>({
  getContent: ActionTypes.SERIES_GET_CONTENT,
});
