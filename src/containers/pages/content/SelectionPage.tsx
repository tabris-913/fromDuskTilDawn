import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import Selection from '../../../components/content/Selection';
import PageName from '../../../constants/PageName';
import { QueryType } from '../../../models/Main';
import { IStoreState } from '../../../reducers';
import { getSelection } from '../../../utils/SelectionUtils';

interface IOwnProps extends RouteComponentProps<{}> {}

interface IStateProps {
  query: QueryType;
}

interface IDispatchProps {}

type Props = IOwnProps & IStateProps & IDispatchProps;

const mapState2Props = (state: IStoreState, ownProps: IOwnProps): IStateProps => ({
  query: ownProps.history.location.search
    .replace(/^\?/, '')
    .split('&')
    .reduce((o, s) => ({ ...o, [s.replace(/=.+$/, '')]: s.replace(/^.+=/, '') }), {}),
});

const mapDispatch2Props = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IDispatchProps => {
  return {};
};

const SelectionPage = (props: Props) => {
  const selection = getSelection(props.query.id || '');
  const selectionTitle = (selection && selection.name) || '';

  return (
    <Wireframe
      title={selectionTitle}
      breadcrump={[{ label: 'SELECTION', href: PageName.SELECTIONS }, { label: selectionTitle }]}
    >
      <Selection {...props} />
    </Wireframe>
  );
};

export default withRouter(
  connect(
    mapState2Props,
    mapDispatch2Props
  )(SelectionPage)
);
