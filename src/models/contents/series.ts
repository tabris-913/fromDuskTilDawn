import { ISeriesState } from '../../reducers/content/series';
import { SeriesUid, ArtistUid } from '../Id';
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
  workArtistId: ArtistUid;
}

export interface ISeriesContent extends IContent<SeriesUid> {
  subtitle?: string;
  description: string;
  work_list: ISeriesWork[];
  disabled?: boolean;
}

interface ISeriesContentInfo extends IContent<SeriesUid> {
  disabled?: boolean;
}

export default interface ISeries extends IContent<SeriesUid> {
  content: ISeriesContentInfo[];
  disabled?: boolean;
}

interface ISeriesListContent extends IContentListContent<SeriesUid> {
  en?: string;
  disabled?: boolean;
}

export interface ISeriesList extends IContentList {
  [x: string]: ISeriesListContent;
}

export interface ISeriesPage {
  series: ISeriesState;
}
