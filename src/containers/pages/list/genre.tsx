import { Spin } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import { appActions } from '../../../actions/content';
import Genres from '../../../components/list/genre';
import PageName from '../../../constants/PageName';
import { IOwnProps, IStateProps, makeQuery } from '../../../models/Main';
import { IGenreListRequest } from '../../../models/requests/GenreRequest';
import { IStoreState } from '../../../reducers';

interface ILocalStateProps extends IStateProps {}

interface IDispatchProps {
  actions: { getGenres: (req: IGenreListRequest) => void };
}

type Props = IOwnProps & ILocalStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): ILocalStateProps => ({
  query: makeQuery(ownProps),
  content: state.contents,
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => ({
  actions: { getGenres: (req: IGenreListRequest) => dispatch(appActions.getGenres.started(req)) },
});

const GenresPage = (props: Props) => {
  React.useState(() => props.actions.getGenres({}));

  return (
    <Wireframe title="GENRES" breadcrump={[{ label: 'REVIEW', href: PageName.REVIEW_TOP }, { label: 'GENRES' }]}>
      {props.content.genre.list ? <Genres {...props} /> : <Spin tip="loading genres data..." />}
    </Wireframe>
  );
};

export default withRouter(
  connect(
    mapState2Props,
    mapDispatch2Props
  )(GenresPage)
);
