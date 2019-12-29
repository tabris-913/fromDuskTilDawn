import { appActions } from '../../actions';
import IGenre, { IGenreList } from '../../models/contents/genre';
import { IContentState } from '../../models/ContentState';
import { contentReducerBuilder } from './content';

export interface IGenreState extends IContentState<IGenre, IGenreList> {}
export const reducer = contentReducerBuilder(appActions, 'genre');
