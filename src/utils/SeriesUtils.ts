import * as R from 'ramda';

import ISeries from '../models/contents/series';

export const sortByName = (artists: ISeries[]) => R.sortBy(R.compose(R.toLower, R.prop('name')))(artists);
