import { Divider, List } from 'antd';
import * as React from 'react';

import Main from '../Main';

import PageName, { toPublicUrl } from '../../constants/PageName';
import IContent from '../../models/contents/content';
import { Uid } from '../../models/Id';
import { ILocalLink } from '../../models/ListItem';
import { BodyProps, MainContentProps } from '../../models/Main';
import { useColor } from '../../utils/HooksUtils';

interface ListItemProps {
  item: ILocalLink;
  idx: number;
  toMove: () => void;
}

const Title = () => (
  <div style={{ marginBottom: 10 }}>
    レヴューは作品の善し悪しを決めるものではなく，完全に管理人の好みかどうかになります．
  </div>
);

const ListItem = ({ item, idx, toMove }: ListItemProps) => {
  const [backgroundColor, setBackgroundColor] = useColor();

  return (
    <List.Item
      key={idx}
      onClick={() => toMove()}
      onMouseOver={() => setBackgroundColor('#bbf')}
      onMouseLeave={() => setBackgroundColor('#fff')}
      style={{ backgroundColor: backgroundColor }}
    >
      <List.Item.Meta title={item.title} description={item.description} />
    </List.Item>
  );
};

const Body = (props: BodyProps<IContent<Uid>>) => (
  <>
    <List
      dataSource={[
        { title: 'アーティスト一覧', description: 'Artists', address: PageName.REVIEW_ARTIST },
        { title: 'ジャンル別', description: 'Genres', address: PageName.REVIEW_GENRES },
        { title: 'スコア別', description: 'Scores', address: PageName.SCORE },
      ]}
      renderItem={(item: ILocalLink, idx) => (
        <ListItem toMove={() => props.history.push(toPublicUrl(item.address || PageName.TOP))} item={item} idx={idx} />
      )}
      bordered={true}
      style={{ width: '30%' }}
    />
    <Divider />
    <List
      dataSource={[
        { title: 'レビュー予定', description: 'Review Schedule', address: PageName.REVIEW_SCHEDULE },
        { title: '新譜', description: 'New Release', address: PageName.NEW_RELEASE },
      ]}
      renderItem={(item: ILocalLink, idx) => (
        <ListItem toMove={() => props.history.push(toPublicUrl(item.address || PageName.TOP))} item={item} idx={idx} />
      )}
      style={{ width: '30%' }}
      bordered={true}
    />
  </>
);

const ReviewTop = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default ReviewTop;
