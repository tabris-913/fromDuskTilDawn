import { Card } from 'antd';
import * as React from 'react';

import Main from '../Main';

import { BodyProps, MainContentProps, TitleProps } from '../../models/Main';

const Title = (props: TitleProps) => <div style={{ marginBottom: 10 }}>{props.content.selection.doc!.description}</div>;

const Body = (props: BodyProps) => {
  const selection = props.content.selection.doc!;

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
