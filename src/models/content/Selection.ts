import { IContent } from './content';
import { ISong, IWork } from './Work';

export interface ISelection extends IContent {
  description?: string;
  type: 'song' | 'album';
  songs?: ISong[];
  albums?: IWork[];
}
