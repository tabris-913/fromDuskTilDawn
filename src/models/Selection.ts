import { ISong, IWork } from './Work';

export interface ISelection {
  title: string;
  description?: string;
  uid: string;
  type: 'song' | 'album';
  songs?: ISong[];
  albums?: IWork[];
}
