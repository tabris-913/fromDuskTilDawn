import { YearBestUid } from '../Id';
import IContent from './content';

export interface IBestAlbums {
  uid: string;
  title: string;
  albums: string[];
}

export interface IBestTunes {
  // TBD
  uid: string;
  title: string;
  tunes: string[];
}

export interface IMonthlyTop {
  [x: string]: string[];
}

export default interface IYearBest extends IContent<YearBestUid> {
  covers: string[];
  albums: IBestAlbums[];
  tunes: IBestTunes[];
  month: IMonthlyTop;
  compilations: string[]; // uids
  amazingTopics: string[];
  brightestHopes: string[]; // uids
}

export type IYearBestList = number[];
