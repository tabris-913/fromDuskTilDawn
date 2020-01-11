import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import { Button, Modal, Spin } from 'antd';
import { appActions } from '../../../actions';
import YearBest from '../../../components/content/YearBest';
import PageName from '../../../constants/PageName';
import { IOwnProps, IStateProps, makeQuery } from '../../../models/Main';
import IYearBestRequest from '../../../models/requests/YearBestRequest';
import { IStoreState } from '../../../reducers';

interface ILocalStateProps extends IStateProps {}

interface IDispatchProps {
  actions: { getYearBest: (req: IYearBestRequest) => void };
}

type Props = IOwnProps & ILocalStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): ILocalStateProps => ({
  query: makeQuery(ownProps),
  content: state.contents,
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => ({
  actions: { getYearBest: (req: IYearBestRequest) => dispatch(appActions.getYearBest.started(req)) },
});

const YearBestPage = (props: Props) => {
  React.useState(() => {
    if (props.query.id) {
      const cond_yb = !props.content.yearBest.doc || props.content.yearBest.doc.uid !== props.query.id;
      if (cond_yb) props.actions.getYearBest({ yearBestUid: props.query.id });
    }
  });

  return props.query.id ? (
    !!props.content.yearBest.doc && props.content.yearBest.doc.uid === props.query.id ? (
      <Wireframe
        title={props.query.id}
        breadcrump={[{ label: 'YEAR BEST', href: PageName.YEAR_BESTS }, { label: props.query.id || '' }]}
      >
        <YearBest {...props} />
      </Wireframe>
    ) : (
      <Wireframe>
        <Spin tip="loading year best data..." />
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
  )(YearBestPage)
);
