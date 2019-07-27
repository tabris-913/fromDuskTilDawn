import { Descriptions, Typography } from 'antd';
import * as React from 'react';

import InternalLinkList from '../InternalLinkList';
import Main from '../Main';

import PageName, { toPublicUrl } from '../../constants/PageName';
import { BodyProps, MainContentProps } from '../../models/Main';
import { getArtist } from '../../utils/ArtistUtils';
import { getWork } from '../../utils/WorkUtils';

const Title = () => <div style={{ marginBottom: 10 }}>{}</div>;

const Body = (props: BodyProps) => {
  const content = getArtist(props.query.id || '');

  const Works = ({ p }: { p: string }) => (
    <div style={{ marginLeft: 10 }}>
      <Typography.Title level={4} underline={true} style={{ marginTop: 0 }}>
        {p}
      </Typography.Title>
      {content && content[p] ? (
        <>
          <InternalLinkList
            {...props}
            size="small"
            titlePropsName="title"
            source={(content[p] || []).map((uid: string) => {
              const work = getWork(uid);
              return {
                element: { title: work ? `${work.title} (${work.date})` : uid },
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
                element: getArtist(uid),
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
