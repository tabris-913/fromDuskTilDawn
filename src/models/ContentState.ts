import { IContent } from './content/content';

export interface IContentState<C extends IContent> {
  content?: C;
}
