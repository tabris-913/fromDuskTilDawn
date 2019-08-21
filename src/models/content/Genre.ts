import { IContent } from './content';

export interface IGenre extends IContent {
  description?: string;
  list: string[];
}
