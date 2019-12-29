import { IArtistState } from '../../reducers/content/artist';
import { IGenreState } from '../../reducers/content/genre';
import { ArtistUid, GenreUid } from '../Id';
import IContent, { IContentList, IContentListContent } from './content';

export default interface IGenre extends IContent<GenreUid> {
  en?: string;
  description?: string;
  list: ArtistUid[];
}

export interface IGenreListContent extends IContentListContent<GenreUid> {
  en?: string;
  description?: string;
}

export interface IGenreList extends IContentList {
  [x: string]: IGenreListContent;
}

export interface IGenrePage {
  genre: IGenreState;
  artist: IArtistState;
}
