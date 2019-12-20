import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as Redux from 'redux';

import Wireframe from '../../wireframe/Wireframe';

import Work from '../../../components/content/Work';
import PageName, { toPublicUrl } from '../../../constants/PageName';
import IWork from '../../../models/contents/work';
import { QueryType } from '../../../models/Main';
import { IStoreState } from '../../../reducers';
import { getWork } from '../../../utils/WorkUtils';

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

const WorkPage = (props: Props) => {
  const content: IWork | undefined = getWork(props.query.id || '');

  return !!content ? (
    <Wireframe
      title={content.name}
      breadcrump={[
        { label: 'ARTIST', href: PageName.REVIEW_ARTIST },
        { label: 'artistName', hrefWithId: toPublicUrl(PageName.ARTIST, undefined, { id: '' }) },
        { label: content.name },
      ]}
    >
      <Work {...props} />
    </Wireframe>
  ) : (
    <></>
  );
};

export default withRouter(
  connect(
    mapState2Props,
    mapDispatch2Props
  )(WorkPage)
);
