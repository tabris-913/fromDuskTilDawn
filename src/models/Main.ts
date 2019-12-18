import { History } from 'history';
import { RouteComponentProps } from 'react-router-dom';
import IContent from './contents/content';
import { IContentState } from './ContentState';
import { Uid } from './Id';

export interface QueryType {
  id?: string;
  page?: number;
}

interface IMatchParams {
  id: string;
}

export interface IOwnProps extends RouteComponentProps<IMatchParams> {}
export interface IStateProps<C extends IContent<Uid>> {
  query: QueryType;
  content: IContentState<C>;
}

export const makeQuery = (ownProps: IOwnProps) =>
  ownProps.history.location.search
    .replace(/^\?/, '')
    .split('&')
    .reduce((o, s) => ({ ...o, [s.replace(/=.+$/, '')]: s.replace(/^.+=/, '') }), {});

export interface MainContentProps {
  history: History;
  query: QueryType;
}

export interface TitleProps extends MainContentProps {}

export interface BodyProps extends MainContentProps {}
