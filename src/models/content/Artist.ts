import { IContent } from './content';

export interface IArtist extends IContent {
  ruby?: string;
  ruby4Sort: string;
  initial?: string;
  en?: string;
  related?: string[];
  kind?: string;
  logo?: string[];
  singles?: string[]; // uids
  albums?: string[]; // uids
  others?: string[];
}
