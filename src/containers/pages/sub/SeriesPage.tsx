import { Spin } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import { appActions } from '../../../actions/content';
import Series from '../../../components/sub/Series';
import PageName from '../../../constants/PageName';
import { ISeries } from '../../../models/content/Series';
import { IOwnProps, IStateProps, makeQuery } from '../../../models/Main';
import { ISeriesListRequest } from '../../../models/request/SeriesRequest';
import { IStoreState } from '../../../reducers';

interface ILocalStateProps extends IStateProps<ISeries> {}

interface IDispatchProps {
  actions: { getSeriesList: (req: ISeriesListRequest) => void };
}

type Props = IOwnProps & ILocalStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): ILocalStateProps => ({
  query: makeQuery(ownProps),
  content: state.contents.series,
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => {
  return { actions: { getSeriesList: (req: ISeriesListRequest) => dispatch(appActions.getSeriesList.started(req)) } };
};

const SeriesPage = (props: Props) => {
  React.useState(() => props.actions.getSeriesList({}));

  return (
    <Wireframe title="SERIES" breadcrump={[{ label: 'REVIEW', href: PageName.REVIEW_TOP }, { label: 'SERIES' }]}>
      {props.content.list ? <Series {...props} /> : <Spin tip="loading series data..." />}
    </Wireframe>
  );
};

export default withRouter(
  connect(
    mapState2Props,
    mapDispatch2Props
  )(SeriesPage)
);
