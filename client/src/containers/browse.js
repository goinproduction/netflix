import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { Card, Header, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import { AuthContext } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);
  const {
    authState: {
      user: { username, photoURL },
    },
    logoutUser,
  } = useContext(AuthContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [username]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ['data.description', 'data.title', 'data.genre'],
    });
    const results = fuse.search(searchTerm).map((item) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);
  const history = useHistory();
  const handleRedirectToDashboard = () => {
    history.push('/dashboard');
  };
  return username ? (
    <>
      {loading ? <Loading src={photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
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
                <Header.Group>
                  <Header.TextLink
                    onClick={handleRedirectToDashboard.bind(this)}
                  >
                    Cập nhật danh sách phim
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Xem Joker bây giờ</Header.FeatureCallOut>
          <Header.Text>
            Mãi cô đơn trong đám đông, diễn viên hài thất bại Arthur Fleck tìm
            kiếm sự kết nối khi anh ấy đi bộ trên các đường phố của Thành phố
            Gotham. Arthur mặc hai chiếc mặt nạ - cái mà anh ấy vẽ cho công việc
            hàng ngày của mình như một chú hề, và bộ đồ anh ấy dự định trong một
            nỗ lực vô ích để cảm thấy như anh ấy là một phần của thế giới xung
            quanh anh ấy.
          </Header.Text>
          <Header.PlayButton>Xem</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer setProfile={setProfile} />
  );
}
