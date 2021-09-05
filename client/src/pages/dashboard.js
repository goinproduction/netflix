import React, { useContext, useState } from 'react';
import { Header } from '../components';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { AuthContext } from '../contexts/AuthContext';

export default function Dashboard() {
  const {
    authState: {
      user: { username, photoURL },
    },
    logoutUser,
  } = useContext(AuthContext);
  // state
  const [active, setActive] = useState('');
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink
              onClick={() => setActive('filmList')}
              active={active == 'filmList' ? 'true' : 'false'}
            >
              Danh sách phim
            </Header.TextLink>
            <Header.TextLink
              onClick={() => setActive('newFilm')}
              active={active == 'newFilm' ? 'true' : 'false'}
            >
              Thêm phim mới
            </Header.TextLink>
            <Header.TextLink
              onClick={() => setActive('updateFilm')}
              active={active == 'updateFilm' ? 'true' : 'false'}
            >
              Cập nhật
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Picture src={photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={photoURL} />
                  <Header.TextLink>{username}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => logoutUser()}>
                    Đăng xuất
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <FooterContainer />
      </Header>
    </>
  );
}
