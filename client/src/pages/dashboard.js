import React, { useContext, useState, useEffect, Fragment } from 'react';
import { Header } from '../components';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { AuthContext } from '../contexts/AuthContext';
import { FilmContext } from '../contexts/FilmContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Dashboard() {
  const {
    authState: {
      user: { username, photoURL },
    },
    logoutUser,
  } = useContext(AuthContext);
  // state
  const [active, setActive] = useState('filmList');
  const [id, getId] = useState('');

  // context
  const {
    filmState: { all },
    getAll,
  } = useContext(FilmContext);
  useEffect(() => {
    getAll();
  }, []);

  const getID = (e) => {
    getId(e.target.value);
  };
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink
              onClick={() => setActive('filmList')}
              active={active === 'filmList' ? 'true' : 'false'}
            >
              Danh sách phim
            </Header.TextLink>
            <Header.TextLink
              onClick={() => setActive('newFilm')}
              active={active === 'newFilm' ? 'true' : 'false'}
            >
              Thêm phim mới
            </Header.TextLink>
            <Header.TextLink
              onClick={() => setActive('updateFilm')}
              active={active === 'updateFilm' ? 'true' : 'false'}
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
        {active === 'filmList' ? (
          <Container>
            <h1 className="film-title">Danh sách phim</h1>
            <Row>
              {all.map((item, index) => (
                <Col sm={4} key={index} className="my-3">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={`/images/${item.type}/${item.genre}/${item.slug}/small.jpg`}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        ) : null}

        {active === 'newFilm' ? (
          <>
            <h1 className="film-title">Thêm phim mới</h1>
            <Form className="form">
              <Form.Group className="form-group">
                <Form.Control type="text" placeholder="Tên" />
              </Form.Group>
              <Form.Group className="mb-3 mt-3">
                <Form.Control
                  as="textarea"
                  placeholder="Mô tả"
                  style={{ height: '100px' }}
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-1 mt-1">
                <Form.Control type="text" placeholder="Thể loại" />
              </Form.Group>
              <Form.Group className="mb-3 mt-1 mt-1">
                <Form.Control type="text" placeholder="Giới hạn" />
              </Form.Group>
              <Form.Group className="form-group mb-3 mt-1">
                <Form.Control type="text" placeholder="Hình ảnh" />
              </Form.Group>
              <Form.Group className="form-group mb-3 mt-1">
                <Form.Label>Phân loại</Form.Label>
                <Form.Control as="select" style={{ width: '200px' }}>
                  <option value="red">Films</option>
                  <option value="blue">Series</option>
                </Form.Control>
              </Form.Group>
              <Button variant="success" className="my-4" type="submit">
                THÊM PHIM MỚI
              </Button>
            </Form>
          </>
        ) : null}

        {active === 'updateFilm' ? (
          <>
            <h1 className="film-title">Cập nhật phim</h1>
            <Form className="form">
              <Form.Group className="form-group my-3">
                <Form.Label>Nhập ID</Form.Label>
                <Form.Control type="text" placeholder="ID" onChange={getID} />
              </Form.Group>
              {all.map((item) =>
                item._id === id ? (
                  <Fragment key={item._id}>
                    <Form.Group className="form-group mb-3 mt-3">
                      <Form.Control type="text" value={item.title} />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-1 mt-1">
                      <Form.Control
                        as="textarea"
                        style={{ height: '100px' }}
                        value={item.description}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-1 mt-1">
                      <Form.Control type="text" value={item.genre} />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-1 mt-1">
                      <Form.Control type="text" value={item.maturity} />
                    </Form.Group>
                    <Form.Group className="form-group mb-3 mt-1">
                      <Form.Control type="text" value={item.slug} />
                    </Form.Group>
                    <Form.Group className="form-group mb-3 mt-1">
                      <Form.Label>Phân loại</Form.Label>
                      <Form.Control as="select" style={{ width: '200px' }}></Form.Control>
                        <option value="Films">Films</option>
                        <option value="Series">Series</option>
                      </Form.Control>
                    </Form.Group>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button
                        variant="danger"
                        className="my-4 me-3"
                        type="submit"
                      >
                        XÓA PHIM
                      </Button>
                      <Button
                        variant="success"
                        className="my-4 ms-3"
                        type="submit"
                      >
                        CẬP NHẬT PHIM
                      </Button>
                    </div>
                  </Fragment>
                ) : null
              )}
            </Form>
          </>
        ) : null}

        <FooterContainer />
      </Header>
    </>
  );
}
