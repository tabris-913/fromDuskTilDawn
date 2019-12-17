import { Spin } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import { appActions } from '../../../actions/content';
import Selection from '../../../components/sub/Selection';
import { ISelection } from '../../../models/content/Selection';
import { IOwnProps, IStateProps, makeQuery } from '../../../models/Main';
import { ISelectionsRequest } from '../../../models/request/SelectionRequest';
import { IStoreState } from '../../../reducers';

interface ILocalStateProps extends IStateProps<ISelection> {}

interface IDispatchProps {
  actions: { getSelections: (req: ISelectionsRequest) => void };
}

type Props = IOwnProps & ILocalStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): ILocalStateProps => ({
  query: makeQuery(ownProps),
  content: state.contents.selection,
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => {
  return { actions: { getSelections: (req: ISelectionsRequest) => dispatch(appActions.getSelections.started(req)) } };
};

const SelectionsPage = (props: Props) => {
  React.useState(() => props.actions.getSelections({}));

  return (
    <Wireframe title="SELECTION" breadcrump={[{ label: 'SELECTION' }]}>
      {props.content.list ? <Selection {...props} /> : <Spin tip="loading selections data..." />}
    </Wireframe>
  );
};

export default withRouter(
  connect(
    mapState2Props,
    mapDispatch2Props
  )(SelectionsPage)
);
