import { ArtistUid, GenreUid } from '../Id';
import IContent, { IContentList, IContentListContent } from './content';

export default interface IGenre extends IContent<GenreUid> {
  en?: string;
  description?: string;
  list: ArtistUid[];
}

interface IGenreListContent extends IContentListContent {
  en?: string;
}

export interface IGenreList extends IContentList {
  [x: string]: IGenreListContent;
}
