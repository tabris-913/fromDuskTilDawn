import * as R from 'ramda';

import * as Artists from '../constants/json//Artist.json';
import { IArtist } from '../models/Artist';

export const getArtist = (uid: string): IArtist | undefined => R.path([uid], Artists.artists);

export const getArtistName = (uid?: string) => {
  const artist = getArtist(uid || '');
  return !!artist ? artist.name : undefined;
};

export const sortByName = (artists: IArtist[]) =>
  R.sortBy(
    R.compose(
      R.toLower,
      R.prop('name')
    )
  )(artists);

export const ArtistKeys = Object.keys(Artists.artists);
