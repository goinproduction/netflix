import React, { useState, useContext } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { AuthContext } from '../contexts/AuthContext';

export default function SignIn() {
  const { loginUser } = useContext(AuthContext);

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });
  function emailValidated(value) {
    var regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(value) || value.charAt(0) === '0'
      ? undefined
      : 'Vui lòng nhập email hoặc số điện thoại hợp lệ.';
  }

  function passWordValidated(value) {
    return value.length >= 4 && value.length <= 60
      ? undefined
      : 'Mật khẩu của bạn phải chứa từ 4 đến 60 ký tự.';
  }
  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const { username, password } = loginForm;
  const [error, setError] = useState('');

  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      const loginData = await loginUser(loginForm);
      if (!loginData.success) setError(loginData.message);
    } catch (error) {
      console.log(error);
    }
  };
  var id = emailValidated(username);
  var pw = passWordValidated(password);
  const isInvalid = id !== undefined || pw !== undefined;
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Đăng nhập</Form.Title>
          {error !== '' && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin}>
            <Form.WrapInput>
              <Form.Input
                type="text"
                placeholder="Địa chỉ email"
                name="username"
                required
                value={username}
                onChange={onChangeLoginForm}
              />
              {id !== undefined && username !== '' ? (
                <Form.InputError>{id}</Form.InputError>
              ) : null}
            </Form.WrapInput>
            <Form.WrapInput>
              <Form.Input
                type="password"
                value={password}
                name="password"
                autoComplete="off"
                placeholder="Mật khẩu"
                onChange={onChangeLoginForm}
              />
              {pw !== undefined && password !== '' ? (
                <Form.InputError>{pw}</Form.InputError>
              ) : null}
            </Form.WrapInput>

            <Form.Submit
              type="submit"
              data-testid="sign-in"
              disabled={isInvalid}
            >
              Đăng nhập
            </Form.Submit>
          </Form.Base>
          <Form.LoginHelp>
            <Form.RememberMe>
              <Form.Checkbox />
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
