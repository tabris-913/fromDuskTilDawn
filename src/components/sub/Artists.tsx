import { Button, Card, Col, Row } from 'antd';
import * as React from 'react';

import Main from '../Main';

import * as Artists from '../../constants/json/Artist.json';
import { alphabet, hiragana, initialString } from '../../constants/Misc';
import PageName, { toPublicUrl } from '../../constants/PageName';
import { IArtist } from '../../models/Artist';
import { BodyProps, MainContentProps } from '../../models/Main';
import { sortByName } from '../../utils/ArtistUtils';
import { convertK2H } from '../../utils/MiscUtils';

const Title = () => <div style={{ marginBottom: 10 }}>アーティスト一覧</div>;

const Body = (props: BodyProps) => {
  const [localState, setLocalState] = React.useState('*');

  const List: { [v: string]: IArtist[] } = {};
  Object.entries(Artists.artists as { [v: string]: IArtist }).map(([key, val]) => {
    const nameInitial = val.name[0].toUpperCase();
    const rubyInitial = !!val.ruby4Sort ? val.ruby4Sort[0].toUpperCase() : '';

    /**
     * 1. initial があればそれを使う
     * 2. name の頭文字が initialString にあればそれを使う
     * 3. name の頭文字がカタカナならひらがなに変換して，initialString にあればそれを使う
     * 4. ruby の頭文字が initialString にあればそれを使う
     * 5. ruby の頭文字がカタカナならひらがなに変換して，initialString にあればそれを使う
     * 6. それ以外は空文字 --> other
     */
    const initial = !!val.initial
      ? val.initial
      : initialString.includes(nameInitial)
      ? nameInitial
      : initialString.includes(convertK2H(nameInitial))
      ? convertK2H(nameInitial)
      : initialString.includes(rubyInitial)
      ? rubyInitial
      : initialString.includes(convertK2H(rubyInitial))
      ? convertK2H(rubyInitial)
      : '';

    if (initial === '') {
      if (Object.keys(List).includes('other')) List.other.push(val);
      else List.other = [val];
    } else {
      if (Object.keys(List).includes(initial)) List[initial].push(val);
      else List[initial] = [val];
    }

    return null;
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
        .map(s => [s, sortByName(List[s])] as [string, IArtist[]])
        .map(([key, value], idx) => (
          <Card title={key} key={idx} style={{ margin: 4 }}>
            {(value as IArtist[]).map((e, idx2) => (
              <p
                key={idx2}
                onClick={() => props.history.push(toPublicUrl(PageName.ARTIST, undefined, { id: e.uid }))}
                style={{ cursor: 'pointer' }}
              >
                {e.name}
                {!!e.ruby ? ` - ${e.ruby}` : ''}
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

const Artist = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Artist;
