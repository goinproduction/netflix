import React, { useContext, useEffect } from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { AuthContext } from '../contexts/AuthContext';

export function SelectProfileContainer({ setProfile }) {
  const {
    authState: {
      user: { username },
    },
  } = useContext(AuthContext);
  var photoURL = Math.floor(Math.random() * 5) + 1;
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                username,
                photoURL,
              })
            }
            data-testid="user-profile"
          >
            <Profiles.Picture src={photoURL} />
            <Profiles.Name>{username}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
