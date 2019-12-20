import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import Genre from '../../../components/content/Genre';
import PageName from '../../../constants/PageName';
import { QueryType } from '../../../models/Main';
import { IStoreState } from '../../../reducers';

interface IOwnProps extends RouteComponentProps<{}> {}

interface IStateProps {
  query: QueryType;
}

interface IDispatchProps {}

type Props = IOwnProps & IStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): IStateProps => ({
  query: ownProps.history.location.search
    .replace(/^\?/, '')
    .split('&')
    .reduce((o, s) => ({ ...o, [s.replace(/=.+$/, '')]: s.replace(/^.+=/, '') }), {}),
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => {
  return {};
};

const GenrePage = (props: Props) => {
  const genre = { name: '' };
  const genreName = (genre && genre.name) || '';

  return (
    <Wireframe title={genreName} breadcrump={[{ label: 'GENRES', href: PageName.REVIEW_GENRES }, { label: genreName }]}>
      <Genre {...props} />
    </Wireframe>
  );
};

export default withRouter(
  connect(
    mapState2Props,
    mapDispatch2Props
  )(GenrePage)
);
