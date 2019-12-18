import { ArtistUid } from '../Id';
import { IContentListRequest, IContentRequest } from './ContentRequest';

export default interface IArtistRequest extends IContentRequest {
  artistUid: ArtistUid;
}

export interface IArtistListRequest extends IContentListRequest {}
