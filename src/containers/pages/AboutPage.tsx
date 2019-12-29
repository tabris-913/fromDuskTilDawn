import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../wireframe/Wireframe';

import About from '../../components/main/About';
import { IOwnProps, IStateProps, makeQuery } from '../../models/Main';
import { IStoreState } from '../../reducers';

interface ILocalStateProps extends IStateProps {}

interface IDispatchProps {}

type Props = IOwnProps & ILocalStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): ILocalStateProps => ({
  query: makeQuery(ownProps),
  content: state.contents,
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => {
  return {};
};

const AboutPage = (props: Props) => (
  <Wireframe title="ABOUT" breadcrump={[{ label: 'ABOUT' }]}>
    <About {...props} />
  </Wireframe>
);

export default withRouter(
  connect(
    mapState2Props,
    mapDispatch2Props
  )(AboutPage)
);
