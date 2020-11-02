import { IArtistState } from '../../reducers/content/artist';
import { IGenreState } from '../../reducers/content/genre';
import { IWorkState } from '../../reducers/content/work';
import { ArtistUid, GenreUid, WorkUid } from '../Id';
import IContent, { IContentList, IContentListContent } from './content';

export default interface IWork extends IContent<WorkUid> {
  date: string;
  year: number;
  description: string;
  artist: ArtistUid[];
  list: {
    description?: string;
    disk?: { [n: number]: string };
    list: string[][];
  }[];
  comment: string;
  img?: string[];
  rate?: number;
  review_done?: boolean;
  type?: 'single' | 'album' | 'other';
  recommend?: string[];
  genres?: GenreUid[];
  akas?: string[];
  ruby?: string;
}

export interface ISong {
  title: string;
  artist: string;
  work: IWork[];
}

export interface IWorkListContent extends IContentListContent<WorkUid> {
  artist: ArtistUid[];
  date: string;
  img?: string[];
  review_done?: boolean;
}

export interface IWorkList extends IContentList {
  singles: { [uid: string]: IWorkListContent };
  albums: { [uid: string]: IWorkListContent };
  others: { [uid: string]: IWorkListContent };
}

export interface IWorkPage {
  artist: IArtistState;
  genre: IGenreState;
  work: IWorkState;
}
