import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignin = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  function emailValidated(value) {
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(value) || value.charAt(0) === '0'
      ? undefined
      : 'Vui lòng nhập email hoặc số điện thoại hợp lệ.';
  }

  function passWordValidated(value) {
    return value.length >= 4 && value.length <= 60
      ? undefined
      : 'Mật khẩu của bạn phải chứa từ 4 đến 60 ký tự.';
  }

  var id = emailValidated(emailAddress);
  var pw = passWordValidated(password);
  const isInvalid = id !== undefined || pw !== undefined;

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Đăng nhập</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.WrapInput>
              <Form.Input
                placeholder="Địa chỉ email"
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
              />
              {id !== undefined && emailAddress !== '' ? (
                <Form.InputError>{id}</Form.InputError>
              ) : null}
            </Form.WrapInput>
            <Form.WrapInput>
              <Form.Input
                type="password"
                value={password}
                autoComplete="off"
                placeholder="Mật khẩu"
                onChange={({ target }) => setPassword(target.value)}
              />
              {pw !== undefined && password !== '' ? (
                <Form.InputError>{pw}</Form.InputError>
              ) : null}
            </Form.WrapInput>

            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-in"
            >
              Đăng nhập
            </Form.Submit>
          </Form.Base>
          <Form.LoginHelp>
            <Form.RememberMe>
              <Form.Checkbox/>
              <Form.LabelCheckbox>
                <Form.LabelCheckboxText>Ghi nhớ tôi</Form.LabelCheckboxText>
              </Form.LabelCheckbox>
            </Form.RememberMe>
            <Form.HelpLink>Bạn cần trợ giúp?</Form.HelpLink>
          </Form.LoginHelp>
          <Form.FBLogin>
            <Form.FBIcon />
            <Form.FBText>Đăng nhập bằng tài khoản Facebook</Form.FBText>
          </Form.FBLogin>
          <Form.Text>
            Bạn mới tham gia Netflix?
            <Form.Link to="/signup"> Đăng ký ngay.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là
            robot.
            <Form.Recaptcha>Tìm hiểu thêm.</Form.Recaptcha>
          </Form.TextSmall>
        </Form>
        <FooterContainer />
      </HeaderContainer>
    </>
  );
}
