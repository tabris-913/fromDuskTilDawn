import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../wireframe/Wireframe';

import { appActions } from '../../actions';
import Top from '../../components/main/Top';
import { IOwnProps, IStateProps, makeQuery } from '../../models/Main';
import { IStoreState } from '../../reducers';

interface ILocalStateProps extends IStateProps {}

interface IDispatchProps {
  actions: { getTopTopic: () => void };
}

type Props = IOwnProps & ILocalStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): ILocalStateProps => ({
  query: makeQuery(ownProps),
  content: state.contents,
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => {
  return { actions: { getTopTopic: () => dispatch(appActions.topTopic.started({})) } };
};

const TopPage = (props: Props) => {
  React.useState(() => props.actions.getTopTopic());

  return <Wireframe title="TOP">{props.content.topTopic.reviewed ? <Top {...props} /> : undefined}</Wireframe>;
};
export default withRouter(connect(mapState2Props, mapDispatch2Props)(TopPage));
