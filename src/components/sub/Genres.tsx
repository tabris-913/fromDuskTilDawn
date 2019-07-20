import { List } from 'antd';
import * as React from 'react';

import Main from '../Main';

import PageName, { toPublicUrl } from '../../constants/PageName';
import { IGenre } from '../../models/Genre';
import { BodyProps, MainContentProps } from '../../models/Main';
import { GenreKeys, getGenre } from '../../utils/GenreUtils';
import { useColor } from '../../utils/HooksUtils';

const Title = () => <div style={{ marginBottom: 10 }}>ジャンル一覧</div>;

const Body = (props: BodyProps) => {
  const ListItem = ({ item }: { item: IGenre }) => {
    const [color, setColor] = useColor();

    return (
      <List.Item
        style={{ backgroundColor: color }}
        onMouseLeave={() => setColor('#fff')}
        onClick={() => props.history.push(toPublicUrl(PageName.GENRE, undefined, { id: item.uid }))}
      >
        <List.Item.Meta title={item.name} description={item.description} />
      </List.Item>
    );
  };

  return (
    <List dataSource={GenreKeys.map(getGenre)} renderItem={item => (!!item ? <ListItem item={item!} /> : undefined)} />
  );
};

const Genres = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Genres;