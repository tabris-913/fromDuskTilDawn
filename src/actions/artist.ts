import { IArtist } from '../models/content/Artist';
import { contentActionsBuilder } from './content';
import { ActionTypes } from './types';

export const artistActions = contentActionsBuilder<IArtist>({
  getContent: ActionTypes.ARTIST_GET_CONTENT,
});
