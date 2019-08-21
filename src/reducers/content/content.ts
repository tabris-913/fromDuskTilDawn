import { reducerWithoutInitialState } from 'typescript-fsa-reducers';
import { ContentActions } from '../../actions/content';
import { ContentName } from '../../constants/ContentName';
import { IContent } from '../../models/content/content';
import { contentGetter } from '../../utils/MiscUtils';

export const contentReducerBuilder = <C extends IContent>(actions: ContentActions<C>, contentName: ContentName) => {
  const reducer = reducerWithoutInitialState();
  return reducer.caseWithAction(actions.getContent, (state, action) => ({
    ...state,
    ...contentGetter(contentName)(action.payload),
  }));
};
