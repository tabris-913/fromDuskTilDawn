import { Descriptions, Typography } from 'antd';
import * as React from 'react';

import InternalLinkList from '../InternalLinkList';
import Main from '../Main';

import PageName, { toPublicUrl } from '../../constants/PageName';
import { BodyProps, MainContentProps } from '../../models/Main';

const Title = () => <div style={{ marginBottom: 10 }}>{}</div>;

const Body = (props: BodyProps) => {
  const content = props.content.artist.doc!;
  const works = props.content.work.list!;

  const Works = ({ p }: { p: 'singles' | 'albums' | 'others' }) => (
    <div style={{ marginLeft: 10 }}>
      <Typography.Title level={4} underline={true} style={{ marginTop: 0 }}>
        {p}
      </Typography.Title>
      {works && works[p] && Object.keys(works[p]).length > 0 ? (
        <>
          <InternalLinkList
            {...props}
            size="small"
            titlePropsName="title"
            source={Object.entries(works[p]).map(([uid, work]) => {
              return {
                element: { title: work ? `${work.name} (${work.date})` : uid },
                linkTo: work ? (work.review_done ? toPublicUrl(PageName.WORK, undefined, { id: work.uid }) : '') : '',
              };
            })}
          />
        </>
      ) : (
        <p>no {p}</p>
      )}
    </div>
  );

  return (
    <>
      {/** logoどうしようか */}
      {content ? (
        <Descriptions title="Info" bordered={true} column={1} style={{ width: '50%' }}>
          <Descriptions.Item label="名前">{content.name}</Descriptions.Item>
          <Descriptions.Item label="読み">{content.ruby4Sort || ''}</Descriptions.Item>
        </Descriptions>
      ) : (
        undefined
      )}
      <Typography.Title level={3} style={{ marginTop: 20 }}>
        Works
      </Typography.Title>
      <Works p="albums" />
      <Works p="singles" />
      <Works p="others" />
      {content && content.related ? (
        <>
          <Typography.Title level={3} style={{ marginTop: 20 }}>
            関連アーティスト
          </Typography.Title>
          <div style={{ marginLeft: 10 }}>
            <InternalLinkList
              {...props}
              source={content.related.map(uid => ({
                element: { uid: '' },
                linkTo: toPublicUrl(PageName.ARTIST, undefined, { id: uid }),
              }))}
              titlePropsName="name"
            />
          </div>
        </>
      ) : (
        undefined
      )}
    </>
  );
};

const Artist = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Artist;
