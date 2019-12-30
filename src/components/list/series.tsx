import { Collapse } from 'antd';
import * as React from 'react';

import Main from '../Main';

import PageName, { toPublicUrl } from '../../constants/PageName';
import { IDispatchProps as SeriesListPageDispatchProps } from '../../containers/pages/list/series';
import { BodyProps, MainContentProps } from '../../models/Main';

const Title = () => <div style={{ marginBottom: 10 }}>ゲームやアニメなど、シリーズごとの楽曲レビュー一覧</div>;

const Body = (props: BodyProps & Partial<SeriesListPageDispatchProps>) => {
  const content = props.content.series.list!;
  const [doc, setDoc] = React.useState(props.content.series.doc);

  React.useEffect(() => setDoc(props.content.series.doc), [props.content.series.doc]);

  return (
    <Collapse accordion={true}>
      {Object.entries(content).map(([uid, item]) => (
        <Collapse.Panel
          header={<div onClick={() => props.actions!.getSeries({ seriesUid: uid })}>{item.name}</div>}
          key={uid}
          disabled={item.disabled}
        >
          {doc && doc.uid === uid
            ? doc.content.map((contentInfo, idx) => (
                <p
                  key={idx}
                  onClick={() =>
                    contentInfo && !contentInfo.disabled
                      ? props.history.push(
                          toPublicUrl(PageName.SERIES_CONTENT, [uid as string], { id: contentInfo.uid })
                        )
                      : null
                  }
                >
                  シリーズレビュー 第 {idx + 1} 弾{' '}
                  {contentInfo && !!contentInfo.name ? `(${contentInfo.name})` : undefined}
                </p>
              ))
            : undefined}
        </Collapse.Panel>
      ))}
      {/* {[].map(e => (
        <Collapse.Panel header={content.name} key={e} disabled={content.disabled}>
          {content.content
            .map(e => ({} as any))
            .map((e2, idx) => (
              <p
                key={idx}
                onClick={() =>
                  e2 && !e2.disabled
                    ? props.history.push(toPublicUrl(PageName.SERIES_CONTENT, undefined, { id: e, page: idx + 1 }))
                    : null
                }
              >
                シリーズレビュー 第 {idx + 1} 弾 {e2 && !!e2.subtitle ? `(${e2.subtitle})` : undefined}
              </p>
            ))}
        </Collapse.Panel>
      ))} */}
    </Collapse>
  );
};

const Series = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Series;
