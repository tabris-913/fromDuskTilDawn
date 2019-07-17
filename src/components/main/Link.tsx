import { Avatar, List } from 'antd';
import * as React from 'react';

import { ILink } from '../../models/ListItem';
import { MainContentProps } from '../../models/Main';
import Main from '../Main';

const Title = () => <></>;

const LinkList: ILink[] = [
  { title: 'WatchMojo', address: 'https://www.youtube.com/user/WatchMojo', description: 'YouTube', icon: 'youtube' },
  { title: 'この曲を聴け！', address: 'http://hvymetal.com/' },
  { title: 'METALGATE', address: 'http://www.metalgate.jp/' },
  { title: '悶絶メタルのページ', address: 'http://mmpk.web.fc2.com/' },
  {
    title: 'METALLUM',
    address: 'https://www.metal-archives.com/',
    src: 'https://www.metal-archives.com/css/default/images/smallerlogo.jpg',
  },
  {
    title: 'METAL KINGDOM',
    address: 'https://www.metalkingdom.net/',
    src: 'https://www.metalkingdom.net/notice/banners/b5.gif',
  },
  { title: 'Xametal.Net', address: 'http://www.xametal.net/impressions/' },
];

const Body = () => (
  <List
    itemLayout="horizontal"
    dataSource={LinkList}
    renderItem={item => (
      <List.Item extra={item.src ? <img src={item.src} alt="" /> : undefined}>
        <List.Item.Meta
          title={
            <a href={item.address} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          }
          avatar={<Avatar icon={item.icon} />}
          description={item.description}
        />
      </List.Item>
    )}
  />
);

const Link = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Link;
