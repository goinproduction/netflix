import React, { useContext } from 'react';
import SignIn from './signin';
import SignUp from './signup';
import Home from './home';
import { AuthContext } from '../contexts/AuthContext';
import { Redirect } from 'react-router-dom';

const Auth = ({ authRoute }) => {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  let body;
  if (isAuthenticated) {
    return <Redirect to="/browse" />;
  } else {
    body = (
      <>
        {authRoute === 'signin' && <SignIn />}
        {authRoute === 'signup' && <SignUp />}
        {authRoute === '/' && <Home />}
      </>
    );
  }

  return <>{body}</>;
};

export default Auth;
