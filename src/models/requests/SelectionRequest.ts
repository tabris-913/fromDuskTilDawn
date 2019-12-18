import { SelectionUid } from '../Id';
import { IContentListRequest, IContentRequest } from './ContentRequest';

export default interface ISelectionRequest extends IContentRequest {
  selectionUid: SelectionUid;
}

export interface ISelectionListRequest extends IContentListRequest {}
