import styled from 'styled-components/macro';

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  flex-direction: ${({ direction }) => direction};
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;
  position: relative;
  overflow: hidden;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
`;
export const Animation = styled.div`
  width: 100%;
  height: 100%;
  max-width: 73%;
  max-height: 54%;
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Video = styled.video`
  width: 100%;
  height: 100%;
`;

export const VideoSource = styled.source``;
export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
export const CardAnimationContainer = styled.div`
  margin: -8% 0 -4% 8%;
  min-height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardAnimation = styled.div`
  position: absolute;
  left: 50%;
  bottom: 8%;
  transform: translateX(-39%);
  margin: 0 auto;
  background: #000;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 60%;
  min-width: 15em;
  padding: 0.25em 0.65em;
  border: 2px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 2em 0 #000;
  border-radius: 0.75em;
  z-index: 2;
`;

export const WrapImage = styled.div`
  margin: 0 1em 0 0;
  -webkit-box-flex: 0;
  flex-grow: 0;
  flex-shrink: 0;
`;
export const SmallImage = styled.img`
  max-width: 100%;
  height: 5em;
  border: 0;
`;

export const AnimationText = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  -webkit-flex-shrink: 1;
  flex-shrink: 1;
  margin: 0.3em 0;
`;
export const Text = styled.p`
  &:first-of-type {
    color: #fff;
    font-weight: 600;
    font-size: 0.9em;
    margin-bottom: 0;
    font-size: 16px;
  }
  &:last-of-type {
    color: #0071eb;
    font-size: 0.75em;
    font-weight: 450;
    margin-top: 3px;
    font-size: 14.4px;
  }
`;

export const Download = styled.div`
  width: 3em;
  height: 3em;
  outline: 2px solid #000;
  outline-offset: -4px;
  display: block;
  background: url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif)
    center center no-repeat;
  background-size: 100%;
  content: '';
`;
