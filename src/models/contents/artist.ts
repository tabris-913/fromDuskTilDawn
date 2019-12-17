import { ArtistUid, WorkUid } from '../Id';

export interface IArtist {
  uid: ArtistUid;
  name: string;
  ruby: string;
  ruby4Sort?: string;
  initial?: string;
  en?: string;
  related?: ArtistUid[];
  kind?: 'バンド' | 'グループ' | 'ユニット' | 'ソロ' | '作品' | '';
  logo?: string[];
  singles?: WorkUid[];
  albums?: WorkUid[];
  others?: WorkUid[];
}
