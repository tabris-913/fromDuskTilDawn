import * as R from 'ramda';

import IGenre from '../models/contents/genre';

export const sortByName = (artists: IGenre[]) => R.sortBy(R.compose(R.toLower, R.prop('name')))(artists);
