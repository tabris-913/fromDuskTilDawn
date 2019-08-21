import * as R from 'ramda';

import * as Series from '../constants/json/Series.json';
import { ISeries } from '../models/content/Series.js';

export const getSeries = (uid: string): ISeries | undefined => R.path([uid], Series.series);

export const sortByName = (artists: ISeries[]) =>
  R.sortBy(
    R.compose(
      R.toLower,
      R.prop('name')
    )
  )(artists);

export const SeriesKeys = Object.keys(Series.series);
