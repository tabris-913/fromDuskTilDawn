import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import { Button, Modal, Spin } from 'antd';
import { appActions } from '../../../actions';
import Genre from '../../../components/content/Genre';
import PageName from '../../../constants/PageName';
import { IOwnProps, IStateProps, makeQuery } from '../../../models/Main';
import { IArtistListRequest } from '../../../models/requests/ArtistRequest';
import { IPrepareGenrePageRequest } from '../../../models/requests/GenreRequest';
import { IStoreState } from '../../../reducers';

interface ILocalStateProps extends IStateProps {}

interface IDispatchProps {
  actions: {
    getArtists: (req: IArtistListRequest) => void;
    prepareGenrePage: (req: IPrepareGenrePageRequest) => void;
  };
}

type Props = IOwnProps & ILocalStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): ILocalStateProps => ({
  query: makeQuery(ownProps),
  content: state.contents,
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => ({
  actions: {
    getArtists: (req: IArtistListRequest) => dispatch(appActions.getArtists.started(req)),
    prepareGenrePage: (req: IPrepareGenrePageRequest) => dispatch(appActions.prepareGenrePage.started(req)),
  },
});

const GenrePage = (props: Props) => {
  React.useState(() => {
    if (props.query.id) {
      const cond_genre = !props.content.genre.doc || props.content.genre.doc.uid !== props.query.id;
      const cond_artist = !props.content.artist.list;
      if (cond_genre) {
        const req = { genreUid: props.query.id };
        props.actions.prepareGenrePage(req);
      } else if (cond_artist) props.actions.getArtists({});
    }
  });

  return props.query.id ? (
    props.content.genre.doc && props.content.genre.doc.uid === props.query.id ? (
      <Wireframe
        title={props.content.genre.doc.name}
        breadcrump={[{ label: 'GENRES', href: PageName.REVIEW_GENRES }, { label: props.content.genre.doc.name }]}
      >
        <Genre {...props} />
      </Wireframe>
    ) : (
      <Wireframe>
        <Spin tip="loading genre data..." />
      </Wireframe>
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
  )(GenrePage)
);
