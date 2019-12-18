import { YearBestUid } from '../Id';
import { IContentListRequest, IContentRequest } from './ContentRequest';

export default interface IYearBestRequest extends IContentRequest {
  yearBestUid: YearBestUid;
}

export interface IYearBestListRequest extends IContentListRequest {}
