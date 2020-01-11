import { Avatar, Col, Descriptions, Divider, PageHeader, Rate, Row, Statistic } from 'antd';
import * as React from 'react';

import Main from '../Main';

import { BodyProps, MainContentProps } from '../../models/Main';

const Title = () => <></>;

const Body = (props: BodyProps) => {
  const content = props.content.work.doc!;
  const artists = props.content.artist.list!;
  const genres = props.content.genre.list!;

  const WorkInfo = () => {
    const Info = () => (
      <Descriptions bordered={true} column={1} size="small">
        <Descriptions.Item label="Artist">
          {content.artist
            .map(uid => (Object.keys(artists).includes(uid as string) ? artists[uid as string].name : uid))
            .join('・')}
        </Descriptions.Item>
        <Descriptions.Item label="Release date">{content.date}</Descriptions.Item>
        {content.genres ? (
          <Descriptions.Item label="Genre">
            {content.genres.map(uid => (
              <p key={uid as string} style={{ margin: 0 }}>
                {Object.keys(genres).includes(uid as string) ? genres[uid as string].name : uid}
              </p>
            ))}
          </Descriptions.Item>
        ) : (
          undefined
        )}
      </Descriptions>
    );

    const Rating = () => (
      <>
        {!!content.rate ? (
          <Rate
            disabled={true}
            allowHalf={true}
            defaultValue={Math.floor((content.rate + 5) / 10) / 2}
            style={{ paddingTop: 15 }}
          />
        ) : (
          undefined
        )}
      </>
    );

    return (
      <Row type="flex" justify="start">
        <Col style={{ padding: 4 }} xs={24} xl={12} xxl={6}>
          <Avatar
            src={content.img ? `${process.env.REACT_APP_IMG_SRC}${content.img[0]}` : ''}
            icon="question"
            shape="square"
            size={240}
          />
        </Col>
        <Col xs={24} xl={12} xxl={8}>
          <Row>
            <Col>
              <Info />
              <Rating />
              <Statistic title="Favorite degree" value={content.rate} style={{ padding: 10 }} />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  };

  const TrackList = () => (
    <Row>
      <Col style={{ textDecoration: 'underline', fontWeight: 'bold', fontSize: '120%' }}>Track List</Col>
      <Col>
        <Row type="flex">
          {content.list.map((ver, vidx) => (
            <Row key={vidx}>
              <Col>{ver.description ? ver.description : '(Regular Edition)'}</Col>
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
        </Row>
      </Col>
    </Row>
  );

  const Review = () => (
    <Row style={{ marginTop: 20 }}>
      <Col>{content.comment}</Col>
    </Row>
  );

  const Recommend = () => (
    <>
      {content.recommend ? (
        <Row>
          <Col>おすすめ</Col>
          <Col>{content.recommend.join('、')}</Col>
        </Row>
      ) : (
        undefined
      )}
    </>
  );

  // const Tweet = () => {
  //   const f = (d: any, s: string, id: string) => {
  //     let js;
  //     const fjs: Element = d.getElementsByTagName(s)[0];
  //     const p = /^http:/.test(d.location) ? 'http' : 'https';

  //     if (!d.getElementById(id)) {
  //       js = d.createElement(s);
  //       js.id = id;
  //       js.src = `${p}://platform.twitter.com/widgets.js`;
  //       fjs.parentNode!.insertBefore(js, fjs);
  //     }
  //   };

  //   return (
  //     <>
  //       {content.description}
  //       {f(document, 'script', 'twitter-wjs')}
  //     </>
  //   );
  // };

  return (
    <>
      {!!content ? (
        <PageHeader backIcon={false} title={content.name} subTitle={content.description}>
          <WorkInfo />
          <Divider />
          <TrackList />
          <Divider />
          <Review />
          <Divider />
          <Recommend />
        </PageHeader>
      ) : (
        undefined
      )}
    </>
  );
};

const Work = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Work;
