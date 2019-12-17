import { ArtistUid, WorkUid } from '../Id';

export interface IWork {
  title: string;
  date: string;
  year: number;
  description: string;
  artist: ArtistUid[];
  list: string[][];
  comment: string;
  uid: WorkUid;
  img?: string[];
  rate?: number;
  review_done?: boolean;
}

export interface ISong {
  title: string;
  artist: string;
  work: IWork[];
}
