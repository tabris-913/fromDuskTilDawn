import { Button, Card, Col, Row } from 'antd';
import * as React from 'react';

import Main from '../Main';

import { alphabet, hiragana, initialString } from '../../constants/Misc';
import PageName, { toPublicUrl } from '../../constants/PageName';
import { IArtistListContent } from '../../models/contents/artist';
import { ListBodyProps, MainContentProps } from '../../models/Main';
import { sortByName } from '../../utils/ArtistUtils';

const Title = () => <div style={{ marginBottom: 10 }}>アーティスト一覧</div>;

const Body = (props: ListBodyProps<IArtistListContent>) => {
  const [localState, setLocalState] = React.useState('*');

  const List: { [v: string]: IArtistListContent[] } = {};

  React.useState(() => {
    Object.entries(props.list).map(([key, val]) => {
      for (const initial of val.initial) {
        if (Object.keys(List).includes(initial)) List[initial].push({ ...val, uid: key });
        else List[initial] = [{ ...val, uid: key }];
      }
    });
    Object.entries(List).map(([k, v]) => {
      List[k] = sortByName(v);
    });
  });

  const SelectButton = () => (
    <Row type="flex" style={{ marginBottom: 15 }}>
      <Col>
        <Row type="flex" justify="space-around">
          {alphabet.split('').map(s => (
            <Col key={s}>
              <Button onClick={() => setLocalState(s)}>{s}</Button>
            </Col>
          ))}
        </Row>
      </Col>
      <Col span={12}>
        <Row type="flex" justify="space-between">
          {hiragana.split('').map(s => (
            <Col key={s}>
              <Button onClick={() => setLocalState(s)}>{s}</Button>
            </Col>
          ))}
          <Col key="other">
            <Button onClick={() => setLocalState('other')}>その他</Button>
          </Col>
          <Col key="*">
            <Button onClick={() => setLocalState('*')}>選択解除</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );

  const ArtistList = () => (
    <>
      {initialString
        .split('')
        .filter(s => (localState === '*' ? true : s === localState))
        .filter(s => !!List[s])
        .map(s => [s, List[s]] as [string, IArtistListContent[]])
        .map(([key, value], idx) => (
          <Card title={key} key={idx} style={{ margin: 4 }}>
            {value.map((e, idx2) => (
              <p
                key={idx2}
                onClick={() => props.history.push(toPublicUrl(PageName.ARTIST, undefined, { id: e.uid }))}
                style={{ cursor: 'pointer' }}
              >
                {e.name}
                {e.en}
              </p>
            ))}
          </Card>
        ))}
    </>
  );

  return (
    <>
      <SelectButton />
      <ArtistList />
    </>
  );
};

const ArtistList = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default ArtistList;
