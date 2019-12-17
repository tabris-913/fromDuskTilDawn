import { IContent } from './content';

export interface IWork extends IContent {
  date: string;
  year: number;
  description: string;
  artist: string[];
  list: string[][];
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
