import { Divider } from 'antd';
import * as React from 'react';
import IContent, { IContentListContent } from '../models/contents/content';
import { Uid } from '../models/Id';
import { BodyProps, ListBodyProps, MainContentProps, TitleProps } from '../models/Main';

interface MainProps extends MainContentProps {
  Body: (props: BodyProps<IContent<Uid>> | ListBodyProps<IContentListContent<Uid>> | any) => JSX.Element;
  Title: (props: TitleProps) => JSX.Element;
}

const Main = ({ Body, Title, ...props }: MainProps) => {
  return (
    <>
      <Title {...props} />
      <Divider />
      <Body {...props} />
    </>
  );
};

export default Main;
