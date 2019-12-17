import { SeriesUid, Uid } from '../Id';

export default interface ISeriesRequest {
  seriesUid: SeriesUid;
  contentUid?: Uid;
}

export interface ISeriesListRequest {}
