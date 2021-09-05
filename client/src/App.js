import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Browse, Dashboard } from './pages';
import ProtectedRoute from './components/routing/ProtectedRoute';
import AuthContextProvider from './contexts/AuthContext';
import FilmContextProvider from './contexts/FilmContext';
import Auth from './pages/auth';

export function App() {
  return (
    <AuthContextProvider>
      <FilmContextProvider>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Auth {...props} authRoute="/" />}
            />
            <Route
              exact
              path="/signin"
              render={(props) => <Auth {...props} authRoute="signin" />}
            />
            <Route
              exact
              path="/signup"
              render={(props) => <Auth {...props} authRoute="signup" />}
            />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/browse" component={Browse} />
          </Switch>
        </Router>
      </FilmContextProvider>
    </AuthContextProvider>
  );
}
