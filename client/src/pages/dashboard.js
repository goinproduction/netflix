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
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
  const {
    authState: {
      user: { photoURL },
    },
    logoutUser,
  } = useContext(AuthContext);
  // state
  const [active, setActive] = useState('filmList');
  const [id, setId] = useState('');

  const [film, setFilm] = useState({
    title: '',
    description: '',
    genre: '',
    maturity: '',
    slug: '',
    type: '',
  });
  const [typeSubmit, setTypeSubmit] = useState('');
  const { title, description, genre, maturity, slug, type } = film;
  const onInputChange = (event) => {
    setFilm({ ...film, [event.target.name]: event.target.value });
  };

  // context
  const {
    filmState: { all },
    getAll,
    addFilm,
    deleteFilm,
    updateFilm,
  } = useContext(FilmContext);

  useEffect(() => {
    getAll();
  }, []);

  // handle default input value
  useEffect(() => {
    all.map((item) => (item._id == id ? setFilm(item) : null));
  }, [id]);

  const getID = (e) => {
    setId(e.target.value);
  };

  const handleAddFilm = (event) => {
    event.preventDefault();
    addFilm(film);
    setActive('filmList');
    setFilm({
      title: '',
      description: '',
      genre: '',
      maturity: '',
      slug: '',
      type: '',
    });
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    if (typeSubmit === 'delete') {
      deleteFilm(id);
    } else if (typeSubmit === 'update') {
      updateFilm(id, film);
    }
    setActive('filmList');
    setId('');
    setFilm({
      title: '',
      description: '',
      genre: '',
      maturity: '',
      slug: '',
      type: '',
    });
  };

  // Redirect
  const history = useHistory();
  const handleRedirectToBrowse = () => {
    history.push('/browse');
  };
  // Validate ID
  const idValidate = () => {
    return film.title === ''
      ? 'ID không hợp lệ, vui lòng kiểm tra lại.'
      : undefined;
  };
  var idValidated = idValidate();
  console.log(idValidated);
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
                  <Header.TextLink onClick={handleRedirectToBrowse}>
                    Trang chủ
                  </Header.TextLink>
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
                    <Card.Footer className="text-muted">
                      ID: {item._id}
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        ) : null}

        {active === 'newFilm' ? (
          <>
            <h1 className="film-title">Thêm phim mới</h1>
            <Form className="form" onSubmit={handleAddFilm}>
              <Form.Group className="form-group">
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Tên"
                  value={title}
                  onChange={onInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-3">
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="Mô tả"
                  style={{ height: '100px' }}
                  value={description}
                  onChange={onInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-1 mt-1">
                <Form.Control
                  type="text"
                  name="genre"
                  placeholder="Thể loại"
                  value={genre}
                  onChange={onInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-1 mt-1">
                <Form.Control
                  type="number"
                  name="maturity"
                  placeholder="Giới hạn"
                  value={maturity}
                  onChange={onInputChange}
                />
              </Form.Group>
              <Form.Group className="form-group mb-3 mt-1">
                <Form.Control
                  type="text"
                  name="slug"
                  placeholder="Hình ảnh"
                  value={slug}
                  onChange={onInputChange}
                />
              </Form.Group>
              <Form.Group className="form-group mb-3 mt-1">
                <Form.Label>Phân loại</Form.Label>
                <Form.Control
                  as="select"
                  style={{ width: '200px' }}
                  name="type"
                  value={type}
                  onChange={onInputChange}
                >
                  <option value="" disabled>
                    Phân loại
                  </option>
                  <option value="films">Films</option>
                  <option value="series">Series</option>
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
            <Form className="form" onSubmit={handleUpdate}>
              <Form.Group className="form-group my-3">
                <Form.Label>Nhập ID</Form.Label>
                <Form.Control type="text" placeholder="ID" onChange={getID} />
                {idValidated !== undefined && id !== '' ? (
                  <p className="error-message">{idValidated}</p>
                ) : null}
              </Form.Group>
              {all.map((item) =>
                item._id === id ? (
                  <Fragment key={item._id}>
                    <Form.Group className="form-group mb-3 mt-3">
                      <Form.Control
                        type="text"
                        name="title"
                        value={title}
                        onChange={onInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-1 mt-1">
                      <Form.Control
                        as="textarea"
                        style={{ height: '100px' }}
                        name="description"
                        value={description}
                        onChange={onInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-1 mt-1">
                      <Form.Control
                        type="text"
                        name="genre"
                        value={genre}
                        onChange={onInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-1 mt-1">
                      <Form.Control
                        type="number"
                        name="maturity"
                        value={maturity}
                        onChange={onInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="form-group mb-3 mt-1">
                      <Form.Control
                        type="text"
                        name="slug"
                        value={slug}
                        onChange={onInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="form-group mb-3 mt-1">
                      <Form.Label>Phân loại</Form.Label>
                      <Form.Control
                        as="select"
                        name="type"
                        style={{ width: '200px' }}
                        value={type}
                        onChange={onInputChange}
                      >
                        <option value="films">Films</option>
                        <option value="series">Series</option>
                      </Form.Control>
                    </Form.Group>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button
                        variant="danger"
                        className="my-4 me-3"
                        name="delete"
                        onClick={() => setTypeSubmit('delete')}
                        type="submit"
                      >
                        XÓA PHIM
                      </Button>
                      <Button
                        variant="success"
                        className="my-4 ms-3"
                        type="submit"
                        name="update"
                        onClick={() => setTypeSubmit('update')}
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
