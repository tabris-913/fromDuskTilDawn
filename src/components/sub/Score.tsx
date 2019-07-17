import { Button, Card, Col, InputNumber, Row } from 'antd';
import * as R from 'ramda';
import * as React from 'react';

import Main from '../Main';

import PageName, { toPublicUrl } from '../../constants/PageName';
import { BodyProps, MainContentProps } from '../../models/Main';
import { IWork } from '../../models/Score';

const Title = () => <div style={{ marginBottom: 10 }}>ジャンルや過去にとらわれず、個人的な好み度だけを点数化。</div>;

const ScoreObj: { [v: string]: IWork[] } = {};
[{ title: 'aaaa', artist: 'bbbb', score: 88 }].map(o => {
  if (Object.keys(ScoreObj).includes(o.score.toString())) ScoreObj[o.score.toString()].push(o);
  else ScoreObj[o.score.toString()] = [o];
  return null;
});

const Body = (props: BodyProps) => {
  const [localState, setLocalState] = React.useState<number | undefined>();

  const SelectButton = () => {
    const [score, setScore] = React.useState<number | undefined>(localState);

    return (
      <Row type="flex">
        <Col>
          <InputNumber value={score} min={0} max={99} onChange={v => setScore(v)} />
        </Col>
        <Col>
          <Button onClick={() => setLocalState(score)}>確定</Button>
        </Col>
        <Col>
          <Button
            onClick={() => {
              setScore(undefined);
              setLocalState(undefined);
            }}
          >
            クリア
          </Button>
        </Col>
      </Row>
    );
  };

  const makeCard = (score: number) => (
    <Card title={score} key={score} style={{ margin: 4 }}>
      {ScoreObj[score.toString()].map((e, idx) => (
        <p key={idx} onClick={() => props.history.push(toPublicUrl(PageName.TOP, undefined, { id: 0 }))}>
          {e.title} - {e.artist}
        </p>
      ))}
    </Card>
  );

  const display: React.ReactNode[] = [];
  if (R.isNil(localState)) {
    R.range(0, 100).map((e, idx) => {
      if (Object.keys(ScoreObj).includes(idx.toString())) {
        display.push(makeCard(idx));
      }
      return null;
    });
  } else if (Object.keys(ScoreObj).includes(localState.toString())) display.push(makeCard(localState));

  return (
    <>
      <SelectButton />
      {display}
    </>
  );
};

const Score = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Score;
