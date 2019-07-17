import { Card } from 'antd';
import * as React from 'react';

import WorksList from './WorksList';

import Main from '../Main';

import { MainContentProps } from '../../models/Main';

const Title = () => (
  <div style={{ marginBottom: 10 }}>
    音楽、主にハード・ロック／ヘヴィ・メタルのレヴューサイト
    <br />
    洋邦問わず、管理人の好みでレヴューしたりしなかったりするサイトです
    <br />
    HR/HM以外にもグラム／プログレ／ヴィジュアル系なども扱っています
  </div>
);

const Body = () => (
  <Card title="What's New?" style={{ width: '100%' }}>
    <Card type="inner" size="small" title="20XX/XX/XX">
      <WorksList
        dataSource={[
          { title: 'title', description: 'description' },
          { title: 'title', description: 'description' },
          { title: 'title', description: 'description' },
          { title: 'title', description: 'description' },
          { title: 'title', description: 'description' },
        ]}
      />
    </Card>
  </Card>
);

const Selection = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Selection;
