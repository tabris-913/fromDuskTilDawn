import { IContentRequest, IContentsRequest } from './ContentRequest';

export interface IWorkRequest extends IContentRequest {}

export interface IWorksRequest extends IContentsRequest {
  groupId: string;
}
