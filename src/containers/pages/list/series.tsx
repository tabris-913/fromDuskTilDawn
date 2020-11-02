import { Spin } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import { appActions } from '../../../actions/content';
import Series from '../../../components/list/series';
import PageName from '../../../constants/PageName';
import { IOwnProps, IStateProps, makeQuery } from '../../../models/Main';
import ISeriesRequest, { ISeriesListRequest } from '../../../models/requests/SeriesRequest';
import { IStoreState } from '../../../reducers';

interface ILocalStateProps extends IStateProps {}

export interface IDispatchProps {
  actions: { getSeriesList: (req: ISeriesListRequest) => void; getSeries: (req: ISeriesRequest) => void };
}

type Props = IOwnProps & ILocalStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): ILocalStateProps => ({
  query: makeQuery(ownProps),
  content: state.contents,
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => ({
  actions: {
    getSeriesList: (req: ISeriesListRequest) => dispatch(appActions.getSeriesList.started(req)),
    getSeries: (req: ISeriesRequest) => dispatch(appActions.getSeries.started(req)),
  },
});

const SeriesPage = (props: Props) => {
  React.useState(() => props.actions.getSeriesList({}));

  return (
    <Wireframe title="SERIES" breadcrump={[{ label: 'REVIEW', href: PageName.REVIEW_TOP }, { label: 'SERIES' }]}>
      {props.content.series.list ? <Series {...props} /> : <Spin tip="loading series data..." />}
    </Wireframe>
  );
};

export default withRouter(connect(mapState2Props, mapDispatch2Props)(SeriesPage));
