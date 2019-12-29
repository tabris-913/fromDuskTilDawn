import { Spin } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import { appActions } from '../../../actions/content';
import Selection from '../../../components/list/selection';
import { IOwnProps, IStateProps, makeQuery } from '../../../models/Main';
import { ISelectionListRequest } from '../../../models/requests/SelectionRequest';
import { IStoreState } from '../../../reducers';

interface ILocalStateProps extends IStateProps {}

interface IDispatchProps {
  actions: { getSelections: (req: ISelectionListRequest) => void };
}

type Props = IOwnProps & ILocalStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): ILocalStateProps => ({
  query: makeQuery(ownProps),
  content: state.contents,
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => ({
  actions: { getSelections: (req: ISelectionListRequest) => dispatch(appActions.getSelections.started(req)) },
});

const SelectionsPage = (props: Props) => {
  React.useState(() => props.actions.getSelections({}));

  return (
    <Wireframe title="SELECTION" breadcrump={[{ label: 'SELECTION' }]}>
      {props.content.selection.list ? <Selection {...props} /> : <Spin tip="loading selections data..." />}
    </Wireframe>
  );
};

export default withRouter(
  connect(
    mapState2Props,
    mapDispatch2Props
  )(SelectionsPage)
);
