import { Card } from 'antd';
import * as React from 'react';

import Main from '../Main';

import { MainContentProps } from '../../models/Main';
import { getSelection } from '../../utils/SelectionUtils';

const Title = () => <div style={{ marginBottom: 10 }}>何らかのメッセージ</div>;

const Body = () => {
  const selection = getSelection('uid');
  const content = !!selection
    ? selection.type === 'song' && selection.songs
      ? selection.songs
      : selection.type === 'album' && selection.albums
      ? selection.albums
      : undefined
    : undefined;
  // const cover = !!selection ? selection.type === 'song' && selection.songs ? selection.songs[0].work[0].img[0] : selection.albums ? selection.albums[0]
  return (
    <>
      {['uid'].map(getSelection).map((selection, idx) =>
        selection ? (
          <Card key={idx} hoverable={true} cover={<img src={''} />}>
            <Card.Meta title={selection.title} description={selection.description} />
          </Card>
        ) : (
          undefined
        )
      )}
    </>
  );
};

const Selection = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Selection;
