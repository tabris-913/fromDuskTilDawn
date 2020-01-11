import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import { Button, Modal, Spin } from 'antd';
import { appActions } from '../../../actions';
import Selection from '../../../components/content/Selection';
import PageName from '../../../constants/PageName';
import { IOwnProps, IStateProps, makeQuery } from '../../../models/Main';
import ISelectionRequest from '../../../models/requests/SelectionRequest';
import { IStoreState } from '../../../reducers';

interface ILocalStateProps extends IStateProps {}

interface IDispatchProps {
  actions: { getSelection: (req: ISelectionRequest) => void };
}

type Props = IOwnProps & ILocalStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): ILocalStateProps => ({
  query: makeQuery(ownProps),
  content: state.contents,
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => ({
  actions: { getSelection: (req: ISelectionRequest) => dispatch(appActions.getSelection.started(req)) },
});

const SelectionPage = (props: Props) => {
  React.useState(() => {
    if (props.query.id) {
      const cond_selection = !props.content.selection.doc || props.content.selection.doc.uid !== props.query.id;
      if (cond_selection) props.actions.getSelection({ selectionUid: props.query.id });
    }
  });

  return props.query.id ? (
    props.content.selection.doc && props.content.selection.doc.uid === props.query.id ? (
      <Wireframe
        title={props.content.selection.doc.name}
        breadcrump={[{ label: 'SELECTION', href: PageName.SELECTIONS }, { label: props.content.selection.doc.name }]}
      >
        <Selection {...props} />
      </Wireframe>
    ) : (
      <Wireframe>
        <Spin tip="loading selection data..." />
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
  )(SelectionPage)
);
