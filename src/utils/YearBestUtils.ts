import * as R from 'ramda';

import * as YearBests from '../constants/json/YearBest.json';
import { IYearBest } from '../models/content/YearBest';

export const getYearBest = (year: string | number): IYearBest | undefined =>
  R.path([year.toString()], YearBests.yearBest);

export const sortByName = (artists: IYearBest[]) =>
  R.sortBy(
    R.compose(
      R.toLower,
      R.prop('year')
    )
  )(artists);

export const YearBestKeys = Object.keys(YearBests.yearBest);
