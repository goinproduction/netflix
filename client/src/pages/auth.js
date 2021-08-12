import React, { useContext } from 'react';
import SignIn from './signin';
import SignUp from './signup';
import Home from './home';
import { AuthContext } from '../contexts/AuthContext';
import { Redirect } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const Auth = ({ authRoute }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  let body;

  if (authLoading) {
    body = (
      <div className="d-flex justify-content-ClientRequest mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (isAuthenticated) {
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
