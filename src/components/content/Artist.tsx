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

  const Works = ({ p }: { p: string }) =>
    content && content[p] ? (
      <>
        <Typography.Title level={3} underline={true}>
          {p}
        </Typography.Title>
        <InternalLinkList
          {...props}
          size="small"
          titlePropsName="title"
          source={(content[p] || []).map((uid: string) => {
            const work = getWork(uid);
            return {
              element: work ? { title: `${work.title} (${work.date})` } : undefined,
              linkTo: toPublicUrl(PageName.WORK, undefined, { id: uid }),
            };
          })}
        />
      </>
    ) : (
      <p>なし</p>
    );

  return (
    <>
      {/** logoどうしようか */}
      <Descriptions title="Info" layout="vertical" column={2}>
        {content ? (
          <>
            <Descriptions.Item label="name">{content.name}</Descriptions.Item>
            <Descriptions.Item label="ruby">{content.ruby || ''}</Descriptions.Item>
          </>
        ) : (
          undefined
        )}
      </Descriptions>
      <Works p="albums" />
      <Works p="singles" />
    </>
  );
};

const Artist = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Artist;
