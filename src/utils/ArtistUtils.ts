import * as R from 'ramda';

import * as Artists from '../constants/json/Artist.json';
import { alphabet } from '../constants/Misc';
import { IArtist } from '../models/content/Artist';

export const getArtist = (uid: string): IArtist | undefined => R.path([uid], Artists.artists);

export const getArtists = (uids: string[]): IArtist[] => uids.map(getArtist).filter(e => !!e) as IArtist[];

export const getArtistName = (uid?: string) => {
  const artist = getArtist(uid || '');
  return !!artist ? artist.name : undefined;
};

export const sortByName = (artists: IArtist[]) =>
  // R.sortBy(
  //   R.compose(
  //     R.toLower,
  //     R.prop('name')
  //   )
  // )(artists);
  // R.sortWith([R.ascend(R.prop('name')), R.ascend(R.prop('ruby4Sort'))])(artists);
  {
    const copy = artists.slice();
    copy.sort((a, b) => {
      if (alphabet.includes(a.name[0]) && alphabet.includes(b.name[0])) {
        return a.name > b.name ? 1 : -1;
      }
      if (a.ruby4Sort[0].match(/[あ-ん]/) && b.ruby4Sort[0].match(/[あ-ん]/)) {
        return a.ruby4Sort > b.ruby4Sort ? 1 : -1;
      }
      return 0;
    });
    return copy;
  };

export const ArtistKeys = Object.keys(Artists.artists);
