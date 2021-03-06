import { SelectionUid, WorkUid } from '../Id';
import IContent, { IContentList, IContentListContent } from './content';
import { ISong } from './work';

export default interface ISelection extends IContent<SelectionUid> {
  description?: string;
  type: 'song' | 'album';
  songs?: ISong[];
  albums?: WorkUid[];
}
export interface ISelectionListContent extends IContentListContent<SelectionUid> {
  description?: string;
  en?: string;
}

export interface ISelectionList extends IContentList {
  [x: string]: ISelectionListContent;
}
