import * as R from 'ramda';

import IWork from '../models/contents/work';

export const sortByName = (artists: IWork[]) => R.sortBy(R.compose(R.toLower, R.prop('name')))(artists);
