import { List } from 'antd';
import * as React from 'react';

import Main from '../Main';

import PageName, { toPublicUrl } from '../../constants/PageName';
import { IGenreListContent } from '../../models/contents/genre';
import { BodyProps, MainContentProps } from '../../models/Main';
import { useColor } from '../../utils/HooksUtils';

const Title = () => <div style={{ marginBottom: 10 }}>ジャンル一覧</div>;

const Body = (props: BodyProps) => {
  const content = props.content.genre.list!;

  const ListItem = ({ uid, item }: { uid: string; item: IGenreListContent }) => {
    const [color, setColor] = useColor();

    return (
      <List.Item
        style={{ backgroundColor: color }}
        onMouseLeave={() => setColor('#fff')}
        onClick={() => props.history.push(toPublicUrl(PageName.GENRE, undefined, { id: uid }))}
      >
        <List.Item.Meta title={`${item.name} ${item.en ? `(${item.en})` : undefined}`} description={item.description} />
      </List.Item>
    );
  };

  return (
    <List
      dataSource={Object.entries(content)}
      renderItem={([uid, item]) => (!!item ? <ListItem uid={uid} item={item!} /> : undefined)}
    />
  );
};

const Genres = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Genres;
