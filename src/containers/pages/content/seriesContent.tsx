import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import { Button, Modal, Spin } from 'antd';
import { appActions } from '../../../actions';
import Series from '../../../components/content/Series';
import PageName from '../../../constants/PageName';
import { IOwnProps, IStateProps, makeQuery } from '../../../models/Main';
import ISeriesRequest from '../../../models/requests/SeriesRequest';
import IWorkRequest from '../../../models/requests/WorkRequest';
import { IStoreState } from '../../../reducers';

interface ILocalStateProps extends IStateProps {}

export interface IDispatchProps {
  actions: {
    getSeriesContent: (req: ISeriesRequest) => void;
    getSeries: (req: ISeriesRequest) => void;
    prepareSeriesPage: (req: ISeriesRequest) => void;
    getWork: (req: IWorkRequest) => void;
  };
}

type Props = IOwnProps & ILocalStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): ILocalStateProps => ({
  query: makeQuery(ownProps),
  content: state.contents,
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => ({
  actions: {
    getSeriesContent: (req: ISeriesRequest) => dispatch(appActions.getSeriesContent.started(req)),
    getSeries: (req: ISeriesRequest) => dispatch(appActions.getSeries.started(req)),
    prepareSeriesPage: (req: ISeriesRequest) => dispatch(appActions.prepareSeriesPage.started(req)),
    getWork: (req: IWorkRequest) => dispatch(appActions.getWork.started(req)),
  },
});

const SeriesContentPage = (props: Props) => {
  React.useState(() => {
    if (props.query.id) {
      props.actions.prepareSeriesPage({ seriesUid: props.match.params.id, contentUid: props.query.id });
    }
  });

  React.useEffect(() => {
    if (props.query.id) {
      props.actions.prepareSeriesPage({ seriesUid: props.match.params.id, contentUid: props.query.id });
    }
  }, [props.query.id]);

  return props.query.id ? (
    props.content.series.content && props.content.series.doc ? (
      <Wireframe
        title={props.content.series.content.name}
        breadcrump={[{ label: 'SERIES', href: PageName.SERIES }, { label: props.content.series.content.name }]}
      >
        <Series {...props} />
      </Wireframe>
    ) : (
      <Wireframe>
        <Spin tip="loading series data..." />
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
  )(SeriesContentPage)
);
