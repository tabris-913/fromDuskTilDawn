import * as R from 'ramda';

import ISeriesContent from '../models/contents/series';

export const sortByName = (artists: ISeriesContent[]) =>
  R.sortBy(
    R.compose(
      R.toLower,
      R.prop('name')
    )
  )(artists);
