import { Button, Card, Col, Row } from 'antd';
import * as React from 'react';

import Main from '../Main';

import { alphabet, hiragana, initialString } from '../../constants/Misc';
import PageName, { toPublicUrl } from '../../constants/PageName';
import { IArtistListContent } from '../../models/contents/artist';
import { BodyProps, MainContentProps } from '../../models/Main';
import { sortByName } from '../../utils/ArtistUtils';

interface State {
  selectedInitial: string;
  list: { [v: string]: IArtistListContent[] };
}

const Title = () => <div style={{ marginBottom: 10 }}>アーティスト一覧</div>;

export const Body = (props: BodyProps) => {
  const [localState, setLocalState] = React.useState<State>({ selectedInitial: '*', list: {} });

  React.useState(() => {
    Object.entries(props.content.artist.list!).map(([key, val]) => {
      for (const initial of val.initial) {
        if (Object.keys(localState.list).includes(initial)) localState.list[initial].push({ ...val, uid: key });
        else localState.list[initial] = [{ ...val, uid: key }];
      }
    });
    Object.entries(localState.list).map(([k, v]) => {
      localState.list[k] = sortByName(v);
    });
  });

  const SelectButton = () => (
    <Row type="flex" style={{ marginBottom: 15 }}>
      <Col>
        <Row type="flex" justify="space-around">
          {alphabet.split('').map(s => (
            <Col key={s}>
              <Button onClick={() => setLocalState({ ...localState, selectedInitial: s })}>{s}</Button>
            </Col>
          ))}
        </Row>
      </Col>
      <Col span={12}>
        <Row type="flex" justify="space-between">
          {hiragana.split('').map(s => (
            <Col key={s}>
              <Button onClick={() => setLocalState({ ...localState, selectedInitial: s })}>{s}</Button>
            </Col>
          ))}
          <Col key="other">
            <Button onClick={() => setLocalState({ ...localState, selectedInitial: 'other' })}>その他</Button>
          </Col>
          <Col key="*">
            <Button onClick={() => setLocalState({ ...localState, selectedInitial: '*' })}>選択解除</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );

  const ArtistListBody = () => (
    <>
      {initialString
        .split('')
        .filter(s => (localState.selectedInitial === '*' ? true : s === localState.selectedInitial))
        .filter(s => !!localState.list[s])
        .map(s => [s, localState.list[s]] as [string, IArtistListContent[]])
        .map(([key, value], idx) => (
          <Card title={key} key={idx} style={{ margin: 4 }}>
            {value.map((e, idx2) => (
              <p
                key={idx2}
                onClick={() => props.history.push(toPublicUrl(PageName.ARTIST, undefined, { id: e.uid }))}
                style={{ cursor: 'pointer' }}
              >
                {e.name} {e.name !== e.en ? `(${e.en})` : undefined}
              </p>
            ))}
          </Card>
        ))}
    </>
  );

  return (
    <>
      <SelectButton />
      <ArtistListBody />
    </>
  );
};

const ArtistList = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default ArtistList;
