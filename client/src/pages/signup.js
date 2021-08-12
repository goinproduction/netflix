import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setFirstName('');
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
          <Form.Title>Đăng ký</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="Tên"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
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
              data-testid="sign-up"
            >
              Đăng ký
            </Form.Submit>
          </Form.Base>
          <Form.FBLogin>
            <Form.FBIcon />
            <Form.FBText>Đăng ký bằng tài khoản Facebook</Form.FBText>
          </Form.FBLogin>
          <Form.Text>
            Bạn đã có tài khoản?
            <Form.Link to="/signin"> Đăng nhập ngay.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là
            robot. Tìm hiểu thêm.
          </Form.TextSmall>
        </Form>
        <FooterContainer />
      </HeaderContainer>
    </>
  );
}
