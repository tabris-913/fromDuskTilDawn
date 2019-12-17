import * as R from 'ramda';

import * as Selections from '../constants/json/Selection.json';
import { ISelection } from '../models/content/Selection.js';

export const getSelection = (uid: string): ISelection | undefined => R.path([uid], Selections.selection);

export const sortByName = (artists: ISelection[]) =>
  R.sortBy(
    R.compose(
      R.toLower,
      R.prop('title')
    )
  )(artists);

export const SelectionKeys = Object.keys(Selections.selection);
