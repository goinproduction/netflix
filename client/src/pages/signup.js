import React, { useState, useContext } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { AuthContext } from '../contexts/AuthContext';

export default function SignUp() {
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const { username, password, confirmPassword } = registerForm;

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

  function confirmPasswordValidated(value) {
    return value !== password
      ? 'Mật khẩu chưa khớp, vui lòng kiểm tra lại.'
      : undefined;
  }

  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });

  const handleSignup = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Password does not match');
      return;
    }

    try {
      const registerData = await registerUser(registerForm);
      if (!registerData.success) {
        setError(registerData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  var id = emailValidated(username);
  var pw = passWordValidated(password);
  var cpw =
    confirmPasswordValidated(confirmPassword) ||
    passWordValidated(confirmPassword);
  const isInvalid = id !== undefined || pw !== undefined || cpw !== undefined;
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Đăng ký</Form.Title>
          {error !== '' && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup}>
            <Form.Input
              placeholder="Tên"
              name="displayName"
              onChange={onChangeRegisterForm}
            />
            <Form.WrapInput>
              <Form.Input
                placeholder="Địa chỉ email"
                value={username}
                name="username"
                type="email"
                onChange={onChangeRegisterForm}
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
                onChange={onChangeRegisterForm}
              />
              {pw !== undefined && password !== '' ? (
                <Form.InputError>{pw}</Form.InputError>
              ) : null}
            </Form.WrapInput>
            <Form.WrapInput>
              <Form.Input
                type="password"
                value={confirmPassword}
                name="confirmPassword"
                autoComplete="off"
                placeholder="Mật khẩu"
                onChange={onChangeRegisterForm}
              />
              {cpw !== undefined && confirmPassword !== '' ? (
                <Form.InputError>{cpw}</Form.InputError>
              ) : null}
            </Form.WrapInput>
            <Form.Submit
              type="submit"
              data-testid="sign-up"
              disabled={isInvalid}
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
