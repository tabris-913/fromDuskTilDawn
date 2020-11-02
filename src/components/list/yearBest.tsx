import { Avatar, Card, Col, Row } from 'antd';
import * as R from 'ramda';
import * as React from 'react';

import Main from '../Main';

import PageName, { toPublicUrl } from '../../constants/PageName';
import { BodyProps, MainContentProps } from '../../models/Main';
import { useColor } from '../../utils/HooksUtils';

const Title = () => (
  <div style={{ marginBottom: 10 }}>
    各年のベストアルバム、ベストチューンを選出
    <br />
    ベストアルバムやセルフカヴァーは対象外
  </div>
);

const Body = (props: BodyProps) => {
  const content = props.content.yearBest.list!;

  const ListItem = ({ item }: { item: number }) => {
    const [color, setColor] = useColor();

    return (
      <Card
        hoverable={true}
        cover={<Avatar size={160} shape="square" />}
        onClick={() => props.history.push(toPublicUrl(PageName.YEAR_BEST, undefined, { id: item }))}
        onMouseLeave={() => setColor('#fff')}
        onMouseOver={() => setColor('#aaf')}
        style={{ backgroundColor: color }}
      >
        <Card.Meta title={item} style={{ textAlign: 'center' }} />
      </Card>
    );
  };

  return (
    <Row justify="space-between">
      {R.range(1960, 2019)
        .reverse()
        .map(item =>
          content.includes(item) ? (
            <Col key={item} style={{ margin: 4 }}>
              <ListItem {...props} item={item} />
            </Col>
          ) : (
            undefined
          )
        )}
    </Row>
  );
};

const YearBest = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default YearBest;
