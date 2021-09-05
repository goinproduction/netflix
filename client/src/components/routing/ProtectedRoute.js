import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Home } from '../../pages';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  const finalComponent = isAuthenticated ? Component : Home;
  return <Route {...rest} component={finalComponent} />;
};

export default ProtectedRoute;
