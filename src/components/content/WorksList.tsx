import { Avatar, List } from 'antd';
import * as React from 'react';
import { IListItemExtra } from '../../models/ListItem';

interface Props {
  dataSource: IListItemExtra[];
}

const WorksList = (props: Props) => (
  <List
    dataSource={props.dataSource}
    grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}
    size="small"
    renderItem={(item, idx) => (
      <List.Item
        key={idx}
        extra={<Avatar src={item.src} icon="question" shape="square" size={100} />}
        style={{ width: '50%' }}
      >
        <List.Item.Meta
          title={<span style={{ fontWeight: 'bold', fontSize: 'large' }}>{item.title}</span>}
          description={item.description}
        />
      </List.Item>
    )}
  />
);

export default WorksList;
