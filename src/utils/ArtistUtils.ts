import { alphabet } from '../constants/Misc';
import { IArtistListContent } from '../models/contents/artist.js';

export const sortByName = (artists: IArtistListContent[]) =>
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
