import { Spin } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import { appActions } from '../../../actions/content';
import Artists from '../../../components/sub/Artists';
import PageName from '../../../constants/PageName';
import { IArtist } from '../../../models/content/Artist';
import { IOwnProps, IStateProps, makeQuery } from '../../../models/Main';
import { IArtistsRequest } from '../../../models/request/ArtistRequest';
import { IStoreState } from '../../../reducers';

interface ILocalStateProps extends IStateProps<IArtist> {}

interface IDispatchProps {
  actions: { getArtists: (req: IArtistsRequest) => void };
}

type Props = IOwnProps & ILocalStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): ILocalStateProps => ({
  query: makeQuery(ownProps),
  content: state.contents.artist,
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => {
  return { actions: { getArtists: (req: IArtistsRequest) => dispatch(appActions.getArtists.started(req)) } };
};

const ArtistsPage = (props: Props) => {
  React.useState(() => props.actions.getArtists({}));

  return (
    <Wireframe title="ARTIST" breadcrump={[{ label: 'REVIEW', href: PageName.REVIEW_TOP }, { label: 'ARTIST' }]}>
      {props.content.list ? <Artists {...props} /> : <Spin tip="loading artists data..." />}
    </Wireframe>
  );
};

export default withRouter(
  connect(
    mapState2Props,
    mapDispatch2Props
  )(ArtistsPage)
);
