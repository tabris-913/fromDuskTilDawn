import { Avatar, Carousel, Collapse, Divider, List, Typography } from 'antd';
import * as React from 'react';

import Main from '../Main';

import PageName, { toPublicUrl } from '../../constants/PageName';
import IYearBest from '../../models/contents/yearBest';
import { BodyProps, MainContentProps, TitleProps } from '../../models/Main';
import { getWork } from '../../utils/WorkUtils';
import InternalLinkList from '../InternalLinkList';

const Title = (props: TitleProps) => <div style={{ marginBottom: 10 }}>{props.query.id} 年</div>;

const Body = (props: BodyProps<IYearBest>) => {
  const content = props.content;

  const monthsKey = Object.keys((content && content.month) || {});
  monthsKey.sort((a, b) => (Number(a) > Number(b) ? 1 : -1));

  const InnerTitle = ({ title }: { title: string }) => (
    <Typography.Title level={4} underline={true}>
      {title}
    </Typography.Title>
  );

  return (
    <>
      <Carousel autoplay={true}>{content && content.covers.map((src, idx) => <Avatar src={src} key={idx} />)}</Carousel>
      <Collapse activeKey={['album', 'tunes', 'month', 'other']}>
        <Collapse.Panel header={`Best Albums of ${props.query.id}`} key="album" />
        {/** 新しいcomponentを作る */}
        {/** toPublicUrl(PageName.BEST_ALBUM, undefined, { id: ??? }) */}
        <Collapse.Panel header={`Best Tunes of ${props.query.id}`} key="tune" />
        {/** toPublicUrl(PageName.BEST_TUNE, undefined, { id: ??? }) */}
        <Collapse.Panel header="Every Months' Best Albums" key="month">
          {monthsKey.map(key =>
            content ? (
              <InternalLinkList
                {...props}
                size="small"
                source={content.month[key].map(w => ({
                  element: getWork(w),
                  linkTo: toPublicUrl(PageName.WORK, undefined, { id: w }),
                }))}
                titlePropsName="title"
              />
            ) : (
              undefined
            )
          )}
        </Collapse.Panel>
        <Collapse.Panel header="Other Awards" key="other">
          <InnerTitle title="Best Compilation Albums" />
          <InternalLinkList
            {...props}
            size="small"
            titlePropsName="title"
            source={
              (content &&
                content.compilations.map(uid => {
                  const work = getWork(uid);
                  return {
                    element: work ? { title: `${work.name} (artist names)` } : work,
                    linkTo: toPublicUrl(PageName.WORK, undefined, { id: uid }),
                  };
                })) ||
              []
            }
          />
          <Divider />
          <InnerTitle title="Most Amazing Topics" />
          <List
            size="small"
            dataSource={(content && content.amazingTopics) || []}
            renderItem={(topic, idx) => <List.Item key={`topics.${idx}`}>{topic}</List.Item>}
          />
          <Divider />
          <InnerTitle title="Brightest Hopes" />
          <InternalLinkList
            {...props}
            source={
              (content &&
                content.brightestHopes.map(uid => ({
                  element: { uid: '' },
                  linkTo: toPublicUrl(PageName.ARTIST, undefined, { id: uid }),
                }))) ||
              []
            }
            titlePropsName="name"
            size="small"
          />
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

const YearBest = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default YearBest;
