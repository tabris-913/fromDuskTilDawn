import { Divider } from 'antd';
import * as React from 'react';
import { BodyProps, TitleProps } from '../models/Main';

interface MainProps extends BodyProps, TitleProps {
  Body: (props: BodyProps) => JSX.Element;
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
