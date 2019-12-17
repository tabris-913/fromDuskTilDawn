import { Spin } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import { appActions } from '../../../actions/content';
import YearBest from '../../../components/sub/YearBest';
import { IYearBest } from '../../../models/content/YearBest';
import { IOwnProps, IStateProps, makeQuery } from '../../../models/Main';
import { IYearBestsRequest } from '../../../models/request/YearBestRequest';
import { IStoreState } from '../../../reducers';

interface ILocalStateProps extends IStateProps<IYearBest> {}

interface IDispatchProps {
  actions: { getYearBests: (req: IYearBestsRequest) => void };
}

type Props = IOwnProps & ILocalStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): ILocalStateProps => ({
  query: makeQuery(ownProps),
  content: state.contents.yearBest,
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => {
  return { actions: { getYearBests: (req: IYearBestsRequest) => dispatch(appActions.getYearBests.started(req)) } };
};

const YearBestsPage = (props: Props) => {
  React.useState(() => props.actions.getYearBests({}));

  return (
    <Wireframe title="YEAR BEST" breadcrump={[{ label: 'YEAR BEST' }]}>
      {props.content.list ? <YearBest {...props} /> : <Spin tip="loading year bests data..." />}
    </Wireframe>
  );
};

export default withRouter(
  connect(
    mapState2Props,
    mapDispatch2Props
  )(YearBestsPage)
);
