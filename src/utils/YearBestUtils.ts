import * as R from 'ramda';

import IYearBest from '../models/contents/yearBest';

export const sortByName = (artists: IYearBest[]) => R.sortBy(R.compose(R.toLower, R.prop('year')))(artists);
