import { ArtistUid, WorkUid } from '../Id';
import { IContentListRequest, IContentRequest } from './ContentRequest';

export default interface IWorkRequest extends IContentRequest {
  artistUid: ArtistUid;
  workUid: WorkUid;
}

export interface IWorkListRequest extends IContentListRequest {
  artistUid: ArtistUid;
}
