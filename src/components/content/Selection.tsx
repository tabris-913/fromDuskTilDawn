import { Card } from 'antd';
import * as React from 'react';

import Main from '../Main';

import { MainContentProps } from '../../models/Main';
import { getSelection } from '../../utils/SelectionUtils';

const Title = () => <div style={{ marginBottom: 10 }}>何らかのメッセージ</div>;

const Body = () => {
  const selection = getSelection('uid');

  if (!selection) return <></>;

  switch (selection.type) {
    case 'song':
      return (
        <>
          {selection.songs
            ? selection.songs.map((song, idx) => (
                <Card key={idx} hoverable={true} cover={<img src={song.work[0].img ? song.work[0].img[0] : ''} />}>
                  <Card.Meta title={song.title} description={song.artist} />
                </Card>
              ))
            : undefined}
        </>
      );
    case 'album':
      return (
        <>
          {selection.albums
            ? selection.albums.map((album, idx) => (
                <Card key={idx} hoverable={true} cover={<img src={album.img ? album.img[0] : ''} />}>
                  <Card.Meta title={album.name} description={album.artist} />
                </Card>
              ))
            : undefined}
        </>
      );
  }
};

const Selection = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Selection;
