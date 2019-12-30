import { Avatar, Col, Descriptions, Divider, PageHeader, Rate, Row, Statistic } from 'antd';
import * as React from 'react';

import Main from '../Main';

import { BodyProps, MainContentProps } from '../../models/Main';

const Title = () => <div style={{ marginBottom: 10 }} />;

const Body = (props: BodyProps) => {
  const content = props.content.work.doc!;
  const artists = props.content.artist.list!;
  const genres = props.content.genre.list!;

  return (
    <>
      {!!content ? (
        <PageHeader backIcon={false} title={content.name} subTitle={content.description}>
          <Row type="flex" justify="start">
            <Col style={{ padding: 4 }} xs={24} xl={12} xxl={6}>
              <Avatar src={content.img && content.img[0]} icon="question" shape="square" size={240} />
            </Col>
            <Col xs={24} xl={12} xxl={8}>
              <Row>
                <Col>
                  <Descriptions bordered={true} column={1} size="small">
                    <Descriptions.Item label="Artist">
                      {content.artist
                        .map(uid => (Object.keys(artists).includes(uid as string) ? artists[uid as string].name : uid))
                        .join('・')}
                    </Descriptions.Item>
                    <Descriptions.Item label="Release date">{content.date}</Descriptions.Item>
                    {content.genres ? (
                      <Descriptions.Item label="Genre">
                        {content.genres
                          .map(uid => (Object.keys(genres).includes(uid as string) ? genres[uid as string].name : uid))
                          .join('・')}
                      </Descriptions.Item>
                    ) : (
                      undefined
                    )}
                  </Descriptions>
                  {!!content.rate ? (
                    <Rate
                      disabled={true}
                      allowHalf={true}
                      defaultValue={Math.floor(content.rate / 10) / 2}
                      style={{ paddingTop: 15 }}
                    />
                  ) : (
                    undefined
                  )}
                  <Statistic title="Favorite degree" value={content.rate} style={{ padding: 10 }} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col>Track List</Col>
            <Col>
              {content.list.map((ver, vidx) => (
                <Row type="flex" key={vidx}>
                  {ver.description ? <Col>{ver.description}</Col> : undefined}
                  <Col>
                    <Row type="flex">
                      {ver.list.map((disk, idx) => (
                        <Col style={{ margin: '0px 20px 20px 20px' }} key={idx}>
                          {ver.list.length > 1 ? <span>Disk {idx + 1}</span> : undefined}
                          <ol>
                            {disk.map((song, idx2) => (
                              <li key={idx2}>{song}</li>
                            ))}
                          </ol>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              ))}
            </Col>
          </Row>
          <Divider />
          <Row style={{ marginTop: 20 }}>{content.comment}</Row>
          <Divider />
          {content.recommend ? (
            <Row>
              <Col>おすすめ</Col>
              <Col>{content.recommend.join('、')}</Col>
            </Row>
          ) : (
            undefined
          )}
        </PageHeader>
      ) : (
        undefined
      )}
    </>
  );
};

const Work = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Work;
