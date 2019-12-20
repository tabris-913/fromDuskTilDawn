import { SeriesUid } from '../Id';
import IContent, { IContentList, IContentListContent } from './content';

export interface ISeriesSong {
  disk_no?: number;
  track_no: number;
  artist?: string[];
  comment: string;
  explanation?: string;
}

export interface ISeriesWork {
  uid: string;
  artist?: string[];
  song_list: ISeriesSong[];
  comment?: string;
}

export interface ISeriesContent extends IContent<SeriesUid> {
  subtitle?: string;
  description: string;
  work_list: ISeriesWork[];
  disabled?: boolean;
}

export default interface ISeries extends IContent<SeriesUid> {
  content: string[];
  disabled?: boolean;
}

interface ISeriesListContent extends IContentListContent<SeriesUid> {
  en?: string;
}

export interface ISeriesList extends IContentList {
  [x: string]: ISeriesListContent;
}
