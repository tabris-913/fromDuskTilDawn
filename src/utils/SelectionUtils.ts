import * as R from 'ramda';

import ISelection from '../models/contents/selection';

export const sortByName = (artists: ISelection[]) =>
  R.sortBy(
    R.compose(
      R.toLower,
      R.prop('title')
    )
  )(artists);
