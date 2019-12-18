import { WorkUid } from '../Id';
import { IContentListRequest, IContentRequest } from './ContentRequest';

export default interface IWorkRequest extends IContentRequest {
  workUid: WorkUid;
}

export interface IWorkListRequest extends IContentListRequest {}
