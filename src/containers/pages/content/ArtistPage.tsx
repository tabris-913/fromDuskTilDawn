import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import { Button, Modal, Spin } from 'antd';
import { appActions } from '../../../actions/content';
import Artist from '../../../components/content/Artist';
import PageName from '../../../constants/PageName';
import IArtist from '../../../models/contents/artist';
import { IOwnProps, IStateProps, makeQuery } from '../../../models/Main';
import IArtistRequest from '../../../models/requests/ArtistRequest';
import { IStoreState } from '../../../reducers';

interface ILocalStateProps extends IStateProps<IArtist> {}

interface IDispatchProps {
  actions: { getArtist: (req: IArtistRequest) => void };
}

type Props = IOwnProps & ILocalStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): ILocalStateProps => ({
  query: makeQuery(ownProps),
  content: state.contents.artist,
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => {
  return { actions: { getArtist: (req: IArtistRequest) => dispatch(appActions.getArtist.started(req)) } };
};

const ArtistPage = (props: Props) => {
  React.useState(() => {
    if (props.query.id) {
      if (props.content.doc && props.content.doc.uid !== props.query.id) {
        props.actions.getArtist({ artistUid: props.query.id });
      }
    }
  });

  return props.query.id ? (
    props.content.doc ? (
      <Wireframe
        title={props.content.doc.name || ''}
        breadcrump={[{ label: 'ARTIST', href: PageName.REVIEW_ARTIST }, { label: props.content.doc.name || '' }]}
      >
        <Artist {...props} />
      </Wireframe>
    ) : (
      <Spin tip="loading artist data..." />
    )
  ) : (
    <Modal
      title="Go Back"
      destroyOnClose={false}
      footer={[<Button key="ok" type="primary" onClick={props.history.goBack} />]}
    />
  );
};

export default withRouter(
  connect(
    mapState2Props,
    mapDispatch2Props
  )(ArtistPage)
);
