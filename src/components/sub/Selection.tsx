import { List } from 'antd';
import * as React from 'react';

import Main from '../Main';

import PageName, { toPublicUrl } from '../../constants/PageName';
import { ISelection } from '../../models/content/Selection';
import { BodyProps, MainContentProps } from '../../models/Main';
import { useColor } from '../../utils/HooksUtils';
import { getSelection, SelectionKeys } from '../../utils/SelectionUtils';

const Title = () => <div style={{ marginBottom: 10 }}>なにかしらのテーマに沿って、個人的偏見で曲をセレクトする</div>;

const Body = (props: BodyProps) => {
  const ListItem = ({ item }: { item: ISelection }) => {
    const [color, setColor] = useColor();

    return (
      <List.Item
        onClick={() => props.history.push(toPublicUrl(PageName.SELECTION, undefined, { id: item.uid }))}
        style={{ backgroundColor: color }}
        onMouseOver={() => setColor('#aaf')}
        onMouseLeave={() => setColor('#fff')}
      >
        <List.Item.Meta title={item.name} description={item.description} />
      </List.Item>
    );
  };

  return (
    <List
      size="small"
      dataSource={SelectionKeys.map(getSelection)}
      renderItem={item => (!!item ? <ListItem {...props} item={item!} /> : undefined)}
      style={{ width: '40%' }}
    />
  );
};

const Selection = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Selection;
