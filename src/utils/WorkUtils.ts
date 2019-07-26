import * as R from 'ramda';

import * as Works from '../constants/json/Work.json';
import { IWork } from '../models/Work';

export const getWork = (uid: string): IWork | undefined => R.path([uid], Works.work);

export const getWorks = (uids: string[]): IWork[] => uids.map(getWork).filter(e => !!e) as IWork[];

export const getWorksTitle = (uid?: string) => {
  const works = getWork(uid || '');
  return !!works ? works.title : undefined;
};

export const sortByName = (artists: IWork[]) =>
  R.sortBy(
    R.compose(
      R.toLower,
      R.prop('name')
    )
  )(artists);

export const WorksKeys = Object.keys(Works.work);
