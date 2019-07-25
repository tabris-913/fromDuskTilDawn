import { Avatar, Collapse, Descriptions, List, PageHeader, Table } from 'antd';
import * as React from 'react';

import { SiteName } from '../../constants';
import { MainContentProps } from '../../models/Main';
import Main from '../Main';

const Title = () => <></>;

const Body = () => (
  <>
    <Collapse bordered={false} defaultActiveKey={['2']}>
      <Collapse.Panel header="About Manager" key="1">
        <PageHeader title="Profile">
          <Descriptions bordered={true} column={1} size="small" style={{ width: '40%' }}>
            <Descriptions.Item label="Name">T.Black</Descriptions.Item>
            <Descriptions.Item label="Birthday">12/16</Descriptions.Item>
            <Descriptions.Item label="Age">25</Descriptions.Item>
            <Descriptions.Item label="Gender">Male</Descriptions.Item>
            <Descriptions.Item label="Country">Japan</Descriptions.Item>
            <Descriptions.Item label="Occupation">SE</Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <PageHeader title="History">
          <span>
            小学生の時に音楽を音楽として意識し始め、その頃は専ら松田聖子を聴いていた。
            中学に上がると、T.M.Revolutionを聴き始め、それがロックの入り口となった。
            同じく中学生の時にA9（当時はまだアリス九號.名義）にはまり、
            そこからいわゆるヴィジュアル系と呼ばれるジャンルにのめりこんでいった。 X JAPANやDEAD
            ENDを聴き始めたころからヘヴィ・メタルへの関心が高まり、 それと同時に X JAPANやTHE
            ALFEEに影響を与えた洋楽を聴き始めるようになった。 当初はPink FloydやDeep Purple、Led Zeppelin、Kiss、Guns N'
            Rosesなどであった。 そこから次第にハード・ロック／ヘヴィ・メタルの洋楽へと進出していき、
            高校に入学してある程度有名どころを押さえたところで 今度は日本のヘヴィ・メタルも幅広く聴くようになった。
            食わず嫌いなくヘヴィ・メタルのありとあらゆるサブジャンルに手を出し、 雑食性を保ったまま現在に至る。
            音楽を聴くだけではなく、コレクターの血も目覚め始めている。 大学生あたりからレコードにも手を出し始めた。
          </span>
        </PageHeader>
        <PageHeader title="My Top 10 Albums">
          <Table
            columns={[
              { title: 'Artist', dataIndex: 'artist' },
              { title: 'Title', dataIndex: 'title' },
              { title: 'Year', dataIndex: 'year' },
            ]}
            dataSource={[
              { key: 1, artist: 'Slayer', title: 'Reign in Blood', year: 1986 },
              { key: 2, artist: '松田聖子', title: 'Citron', year: 1988 },
              { key: 3, artist: '中森明菜', title: 'Stock', year: 1988 },
              { key: 4, artist: 'Queen', title: 'Innuendo', year: 1991 },
              { key: 5, artist: 'Stratovarius', title: 'Visions', year: 1997 },
              { key: 6, artist: "L'Arc～en～Ciel", title: 'ark', year: 1999 },
              { key: 8, artist: 'Dream Theater', title: 'Metropolis Pt. 2: Scenes from a Memory', year: 1999 },
              { key: 7, artist: 'Rhapsody', title: 'Power of the Dragonflame', year: 2002 },
              { key: 9, artist: 'アリス九號.', title: '絶景色', year: 2006 },
              { key: 10, artist: 'Pathfinder', title: 'Beyond the Space, Beyond the Time', year: 2010 },
            ]}
            size="middle"
            style={{ width: '50%' }}
            pagination={false}
          />
        </PageHeader>
      </Collapse.Panel>
      <Collapse.Panel header="About Site" key="2">
        <PageHeader title={SiteName}>
          <span>
            この名前はabingdon boys schoolの曲「From Dusk Till Dawn」からとりました。
            <br />
            直訳すると“夕暮れから夜明けまで”ですが、普通仕事や学校も終わり自分の時間であるその時に、好きな音楽をじっくり聞いて楽しみたいという思いからつけました。
            <List>
              <List.Item>
                <List.Item.Meta
                  title={<a href="https://youtu.be/G5X6Xwad-dw">abingdon boys school - From Dusk Till Dawn</a>}
                  avatar={<Avatar icon="youtube" />}
                />
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  title={<a href="https://youtu.be/iZzuIrJ0QC8">Genesis - Dusk</a>}
                  avatar={<Avatar icon="youtube" />}
                />
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  title={<a href="https://youtu.be/Qhn1BEmJ97s">Dreamtale - The Dawn</a>}
                  avatar={<Avatar icon="youtube" />}
                />
              </List.Item>
            </List>
          </span>
        </PageHeader>
      </Collapse.Panel>
    </Collapse>
  </>
);

const About = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default About;
