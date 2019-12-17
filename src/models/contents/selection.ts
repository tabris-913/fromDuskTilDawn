import { SelectionUid, WorkUid } from '../Id';
import { ISong } from './work';

export interface ISelection {
  title: string;
  description?: string;
  uid: SelectionUid;
  type: 'song' | 'album';
  songs?: ISong[];
  albums?: WorkUid[];
}
