import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { ContentActions } from '../../actions/content';
import { ContentName } from '../../constants/ContentName';

export const contentReducerBuilder = (actions: ContentActions, contentName: ContentName) => {
  const reducer = reducerWithInitialState({});
  return reducer
    .casesWithAction(
      [actions.getArtist.done, actions.getGenre.done, actions.getSelection.done, actions.getSeries.done],
      (state, action) => ({ ...state, ...action.payload.result })
    )
    .casesWithAction([actions.getWork.done, actions.getYearBest.done], (state, action) => ({
      ...state,
      ...action.payload.result,
    }));
};
