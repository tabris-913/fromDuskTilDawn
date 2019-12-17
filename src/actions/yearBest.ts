import { IYearBest } from '../models/content/YearBest';
import { contentActionsBuilder } from './content';
import { ActionTypes } from './types';

export const yearBestActions = contentActionsBuilder<IYearBest>({
  getContent: ActionTypes.YEAR_BEST_GET_CONTENT,
});
