import { List } from 'antd';
import * as React from 'react';

import Main from '../Main';

import PageName, { toPublicUrl } from '../../constants/PageName';
import { BodyProps, MainContentProps } from '../../models/Main';
import { useColor } from '../../utils/HooksUtils';

const Title = () => (
  <div style={{ marginBottom: 10 }}>
    今後レヴュー予定のアーティストです。
    <br />
    上から順にレヴューしていくつもりですが、気分によって順番が前後する場合があります。
  </div>
);

const ListItems = [{ uid: '', name: '' }];

const Body = (props: BodyProps) => {
  const [backgroundColor, setBackgroundColor] = useColor();

  return (
    <List
      size="small"
      dataSource={ListItems}
      renderItem={item => (
        <List.Item
          key={item!.uid}
          onMouseOver={() => setBackgroundColor('#aaf')}
          onMouseLeave={() => setBackgroundColor('#fff')}
          style={{ backgroundColor: backgroundColor }}
          onClick={() => props.history.push(toPublicUrl(PageName.REVIEW_ARTIST, undefined, { id: item!.uid }))}
        >
          <List.Item.Meta title={item!.name} />
        </List.Item>
      )}
      style={{ width: '40%' }}
    />
  );
};

const ReviewSchedule = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default ReviewSchedule;
