import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import { appActions } from '../../../actions';
import Work from '../../../components/content/Work';
import PageName, { toPublicUrl } from '../../../constants/PageName';
import { IOwnProps, IStateProps, makeQuery } from '../../../models/Main';
import IWorkRequest from '../../../models/requests/WorkRequest';
import { IStoreState } from '../../../reducers';

interface ILocalStateProps extends IStateProps {}

interface IDispatchProps {
  actions: { getWork: (req: IWorkRequest) => void };
}

type Props = IOwnProps & ILocalStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): ILocalStateProps => ({
  query: makeQuery(ownProps),
  content: state.contents,
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => ({
  actions: { getWork: (req: IWorkRequest) => dispatch(appActions.getWork.started(req)) },
});

const WorkPage = (props: Props) => {
  const content = props.content.work.doc!;

  return !!content ? (
    <Wireframe
      title={content.name}
      breadcrump={[
        { label: 'ARTIST', href: PageName.REVIEW_ARTIST },
        { label: 'artistName', hrefWithId: toPublicUrl(PageName.ARTIST, undefined, { id: '' }) },
        { label: content.name },
      ]}
    >
      <Work {...props} />
    </Wireframe>
  ) : (
    <></>
  );
};

export default withRouter(
  connect(
    mapState2Props,
    mapDispatch2Props
  )(WorkPage)
);
