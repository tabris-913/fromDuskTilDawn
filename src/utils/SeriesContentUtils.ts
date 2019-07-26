import * as R from 'ramda';

import * as SeriesContent from '../constants/json/SeriesContent.json';
import { ISeriesContent } from '../models/Series.js';

export const getSeriesContent = (uid: string): ISeriesContent | undefined =>
  R.path([uid], SeriesContent.series_content);

export const sortByName = (artists: ISeriesContent[]) =>
  R.sortBy(
    R.compose(
      R.toLower,
      R.prop('name')
    )
  )(artists);

export const SeriesContentKeys = Object.keys(SeriesContent.series_content);
