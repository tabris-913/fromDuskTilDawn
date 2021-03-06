import { Card } from 'antd';
import * as React from 'react';

import WorksList from '../content/WorksList';
import Main from '../Main';

import { BodyProps, MainContentProps } from '../../models/Main.js';

const Title = () => (
  <div style={{ marginBottom: 10 }}>
    音楽、主にハード・ロック／ヘヴィ・メタルのレヴューサイト
    <br />
    洋邦問わず、管理人の好みでレヴューしたりしなかったりするサイトです
    <br />
    HR/HM以外にもグラム／プログレ／ヴィジュアル系なども扱っています
  </div>
);

// "20XX/XX/XX": [
//   {
//     "title": "title",
//     "description": "xxxxxx"
//   },
//   {
//     "title": "title",
//     "description": "xxxxxx"
//   },
//   {
//     "title": "title",
//     "description": "xxxxxx"
//   },
//   {
//     "title": "title",
//     "description": "xxxxxx"
//   },
//   {
//     "title": "title",
//     "description": "xxxxxx"
//   }
// ]

const Body = (props: BodyProps) => (
  <Card title="What's New?" style={{ width: '100%' }}>
    {Object.entries(props.content.topTopic.reviewed!).map(([key, val], idx) => (
      <Card type="inner" size="small" title={key} style={{ margin: '8px 0px' }} key={idx}>
        {Array.isArray(val) ? (
          <WorksList dataSource={val} />
        ) : (
          val.split('<br />').map((e, idx2) => <p key={idx2}>{e}</p>)
        )}
      </Card>
    ))}
  </Card>
);

const Top = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Top;
