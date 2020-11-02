import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import { Button, Modal, Spin } from 'antd';
import { appActions } from '../../../actions';
import Work from '../../../components/content/Work';
import PageName, { toPublicUrl } from '../../../constants/PageName';
import { IOwnProps, IStateProps, makeQuery } from '../../../models/Main';
import IWorkRequest from '../../../models/requests/WorkRequest';
import { IStoreState } from '../../../reducers';

interface ILocalStateProps extends IStateProps {}

interface IDispatchProps {
  actions: { prepareWorkPage: (req: IWorkRequest) => void };
}

type Props = IOwnProps & ILocalStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): ILocalStateProps => ({
  query: makeQuery(ownProps),
  content: state.contents,
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => ({
  actions: { prepareWorkPage: (req: IWorkRequest) => dispatch(appActions.prepareWorkPage.started(req)) },
});

const WorkPage = (props: Props) => {
  React.useState(() => {
    if (props.query.id && props.match.params.id) {
      const cond_work = !props.content.work.doc || props.content.work.doc.uid !== props.query.id;
      if (cond_work) props.actions.prepareWorkPage({ artistUid: props.match.params.id, workUid: props.query.id });
    }
  });

  return props.query.id ? (
    !!props.content.work.doc && !!props.content.artist.list && props.content.work.doc.uid === props.query.id ? (
      <Wireframe
        title={props.content.work.doc.name}
        breadcrump={[
          { label: 'ARTIST', href: PageName.REVIEW_ARTIST },
          {
            label: props.content.artist.list[props.match.params.id].name,
            hrefWithId: toPublicUrl(PageName.ARTIST, undefined, { id: props.match.params.id }),
          },
          { label: props.content.work.doc.name },
        ]}
      >
        <Work {...props} />
      </Wireframe>
    ) : (
      <Wireframe>
        <Spin tip="loading work data..." />
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

export default withRouter(connect(mapState2Props, mapDispatch2Props)(WorkPage));
