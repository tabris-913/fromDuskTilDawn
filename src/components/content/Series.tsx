import { Avatar, Col, Collapse, Divider, Icon, List, Row, Typography } from 'antd';
import * as R from 'ramda';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import Main from '../Main';

import PageName, { toPublicUrl } from '../../constants/PageName';
import { IDispatchProps as SeriesContentPageDispatchProps } from '../../containers/pages/content/seriesContent';
import { BodyProps, MainContentProps, TitleProps } from '../../models/Main';
import InternalLinkList from '../InternalLinkList';

const Title = (props: TitleProps) => {
  const series = { content: {} as any };
  const content =
    series && props.query.page && series.content.length > 0
      ? ({} as any) // getSeriesContent(series.content[props.query.page - 1])
      : undefined;

  return (
    <div style={{ marginBottom: 10 }}>
      {content && <ReactMarkdown source={content.description} linkTarget="_blank" />}
    </div>
  );
};

const Body = (props: BodyProps & Partial<SeriesContentPageDispatchProps>) => {
  const content = props.content.series.content!;
  const doc = props.content.series.doc!;
  const works = props.content.series.works!;
  const workDoc = props.content.work.doc;
  const arrowPos = 'left'; // idx % 2 === 0 ? 'left' : 'right';

  return (
    <>
      <Collapse
        expandIconPosition="left"
        expandIcon={({ isActive }) => <Icon type="right" rotate={isActive ? 90 : arrowPos === 'left' ? 0 : 180} />}
        bordered={true}
        accordion={true}
      >
        {content.work_list.map((work, idx) => {
          const workContent = works[work.uid];
          const img = workContent && workContent.img ? `${process.env.REACT_APP_IMG_SRC}${workContent.img[0]}` : '';
          if (img === '') console.log("image can't get");

          return (
            <Collapse.Panel
              header={
                <Row
                  onClick={() =>
                    props.actions!.getWork({
                      artistUid: work.workArtistId,
                      workUid: work.uid,
                    })
                  }
                >
                  <Col>「{workContent.name}」</Col>
                  {workContent.artist && !R.isEmpty(workContent.artist) ? (
                    <Col style={{ color: '#888' }}>{workContent.artist.map((e2: any) => '').join('・')}</Col>
                  ) : (
                    undefined
                  )}
                  {workContent.date ? <Col>release date: {workContent.date}</Col> : undefined}
                </Row>
              }
              key={work.uid}
              style={{ textAlign: arrowPos }}
            >
              <List style={arrowPos === 'left' ? { paddingLeft: 25 } : { paddingRight: 25 }}>
                <Row>
                  <Col>
                    <Avatar src={img} icon="question" shape="square" size={160} />
                  </Col>
                  <Col>{work.comment}</Col>
                  <Col>
                    {workDoc && workDoc.uid === work.uid
                      ? work.song_list.map((song: any) => (
                          <List.Item key={song.track_no}>
                            <Row style={{ textAlign: arrowPos }}>
                              <Col>
                                <List.Item.Meta
                                  title={
                                    <Row>
                                      <Col>
                                        {song.track_no}.{' '}
                                        <span style={{ fontWeight: 'bold' }}>
                                          {workDoc.list[song.disk_no ? song.disk_no - 1 : 0].list[song.track_no - 1]}
                                        </span>
                                      </Col>
                                      <Col style={{ color: '#888', paddingLeft: 20 }}>
                                        {(song.artist || []).map((e: any) => '').join('・')}
                                      </Col>
                                      <Col style={{ color: '#888', paddingLeft: 20 }}>{song.explanation}</Col>
                                    </Row>
                                  }
                                />
                              </Col>
                              <Col style={{ paddingLeft: 20 }}>{song.comment}</Col>
                            </Row>
                          </List.Item>
                        ))
                      : undefined}
                  </Col>
                </Row>
              </List>
            </Collapse.Panel>
          );
        })}
      </Collapse>
      <Divider />
      <Typography.Title level={3}>関連コンテンツ</Typography.Title>
      <InternalLinkList
        {...props}
        source={
          content
            ? doc.content
                .map((e, idx) => ({ e: e, idx: idx }))
                .filter(({ e, idx }) => e.uid !== props.query.id)
                .map(({ e, idx }) => {
                  return {
                    element: { title: e.name },
                    linkTo: toPublicUrl(PageName.SERIES_CONTENT, [doc.uid as string], { id: e.uid }),
                  };
                })
            : undefined
        }
        titlePropsName="title"
      />
    </>
  );
};

const Series = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Series;
