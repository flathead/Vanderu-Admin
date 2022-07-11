import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { Target, CheckCircle, PlusSquare, Archive, Pause } from 'react-feather';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const mr1rem = {
  marginRight: '1rem',
};

const Project = () => {

  const [activeTab, setActiveTab] = useState("1")

  // Переменные, хранящиеся в reduced.jsx
  // Проекты хранятся в project.jsx
  const allProject = useSelector(content => content.Projectapp.all_Project);
  const activeProject = useSelector(content => content.Projectapp.active_Project);

  return (
    <Fragment>
      <Breadcrumb parent="Проекты" title="Мои проекты" />
      <Container fluid={true}>
        <Row className="project-card">
          <Col md="12" className="project-list">
            <Card>
              <Row>

                <Col md="8"> 
                  <Nav tabs className="border-tab">
                    <NavItem><NavLink className={activeTab === "1" ? "active" : ''} onClick={() => setActiveTab("1")}><Target />Все</NavLink></NavItem>
                    <NavItem><NavLink className={activeTab === "2" ? "active" : ''} onClick={() => setActiveTab("2")}><CheckCircle />Активные</NavLink></NavItem>
                    <NavItem><NavLink className={activeTab === "2" ? "active" : ''} onClick={() => setActiveTab("3")}><Archive />В архиве</NavLink></NavItem>
                    <NavItem><NavLink className={activeTab === "3" ? "active" : ''} onClick={() => setActiveTab("4")}><Pause />На паузе</NavLink></NavItem>
                  </Nav>
                </Col>
				
                <Col md="4">
                  <div className="text-end">
                    <Link className="btn btn-primary" style={{ color: 'white' }} to={`${process.env.PUBLIC_URL}/project/new-project/`}> <PlusSquare />Создать новый проект</Link>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col sm="12">
            <Card>
              <CardBody>
                <TabContent activeTab={activeTab} className={activeTab === "1" ? "active" : ''}>
                <TabPane tabId="1">
                    <Row>
                      {allProject.map((item, i) =>
                        <Col xxl="4" lg="6" key={i}>
                          <div className="project-box">
                            <span className={`badge ${item.badge === "Активный" ? 'badge-success' : 'bg-primary' && item.badge === "На паузе" ? 'badge-pause' : 'bg-primary'}`}>{item.badge}</span>
                            <h6>{item.title}</h6>
                            <div className="media">
                              <div className="media-body">
                                <p>
                                  <a href={item.project1_url}><img className="img-20 me-1 rounded-circle" src={require(`../../assets/images/${item.img}`)} alt="" /> {item.project1}</a>
                                  <a className="mx-3" href={item.project2_url}><img className="img-20 me-1 rounded-circle" src={require(`../../assets/images/${item.img}`)} alt="" /> {item.project2}</a>
                                </p>
                              </div>
                            </div>
                            <p>{item.desc}</p>
                            <Row className="details">
                              <Col xs="6"><span>Сегодня </span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.today}</Col>
                              <Col xs="6"> <span>Месяц</span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.month}</Col>
                              <Col xs="6"> <span>Активных подписок</span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.subs}</Col>
                            </Row>
                            <div className="customers">
                              <ul>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../assets/images/${item.customers_img1}`)} alt="" /></li>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../assets/images/${item.customers_img2}`)} alt="" /></li>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../assets/images/${item.customers_img3}`)} alt="" /></li>
                                <li className="d-inline-block ms-2">
                                  <p className="f-12">{`+${item.like} ещё`}</p>
                                </li>
                              </ul>
                            </div>
                            <div className="project-status mt-4">
                              <Link to={`${process.env.PUBLIC_URL}/project/inside/`}><button style={mr1rem} className="btn btn-primary-gradien">К проекту</button></Link>
                              <button className="btn btn-danger-gradien"><i className="icofont icofont-ui-delete"></i> Удалить</button>
                            </div>
                          </div>
                        </Col>
                      )}
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      {allProject.map((item, i) =>
                        <Col xxl="4" lg="6" key={i}>
                          <div className="project-box">
                            <span className={`badge ${item.badge === "Активный" ? 'badge-success' : 'bg-primary' && item.badge === "На паузе" ? 'badge-pause' : 'bg-primary'}`}>{item.badge}</span>
                            <h6>{item.title}</h6>
                            <div className="media">
                              <div className="media-body">
                                <p>
                                  <a href={item.project1_url}><img className="img-20 me-1 rounded-circle" src={require(`../../assets/images/${item.img}`)} alt="" /> {item.project1}</a>
                                  <a className="mx-3" href={item.project2_url}><img className="img-20 me-1 rounded-circle" src={require(`../../assets/images/${item.img}`)} alt="" /> {item.project2}</a>
                                </p>
                              </div>
                            </div>
                            <p>{item.desc}</p>
                            <Row className="details">
                              <Col xs="6"><span>Сегодня</span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.today}</Col>
                              <Col xs="6"> <span>Месяц</span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.month}</Col>
                              <Col xs="6"> <span>Активных подписок</span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.subs}</Col>
                            </Row>
                            <div className="customers">
                              <ul>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../assets/images/${item.customers_img1}`)} alt="" /></li>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../assets/images/${item.customers_img2}`)} alt="" /></li>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../assets/images/${item.customers_img3}`)} alt="" /></li>
                                <li className="d-inline-block ms-2">
                                  <p className="f-12">{`+${item.like} ещё`}</p>
                                </li>
                              </ul>
                            </div>
                            <div className="project-status mt-4">
                              <Link to={`${process.env.PUBLIC_URL}/project/inside/`}><button style={mr1rem} className="btn btn-primary-gradien">К проекту</button></Link>
                              <button className="btn btn-danger-gradien"><i className="icofont icofont-ui-delete"></i> Удалить</button>
                            </div>
                          </div>
                        </Col>
                      )}
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row>
                      {allProject.map((item, i) =>
                        <Col xxl="4" lg="6" key={i}>
                          <div className="project-box">
                            <span className={`badge ${item.badge === "Активный" ? 'badge-success' : 'bg-primary' && item.badge === "На паузе" ? 'badge-pause' : 'bg-primary'}`}>{item.badge}</span>
                            <h6>{item.title}</h6>
                            <div className="media">
                              <div className="media-body">
                                <p>
                                  <a href={item.project1_url}><img className="img-20 me-1 rounded-circle" src={require(`../../assets/images/${item.img}`)} alt="" /> {item.project1}</a>
                                  <a className="mx-3" href={item.project2_url}><img className="img-20 me-1 rounded-circle" src={require(`../../assets/images/${item.img}`)} alt="" /> {item.project2}</a>
                                </p>
                              </div>
                            </div>
                            <p>{item.desc}</p>
                            <Row className="details">
                              <Col xs="6"><span>Сегодня</span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.today}</Col>
                              <Col xs="6"> <span>Месяц</span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.month}</Col>
                              <Col xs="6"> <span>Активных подписок</span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.subs}</Col>
                            </Row>
                            <div className="customers">
                              <ul>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../assets/images/${item.customers_img1}`)} alt="" /></li>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../assets/images/${item.customers_img2}`)} alt="" /></li>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../assets/images/${item.customers_img3}`)} alt="" /></li>
                                <li className="d-inline-block ms-2">
                                  <p className="f-12">{`+${item.like} ещё`}</p>
                                </li>
                              </ul>
                            </div>
                            <div className="project-status mt-4">
                              <Link to={`${process.env.PUBLIC_URL}/project/inside/`}><button style={mr1rem} className="btn btn-primary-gradien">К проекту</button></Link>
                              <button className="btn btn-danger-gradien"><i className="icofont icofont-ui-delete"></i> Удалить</button>
                            </div>
                          </div>
                        </Col>
                      )}
                    </Row>
                  </TabPane>
                </TabContent>

                <TabContent activeTab={activeTab} className={activeTab === "2" ? "active" : ''}>
                <TabPane tabId="1">
                    <Row>
                      {activeProject.map((item, i) =>
                        <Col xxl="4" lg="6" key={i}>
                          <div className="project-box">
                            <span className={`badge ${item.badge === "Активный" ? 'badge-success' : 'bg-primary' && item.badge === "На паузе" ? 'badge-pause' : 'bg-primary'}`}>{item.badge}</span>
                            <h6>{item.title}</h6>
                            <div className="media">
                              <div className="media-body">
                                <p>
                                  <a href={item.project1_url}><img className="img-20 me-1 rounded-circle" src={require(`../../assets/images/${item.img}`)} alt="" /> {item.project1}</a>
                                  <a className="mx-3" href={item.project2_url}><img className="img-20 me-1 rounded-circle" src={require(`../../assets/images/${item.img}`)} alt="" /> {item.project2}</a>
                                </p>
                              </div>
                            </div>
                            <p>{item.desc}</p>
                            <Row className="details">
                              <Col xs="6"><span>Сегодня</span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.today}</Col>
                              <Col xs="6"> <span>Месяц</span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.month}</Col>
                              <Col xs="6"> <span>Активных подписок</span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.subs}</Col>
                            </Row>
                            <div className="customers">
                              <ul>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../assets/images/${item.customers_img1}`)} alt="" /></li>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../assets/images/${item.customers_img2}`)} alt="" /></li>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../assets/images/${item.customers_img3}`)} alt="" /></li>
                                <li className="d-inline-block ms-2">
                                  <p className="f-12">{`+${item.like} ещё`}</p>
                                </li>
                              </ul>
                            </div>
                            <div className="project-status mt-4">
                              <Link to={`${process.env.PUBLIC_URL}/project/inside/`}><button style={mr1rem} className="btn btn-primary-gradien">К проекту</button></Link>
                              <button className="btn btn-danger-gradien"><i className="icofont icofont-ui-delete"></i> Удалить</button>
                            </div>
                          </div>
                        </Col>
                      )}
                    </Row>
                  </TabPane>
                </TabContent>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Project;