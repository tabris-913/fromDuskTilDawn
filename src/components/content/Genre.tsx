import { Card } from 'antd';
import * as React from 'react';

import { Body as ArtistBody } from '../list/artist';
import Main from '../Main';

import { BodyProps, MainContentProps, TitleProps } from '../../models/Main';

const Title = (props: TitleProps) => <div style={{ marginBottom: 10 }}>{props.content.genre.doc!.description}</div>;

const Body = (props: BodyProps) => {
  const content = props.content.genre.doc!;

  return (
    <Card title={content.name} style={{ width: '100%' }}>
      <ArtistBody
        {...props}
        content={{
          ...props.content,
          artist: {
            ...props.content.artist,
            list: Object.entries(props.content.artist.list!)
              .filter(([uid]) => content.list.includes(uid))
              .reduce((prev, [curKey, curVal]) => ({ ...prev, [curKey]: curVal }), {}),
          },
        }}
      />
    </Card>
  );
};

const Genre = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Genre;
