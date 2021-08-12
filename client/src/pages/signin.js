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
            </Form.WrapInput>

            <Form.Submit
              type="submit"
              data-testid="sign-in"
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
