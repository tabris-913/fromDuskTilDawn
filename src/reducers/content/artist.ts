import { appActions } from '../../actions';
import IArtist, { IArtistList } from '../../models/contents/artist';
import { IContentState } from '../../models/ContentState';
import { contentReducerBuilder } from './content';

export interface IArtistState extends IContentState<IArtist, IArtistList> {}
export const reducer = contentReducerBuilder(appActions, 'artist');
