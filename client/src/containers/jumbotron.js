import React from 'react';
import jumboData from '../fixtures/jumbo';
import { Jumbotron } from '../components';

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      <Jumbotron>
        <Jumbotron.Pane>
          <Jumbotron.Title>Thưởng thức trên TV của bạn.</Jumbotron.Title>
          <Jumbotron.SubTitle>
            Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu
            phát Blu-ray và nhiều thiết bị khác.
          </Jumbotron.SubTitle>
        </Jumbotron.Pane>
        <Jumbotron.Pane>
          <Jumbotron.Image src="./images/misc/tv.png" alt="TV" />
          <Jumbotron.Animation>
            <Jumbotron.Video>
              <Jumbotron.VideoSource src="./videos/tv.m4v" type="video/mp4" />
            </Jumbotron.Video>
          </Jumbotron.Animation>
        </Jumbotron.Pane>
      </Jumbotron>

      <Jumbotron direction="row-reverse">
        <Jumbotron.Pane>
          <Jumbotron.Title>
            Tải xuống nội dung để xem ngoại tuyến.
          </Jumbotron.Title>
          <Jumbotron.SubTitle>
            Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để
            xem.
          </Jumbotron.SubTitle>
        </Jumbotron.Pane>

        <Jumbotron.Pane>
          <Jumbotron.CardAnimationContainer>
            <Jumbotron.Image
              src="./images/misc/home-mobile.jpg"
              alt="Offline"
            />
            <Jumbotron.CardAnimation>
              <Jumbotron.WrapImage>
                <Jumbotron.SmallImage
                  src="./images/misc/boxshot.png"
                  alt="boxshot"
                />
              </Jumbotron.WrapImage>
              <Jumbotron.AnimationText>
                <Jumbotron.Text>Cậu bé mất tích</Jumbotron.Text>
                <Jumbotron.Text>Đang tải xuống...</Jumbotron.Text>
              </Jumbotron.AnimationText>
              <Jumbotron.Download />
            </Jumbotron.CardAnimation>
          </Jumbotron.CardAnimationContainer>
        </Jumbotron.Pane>
      </Jumbotron>

      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
