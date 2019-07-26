import { Collapse } from 'antd';
import * as React from 'react';

import Main from '../Main';

import PageName, { toPublicUrl } from '../../constants/PageName';
import { BodyProps, MainContentProps } from '../../models/Main';
import { getSeriesContent } from '../../utils/SeriesContentUtils';
import { getSeries, SeriesKeys } from '../../utils/SeriesUtils';

const Title = () => <div style={{ marginBottom: 10 }}>ゲームやアニメなど、シリーズごとの楽曲レビュー一覧</div>;

const Body = (props: BodyProps) => {
  return (
    <Collapse>
      {SeriesKeys.map(e => (
        <Collapse.Panel header={getSeries(e)!.name} key={e} disabled={getSeries(e)!.disabled}>
          {getSeries(e)!
            .content.map(getSeriesContent)
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
      ))}
    </Collapse>
  );
};

const Series = (props: MainContentProps) => <Main {...props} Title={Title} Body={Body} />;

export default Series;
