import { artistActions } from '../../actions';
import { IArtist } from '../../models/content/Artist';
import { IContentState } from '../../models/ContentState';
import { contentReducerBuilder } from './content';

export interface IArtistState extends IContentState<IArtist> {}
export const reducer = contentReducerBuilder(artistActions, 'artist');
