import { ArtistUid, GenreUid } from '../Id';

export interface IGenre {
  name: string;
  description?: string;
  uid: GenreUid;
  list: ArtistUid[];
}
