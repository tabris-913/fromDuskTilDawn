import * as R from 'ramda';

import * as Genres from '../constants/json/Genre.json';
import { IGenre } from '../models/Genre.js';

export const getGenre = (uid: string): IGenre | undefined => R.path([uid], Genres.genre);

export const sortByName = (artists: IGenre[]) =>
  R.sortBy(
    R.compose(
      R.toLower,
      R.prop('name')
    )
  )(artists);

export const GenreKeys = Object.keys(Genres.genre);
