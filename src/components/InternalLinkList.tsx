import { List } from 'antd';
import * as React from 'react';

import { MainContentProps } from '../models/Main';
import { useColor } from '../utils/HooksUtils';

interface Props extends MainContentProps {
  titlePropsName: string;
  descriptionPropsName?: string;
  source?: Array<{
    element: any;
    linkTo: string;
  }>;
  size?: 'default' | 'large' | 'small';
}

interface ItemProps {
  title: string;
  description?: string;
  linkTo: string;
}

const InternalLinkList = (props: Props) => {
  const ListItem = (itemProps: ItemProps) => {
    const [color, setColor] = useColor();
    const listItemParam =
      itemProps.linkTo === ''
        ? { style: { backgroundColor: color } }
        : {
            onMouseOver: () => setColor('#aaf'),
            onMouseLeave: () => setColor('#fff'),
            onClick: () => props.history.push(itemProps.linkTo),
            style: { backgroundColor: color, cursor: 'pointer' },
          };

    return (
      <List.Item style={{ backgroundColor: color }} {...listItemParam}>
        <List.Item.Meta title={itemProps.title} description={itemProps.description} style={{ paddingLeft: 10 }} />
      </List.Item>
    );
  };

  return (
    <List
      dataSource={props.source || []}
      renderItem={(item, idx) => (
        <ListItem
          key={idx}
          title={item.element[props.titlePropsName]}
          description={!!props.descriptionPropsName ? item.element[props.descriptionPropsName] : undefined}
          linkTo={item.linkTo}
        />
      )}
      style={{ width: '50%' }}
      size={props.size}
    />
  );
};

export default InternalLinkList;
