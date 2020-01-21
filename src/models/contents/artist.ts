import { IArtistState } from '../../reducers/content/artist';
import { IWorkState } from '../../reducers/content/work';
import { ArtistUid, GenreUid, WorkUid } from '../Id';
import IContent, { IContentList, IContentListContent } from './content';

export default interface IArtist extends IContent<ArtistUid> {
  ruby: string;
  ruby4Sort: string;
  initial: string[];
  en: string;
  related?: ArtistUid[];
  kind?: 'バンド' | 'グループ' | 'ユニット' | 'ソロ' | '作品' | '';
  logo?: string[];
  singles?: WorkUid[];
  albums?: WorkUid[];
  others?: WorkUid[];
  genres?: GenreUid[];
  akas?: string[];
}

export interface IArtistListContent extends IContentListContent<ArtistUid> {
  ruby4Sort: string;
  initial: string[];
  en: string;
}

export interface IArtistList extends IContentList {
  [x: string]: IArtistListContent;
}

export interface IArtistPage {
  artist: IArtistState;
  work: IWorkState;
}
