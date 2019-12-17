import { genreActions } from '../../actions';
import { IGenre } from '../../models/content/Genre';
import { IContentState } from '../../models/ContentState';
import { contentReducerBuilder } from './content';

export interface IGenreState extends IContentState<IGenre> {}
export const reducer = contentReducerBuilder(genreActions, 'genre');
