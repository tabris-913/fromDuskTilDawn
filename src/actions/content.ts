import { ActionCreator, actionCreatorFactory } from 'typescript-fsa';
import { IContent } from '../models/content/content';

export interface ContentActions<C extends IContent> {
  getContent: ActionCreator<string>;
}

export const contentActionsBuilder = <C extends IContent>(
  actionTypeMap: { [P in keyof ContentActions<C>]: string }
): ContentActions<C> => {
  const actionCreator = actionCreatorFactory();

  return { getContent: actionCreator<string>(actionTypeMap.getContent) };
};
