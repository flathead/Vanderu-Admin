import React, { Fragment,useEffect,useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter, Media, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'
const UserEdit = (props) => {
  
  const [setData] = useState([])

  useEffect(() => {
      axios.get(`${process.env.PUBLIC_URL}/api/user-edit-table.json`).then(res => setData(res.data))
  },[])

  return (
    <Fragment>
      <Breadcrumb parent="Users" title="Edit Profile" />
      <Container fluid={true}>
        <div className="edit-profile">
          <Row>
            <Col xl="4">
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">Мой профиль</h4>
                  <div className="card-options">
                    <a className="card-options-collapse" href="#javascript">
                      <i className="fe fe-chevron-up"></i>
                    </a>
                    <a className="card-options-remove" href="#javascript">
                      <i className="fe fe-x"></i>
                    </a>
                  </div>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row className="mb-2">
                      <div className="profile-title">
                        <div className="media">
                            <Media className="img-70 rounded-circle" alt="" src={require("../../assets/images/user/7.jpg")} />
                            <div className="media-body">
                              <Link to={`${process.env.PUBLIC_URL}/app/users/userProfile/`}>
                                <h5 className="mb-1">Иван Иванов</h5>
                              </Link>
                              <p>Дизайнер</p>
                            </div>
                        </div>
                      </div>
                    </Row>
                    <FormGroup>
                      <h6 className="form-label">Био</h6>
                      <Input type="textarea" className="form-control" rows="5" defaultValue="On the other hand, we denounce with righteous indignation" />
                    </FormGroup>
                    <FormGroup>
                      <Label className="form-label">Email</Label>
                      <Input className="form-control" placeholder="your-email@domain.com" />
                    </FormGroup>
                    <FormGroup>
                      <Label className="form-label">Пароль</Label>
                      <Input className="form-control" type="password" defaultValue="password" />
                    </FormGroup>
                    <FormGroup>
                      <Label className="form-label">Сайт</Label>
                      <Input className="form-control" placeholder="http://Uplor .com" />
                    </FormGroup>
                    <div className="form-footer">
                      <button className="btn btn-primary">Сохранить</button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col xl="8">
              <Form className="card">
                <CardHeader>
                  <h4 className="card-title mb-0">Редактировать профиль</h4>
                  <div className="card-options">
                    <a className="card-options-collapse" href="#javascript">
                      <i className="fe fe-chevron-up"></i>
                    </a>
                    <a className="card-options-remove" href="#javascript">
                      <i className="fe fe-x"></i>
                    </a>
                  </div>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="5">
                      <FormGroup>
                        <Label className="form-label">Компания</Label>
                        <Input className="form-control" type="text" placeholder="Компания" />
                      </FormGroup>
                    </Col>
                    <Col sm="6" md="3">
                      <FormGroup>
                        <Label className="form-label">Ник</Label>
                        <Input className="form-control" type="text" placeholder="Ник" />
                      </FormGroup>
                    </Col>
                    <Col sm="6" md="4">
                      <FormGroup>
                        <Label className="form-label">Email</Label>
                        <Input className="form-control" type="email" placeholder="Email" />
                      </FormGroup>
                    </Col>
                    <Col sm="6" md="6">
                      <FormGroup>
                        <Label className="form-label">Имя</Label>
                        <Input className="form-control" type="text" placeholder="Имя" />
                      </FormGroup>
                    </Col>
                    <Col sm="6" md="6">
                      <FormGroup>
                        <Label className="form-label">Фамилия</Label>
                        <Input className="form-control" type="text" placeholder="Фамилия" />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label className="form-label">Адрес</Label>
                        <Input className="form-control" type="text" placeholder="Адрес" />
                      </FormGroup>
                    </Col>
                    <Col sm="6" md="4">
                      <FormGroup>
                        <Label className="form-label">Город</Label>
                        <Input className="form-control" type="text" placeholder="Город" />
                      </FormGroup>
                    </Col>
                    <Col sm="6" md="3">
                      <FormGroup>
                        <Label className="form-label">Индекс</Label>
                        <Input className="form-control" type="number" placeholder="Индекс" />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <div className="mb-0">
                        <Label className="form-label">Обо мне</Label>
                        <Input type="textarea" className="form-control" rows="5" placeholder="Опишите себя" />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter className="text-end">
                  <button className="btn btn-primary" type="submit">Обновить профиль</button>
                </CardFooter>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
}

export default UserEdit;