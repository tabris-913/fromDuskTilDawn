import { Card } from 'antd';
import * as React from 'react';

import Main from '../Main';

import ISelection from '../../models/contents/selection';
import { BodyProps, MainContentProps } from '../../models/Main';

const Title = () => <div style={{ marginBottom: 10 }}>何らかのメッセージ</div>;

const Body = (props: BodyProps<ISelection>) => {
  const selection = props.content;

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
            ? (selection.albums as any[]).map((album, idx) => (
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
