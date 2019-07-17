import { Card } from 'antd';
import * as React from 'react';

import WorksList from '../content/WorksList';
import Main from '../Main';

import { MainContentProps } from '../../models/Main';

const Title = () => <div style={{ marginBottom: 10 }}>管理人が気になる発売予定の作品達</div>;

const Body = () => (
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
);

const NewRelease = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default NewRelease;
