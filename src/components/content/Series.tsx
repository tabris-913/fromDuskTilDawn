import { Avatar, Col, Collapse, Divider, Icon, List, Row, Typography } from 'antd';
import * as R from 'ramda';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import Main from '../Main';

import PageName, { toPublicUrl } from '../../constants/PageName';
import { BodyProps, MainContentProps, TitleProps } from '../../models/Main';
import { getArtistName } from '../../utils/ArtistUtils';
import { getSeriesContent } from '../../utils/SeriesContentUtils';
import { getSeries } from '../../utils/SeriesUtils';
import { getWorks } from '../../utils/WorkUtils';
import InternalLinkList from '../InternalLinkList';

const Title = (props: TitleProps) => {
  const series = getSeries(props.query.id || '');
  const content =
    series && props.query.page && series.content.length > 0
      ? getSeriesContent(series.content[props.query.page - 1])
      : undefined;

  return (
    <div style={{ marginBottom: 10 }}>
      {content && <ReactMarkdown source={content.description} linkTarget="_blank" />}
    </div>
  );
};

const Body = (props: BodyProps) => {
  const series = getSeries(props.query.id || '');
  const content =
    series && props.query.page && series.content.length > 0
      ? getSeriesContent(series.content[props.query.page - 1])
      : undefined;

  return (
    <>
      {content &&
        content.work_list.map((work, idx) => {
          const arrowPos = 'left'; // idx % 2 === 0 ? 'left' : 'right';
          const works = getWorks(work.uid);
          const img = works && works.img ? `${process.env.REACT_APP_IMG_SRC}${works.img[0]}` : '';
          if (img === '') console.log("image can't get");

          return !!works ? (
            <Collapse
              expandIconPosition={arrowPos}
              key={idx}
              expandIcon={({ isActive }) => (
                <Icon type="right" rotate={isActive ? 90 : arrowPos === 'left' ? 0 : 180} />
              )}
              bordered={true}
            >
              <Collapse.Panel
                header={
                  <Row>
                    <Col>「{works.title}」</Col>
                    {work.artist && !R.isEmpty(work.artist) ? (
                      <Col style={{ color: '#888' }}>{work.artist.map(getArtistName).join('・')}</Col>
                    ) : (
                      undefined
                    )}
                    {works.date ? <Col>release date: {works.date}</Col> : undefined}
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
                      {work.song_list.map(song => (
                        <List.Item key={song.track_no}>
                          <Row style={{ textAlign: arrowPos }}>
                            <Col>
                              <List.Item.Meta
                                title={
                                  <Row>
                                    <Col>
                                      {song.track_no}.{' '}
                                      <span style={{ fontWeight: 'bold' }}>
                                        {works.list[song.disk_no ? song.disk_no - 1 : 0][song.track_no - 1]}
                                      </span>
                                    </Col>
                                    <Col style={{ color: '#888', paddingLeft: 20 }}>
                                      {(song.artist || []).map(getArtistName).join('・')}
                                    </Col>
                                    <Col style={{ color: '#888', paddingLeft: 20 }}>{song.explanation}</Col>
                                  </Row>
                                }
                              />
                            </Col>
                            <Col style={{ paddingLeft: 20 }}>{song.comment}</Col>
                          </Row>
                        </List.Item>
                      ))}
                    </Col>
                  </Row>
                </List>
              </Collapse.Panel>
            </Collapse>
          ) : (
            undefined
          );
        })}
      <Divider />
      <Typography.Title level={3}>関連コンテンツ</Typography.Title>
      <InternalLinkList
        {...props}
        source={
          series
            ? series.content
                .map((e, idx) => ({ e: e, idx: idx }))
                .filter(({ e, idx }) => (!!props.query.page ? idx !== props.query.page - 1 : true))
                .map(({ e, idx }) => {
                  const relatedContent = getSeriesContent(e);
                  return {
                    element: { title: relatedContent && relatedContent.title },
                    linkTo: toPublicUrl(PageName.SERIES_CONTENT, undefined, { id: props.query.id, page: idx + 1 }),
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
