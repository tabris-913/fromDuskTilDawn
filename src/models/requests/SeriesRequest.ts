import { SeriesUid, Uid } from '../Id';
import { IContentListRequest, IContentRequest } from './ContentRequest';

export default interface ISeriesRequest extends IContentRequest {
  seriesUid: SeriesUid;
  contentUid?: Uid;
}

export interface ISeriesListRequest extends IContentListRequest {}
