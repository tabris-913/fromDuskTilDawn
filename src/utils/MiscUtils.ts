import { ContentName } from '../constants/ContentName';
import { getArtist } from './ArtistUtils';
import { getGenre } from './GenreUtils';
import { getSelection } from './SelectionUtils';
import { getSeries } from './SeriesUtils';
import { getWork } from './WorkUtils';
import { getYearBest } from './YearBestUtils';

/**
 * カタカナをひらがなに変換する
 * @param K {string} - カタカナ
 */
export const convertK2H = (K: string) => String.fromCharCode(K.charCodeAt(0) - 0x60);

export const contentGetter = (contentName: ContentName) => {
  switch (contentName) {
    case 'artist':
      return getArtist;
    case 'genre':
      return getGenre;
    case 'selection':
      return getSelection;
    case 'series':
      return getSeries;
    case 'work':
      return getWork;
    case 'yearBest':
      return getYearBest;
  }
};

export type ReturnedType<T> = T extends ((...args: any[]) => infer U) ? (U extends Promise<infer R> ? R : U) : never;
