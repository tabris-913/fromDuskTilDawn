import { History } from 'history';
import { RouteComponentProps } from 'react-router-dom';
import { IContentsState } from './ContentState';

export interface QueryType {
  id?: string;
  page?: number;
}

interface IMatchParams {
  id: string;
}

export interface IOwnProps extends RouteComponentProps<IMatchParams> {}
export interface IStateProps {
  query: QueryType;
  content: IContentsState;
}

export const makeQuery = (ownProps: IOwnProps) =>
  ownProps.history.location.search
    .replace(/^\?/, '')
    .split('&')
    .reduce((o, s) => ({ ...o, [s.replace(/=.+$/, '')]: s.replace(/^.+=/, '') }), {});

export interface MainContentProps extends IStateProps {
  history: History;
  query: QueryType;
}

export interface TitleProps extends MainContentProps {}

export interface BodyProps extends MainContentProps {}
