import { List } from 'antd';
import * as React from 'react';

import Main from '../Main';

import PageName, { toPublicUrl } from '../../constants/PageName';
import { ISelectionListContent } from '../../models/contents/selection';
import { BodyProps, MainContentProps } from '../../models/Main';
import { useColor } from '../../utils/HooksUtils';

const Title = () => <div style={{ marginBottom: 10 }}>なにかしらのテーマに沿って、個人的偏見で曲をセレクトする</div>;

const Body = (props: BodyProps) => {
  const content = props.content.selection.list!;

  const ListItem = ({ uid, item }: { uid: string; item: ISelectionListContent }) => {
    const [color, setColor] = useColor();

    return (
      <List.Item
        onClick={() => props.history.push(toPublicUrl(PageName.SELECTION, undefined, { id: uid }))}
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
      dataSource={Object.entries(content)}
      renderItem={([uid, item]) => (!!item ? <ListItem {...props} uid={uid} item={item} /> : undefined)}
      style={{ width: '40%' }}
    />
  );
};

const Selection = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Selection;
