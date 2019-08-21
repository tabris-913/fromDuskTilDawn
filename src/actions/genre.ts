import { IGenre } from '../models/content/Genre';
import { contentActionsBuilder } from './content';
import { ActionTypes } from './types';

export const genreActions = contentActionsBuilder<IGenre>({
  getContent: ActionTypes.GENRE_GET_CONTENT,
});
