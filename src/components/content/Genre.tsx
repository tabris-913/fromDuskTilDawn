import { Card } from 'antd';
import * as React from 'react';

import Main from '../Main';

import { MainContentProps } from '../../models/Main';

const Title = () => <div style={{ marginBottom: 10 }}>何らかのメッセージ</div>;

const Body = () => (
  <Card title="Genres" style={{ width: '100%' }}>
    {}
  </Card>
);

const Genre = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Genre;
