import * as Q from 'querystring';

enum PageName {
  TOP = '/top',
  REVIEW_TOP = '/review',
  ABOUT = '/about',
  LINK = '/link',

  REVIEW_ARTIST = '/review/artist',
  NEW_RELEASE = '/new_release',
  REVIEW_SCHEDULE = '/review/schedule',
  SCORE = '/review/score',
  SELECTIONS = '/content/selection',
  YEAR_BESTS = '/content/year_best',
  REVIEW_GENRES = '/review/genre',
  SERIES = '/review/series',

  ARTIST = '/artist',
  GENRE = '/genre',
  SELECTION = '/selection',
  SERIES_CONTENT = '/series',
  YEAR_BEST = '/year_best',
  WORK = '/work',
}

// tslint:disable-next-line array-type
export const toPublicUrl = (page: PageName, suffixList?: (string | number)[], param?: any) => {
  const suffix = suffixList && suffixList.length > 0 ? `/${suffixList.join('/')}` : '';
  const stringifiedParam = param ? `?${Q.stringify(param)}` : '';
  return process.env.PUBLIC_URL + page + suffix + stringifiedParam;
};

export default PageName;
