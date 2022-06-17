import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { classes } from "../../data/layouts";
import Breadcrumb from '../../layout/breadcrumb';
import { Container, Row, Col, Card, CardBody, TabContent, TabPane, CardHeader} from 'reactstrap';
import ApexCharts from 'react-apexcharts';
import { Currentlysale } from './chartsData/apex-charts-data';
import { PlusSquare } from 'react-feather';
import { Daily, Weekly, Monthly, AllTime, CashBalance, SalesForcasting, Yearly, CreateNewProject, TodaySubs, MonthSubs, ActiveSubs } from '../../constant';


const Default = () => {

  const [activeTab] = useState("1")
  const allProject = useSelector(content => content.Projectapp.all_Project);
  const defaultLayoutObj = classes.find(item => Object.values(item).pop(1) === 'compact-wrapper');
  const layout = localStorage.getItem('layout') || Object.keys(defaultLayoutObj).pop();


  const mr1rem = {
    marginRight: '1rem',
  };

  return (
    <Fragment>
      <Breadcrumb parent="Панель управления" title="Главная" />
      <Container fluid={true}>
        <Row className="second-chart-list third-news-update">
          <Col sm="12" className="dashboard-sec">
            <Card className="earning-card">
              <CardBody className="p-0">
                <Row className="m-0">
                  <Col xl="3" className="earning-content p-0">
                    <Row className="m-0 chart-left">
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"Заработано"}</h5>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"120,043.24 ₽"} </h5>
                        <p className="font-roboto">{"За все время"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"4 055.56 ₽"}</h5>
                        <p className="font-roboto">{"За этот месяц"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"1 004.11 ₽"}</h5>
                        <p className="font-roboto">{"За неделю"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"104.11"}</h5>
                        <p className="font-roboto">{"Сегодня"}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xl="9" className="p-0">
                    <div className="chart-right">
                      <Row className="m-0 p-tb">
                        <Col xl="8" md="8" sm="8" className="col-12 p-0">
                          <div className="inner-top-left">
                            <ul className="d-flex list-unstyled">
                              <li>{Daily}</li>
                              <li className="active">{Weekly}</li>
                              <li>{Monthly}</li>
                              <li>{Yearly}</li>
                              <li>{AllTime}</li>
                            </ul>
                          </div>
                        </Col>
                        <Col xl="4" md="4" sm="4" className="col-12 p-0 justify-content-end">
                          <div className="inner-top-right">
                            <ul className="d-flex list-unstyled justify-content-end">
                              <li>{"Доход"}</li>
                              <li>{"Подписчики"}</li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xl="12">
                          <CardBody className="p-0">
                            <div className="current-sale-container">
                              <ApexCharts id="chart-currently" options={Currentlysale.options} series={Currentlysale.series} type='area' height={250} />
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </div>
                    <Row className="border-top m-0">
                    <Col xl="4" md="12" className="pe-0">
                        <div className="media p-0">
                          <div className="media-left"><i className="icofont icofont-cur-dollar"></i></div>
                          <div className="media-body">
                            <h6>{SalesForcasting}</h6>
                            <p>{"5,000.20 ₽"}</p>
                          </div>
                        </div>
                      </Col>
                      <Col xl="4" md="6" sm="6">
                        <div className="media p-0">
                          <div className="media-left bg-secondary"><i className="icofont icofont-heart-alt"></i></div>
                          <div className="media-body">
                            <h6>{CashBalance}</h6>
                            <p>{"1 202"}</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid={true}>
        <Row className="project-card">
          <Col md="12" className="project-list">
            <Card>
              <Row>
                <Col md="6">
                  <h4>{"Мои проекты"}</h4>
                </Col>
                <Col md="6">
                  <div className="text-end">
                    <Link className="btn btn-primary" style={{ color: 'white' }} to={`${process.env.PUBLIC_URL}/project/new-project/${layout}`}> <PlusSquare />{CreateNewProject}</Link>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardBody>
                <TabContent activeTab={activeTab}>
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
                              <Col xs="6"><span>{TodaySubs} </span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.today}</Col>
                              <Col xs="6"> <span>{MonthSubs}</span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.month}</Col>
                              <Col xs="6"> <span>{ActiveSubs}</span></Col>
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
                              <Link to={`${process.env.PUBLIC_URL}/project/inside/${layout}`}><button style={mr1rem} className="btn btn-primary-gradien">К проекту</button></Link>
                              <button className="btn btn-danger-gradien"><i class="icofont icofont-ui-delete"></i> Удалить</button>
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
                              <Col xs="6"><span>{TodaySubs} </span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.today}</Col>
                              <Col xs="6"> <span>{MonthSubs}</span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.month}</Col>
                              <Col xs="6"> <span>{ActiveSubs}</span></Col>
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
                              <Link to={`${process.env.PUBLIC_URL}/project/inside/${layout}`}><button style={mr1rem} className="btn btn-primary-gradien">К проекту</button></Link>
                              <button className="btn btn-danger-gradien"><i class="icofont icofont-ui-delete"></i> Удалить</button>
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
                              <Col xs="6"><span>{TodaySubs} </span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.today}</Col>
                              <Col xs="6"> <span>{MonthSubs}</span></Col>
                              <Col xs="6" className={item.badge === "Активный" ? 'font-success' : 'font-primary' && item.badge === "На паузе" ? 'font-pause' : 'font-primary'}>{item.month}</Col>
                              <Col xs="6"> <span>{ActiveSubs}</span></Col>
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
                              <Link to={`${process.env.PUBLIC_URL}/project/inside/${layout}`}><button style={mr1rem} className="btn btn-primary-gradien">К проекту</button></Link>
                              <button className="btn btn-danger-gradien"><i class="icofont icofont-ui-delete"></i> Удалить</button>
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

      <Container fluid={true}>
        <Row className="project-card">
          <Col md="12" className="project-list">
            <Card>
              <Row>
                <Col md="6">
                  <h4>{"Тех поддержка"}</h4>
                </Col>
                <Col md="6">
                  <div className="text-end">
                    <Link className="btn btn-primary" style={{ color: 'white' }} to={`${process.env.PUBLIC_URL}/support/${layout}`}> <PlusSquare />{"Написать"}</Link>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Если нет проектов */}
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Создать проект</h5>
                <span>Для создания платного чата/канала нажмите кнопку ниже</span>
              </CardHeader>
              <CardBody>
                <Link className="btn btn-primary" style={{ color: 'white' }} to={`${process.env.PUBLIC_URL}/project/new-project/${layout}`}>{CreateNewProject}</Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* Если нет проектов */}
    </Fragment>
  );
}

export default Default;