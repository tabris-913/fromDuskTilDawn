import { ArtistUid, WorkUid } from '../Id';
import IContent, { IContentList, IContentListContent } from './content';

export default interface IWork extends IContent<WorkUid> {
  date: string;
  year: number;
  description: string;
  artist: ArtistUid[];
  list: {
    description?: string;
    list: string[][];
  };
  comment: string;
  img?: string[];
  rate?: number;
  review_done?: boolean;
}

export interface ISong {
  title: string;
  artist: string;
  work: IWork[];
}

export interface IWorkListContent extends IContentListContent<WorkUid> {
  date: string;
  review_done?: boolean;
}

export interface IWorkList extends IContentList {
  [x: string]: {
    [uid: string]: IWorkListContent;
  };
}
