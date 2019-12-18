import { GenreUid } from '../Id';
import { IContentListRequest, IContentRequest } from './ContentRequest';

export default interface IGenreRequest extends IContentRequest {
  genreUid: GenreUid;
}

export interface IGenreListRequest extends IContentListRequest {}
