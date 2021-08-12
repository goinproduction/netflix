import React from 'react';
import {
  Container,
  Item,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
  Video,
  Animation,
  VideoSource,
  CardAnimation,
  WrapImage,
  SmallImage,
  Text,
  AnimationText,
  CardAnimationContainer,
  Download,
} from './styles/jumbotron';

export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Jumbotron.Animation = function JumbotronAnimation({ children, ...restProps }) {
  return <Animation {...restProps}>{children}</Animation>;
};
Jumbotron.Video = function JumbotronVideo({ children, ...restProps }) {
  return (
    <Video {...restProps} controls autoPlay={true} muted playsInline>
      {children}
    </Video>
  );
};

Jumbotron.VideoSource = function JumbotronVideoSource({ ...restProps }) {
  return <VideoSource {...restProps} />;
};

Jumbotron.CardAnimationContainer = function JumbotronCardAnimationContainer({
  children,
  ...restProps
}) {
  return (
    <CardAnimationContainer {...restProps}>{children}</CardAnimationContainer>
  );
};
Jumbotron.CardAnimation = function JumbotronCardAnimation({
  children,
  ...restProps
}) {
  return <CardAnimation {...restProps}>{children}</CardAnimation>;
};

Jumbotron.WrapImage = function JumbotronWrapImage({ ...restProps }) {
  return <WrapImage {...restProps} />;
};

Jumbotron.SmallImage = function JumbotronSmallImage({ ...restProps }) {
  return <SmallImage {...restProps} />;
};

Jumbotron.AnimationText = function JumbotronAnimationText({
  children,
  ...restProps
}) {
  return <AnimationText {...restProps}>{children}</AnimationText>;
};
Jumbotron.Text = function JumbotronText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Jumbotron.Download = function JumbotronDownload({ children, ...restProps }) {
  return <Download {...restProps}>{children}</Download>;
};
