import { Action } from 'typescript-fsa';
import { ContentActions } from '../actions/content';
import { ContentName } from '../constants/ContentName';
import { IContent } from '../models/content/content';

export interface ContentSaga<C extends IContent> {
  getContent: (action: Action<string>) => IterableIterator<any>;
}

const saga = <C extends IContent>(contentName: ContentName, actions: ContentActions<C>) => ({
  getContent: () =>
    function*(action: Action<string>): IterableIterator<any> {
      console.log(`get ${contentName} start`);
    },
});

export default saga;
