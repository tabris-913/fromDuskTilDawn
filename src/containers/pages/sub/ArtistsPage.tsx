import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import { appActions } from '../../../actions/content';
import Artists from '../../../components/sub/Artists';
import PageName from '../../../constants/PageName';
import { QueryType } from '../../../models/Main';
import { IArtistsRequest } from '../../../models/request/ArtistRequest';
import { IStoreState } from '../../../reducers';

interface IOwnProps extends RouteComponentProps<{}> {}

interface IStateProps {
  query: QueryType;
}

interface IDispatchProps {
  actions: {
    getArtists: (req: IArtistsRequest) => void;
  };
}

type Props = IOwnProps & IStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): IStateProps => ({
  query: ownProps.history.location.search
    .replace(/^\?/, '')
    .split('&')
    .reduce((o, s) => ({ ...o, [s.replace(/=.+$/, '')]: s.replace(/^.+=/, '') }), {}),
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => {
  return {
    actions: {
      getArtists: (req: IArtistsRequest) => dispatch(appActions.getArtists.started(req)),
    },
  };
};

const ArtistsPage = (props: Props) => (
  <Wireframe title="ARTIST" breadcrump={[{ label: 'REVIEW', href: PageName.REVIEW_TOP }, { label: 'ARTIST' }]}>
    <Artists {...props} />
  </Wireframe>
);

export default withRouter(
  connect(
    mapState2Props,
    mapDispatch2Props
  )(ArtistsPage)
);
