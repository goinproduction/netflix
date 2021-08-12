import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Recaptcha = styled.span`
  color: #0071eb;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const Link = styled(ReachRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const WrapInput = styled.div`
  position: relative;
`;
export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  width: 100%;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const InputError = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  color: #e87c03;
  margin-bottom: -6px;
  padding: 6px 3px;
  top: 66%;
  font-size: 13px;
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;

export const LoginHelp = styled.div`
  display: flex;
`;
export const RememberMe = styled.div`
  flex-grow: 1;
  padding-left: 20px;
  position: relative;
  box-sizing: border-box;
  user-select: none;
  font-size: 16px;
`;
export const Checkbox = styled.input`
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 1;
  z-index: 999;
  width: 16px;
  height: 21px;
`;
export const LabelCheckbox = styled.label`
  padding: 0;
  color: #333;
  position: relative;
  display: block;
  line-height: 1.2;
`;
export const LabelCheckboxText = styled.span`
  color: #b3b3b3;
  font-size: 13px;
  font-weight: 500;
`;

export const HelpLink = styled.a`
  cursor: pointer;
  color: #b3b3b3;
  flex: 0 0 1;
  font-size: 13px;
  font-weight: 500;
  padding-top: 2px;
  &:hover {
    text-decoration: underline;
  }
`;

export const FBLogin = styled.div`
  background: 0 0;
  color: #0080ff;
  cursor: pointer;
  border: none;
  font-size: 14px;
  padding-top: 30px;
`;

export const FBIcon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  vertical-align: middle;
`;

export const FBText = styled.span`
  color: #737373;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
`;
