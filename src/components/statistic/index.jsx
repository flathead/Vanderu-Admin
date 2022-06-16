import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import Chart from 'react-apexcharts'
import { apexAreaChart } from "./apexData";
import { Container, Row, Col, Card, CardHeader, CardBody, Nav, NavItem, NavLink, TabContent, Table } from 'reactstrap'
import { CheckCircle, Target } from 'react-feather';

const Statistic = (props) => {

  const [activeTab, setActiveTab] = useState("1")

  return (
    <Fragment>
      <Breadcrumb parent="Главная" title="Статистика" />
      <Container fluid={true} className="charts-container">
        <Row>

          <Col xs="12">
            <Card>
              <CardHeader>
                <h5>{"Детализация"} </h5>
              </CardHeader>
              <CardBody>
                <Nav tabs className="border-tab">
                    <NavItem><NavLink className={activeTab === "1" ? "active" : ''} onClick={() => setActiveTab("1")}><Target />{"Месяц"}</NavLink></NavItem>
                    <NavItem><NavLink className={activeTab === "2" ? "active" : ''} onClick={() => setActiveTab("2")}><CheckCircle />{"Неделя"}</NavLink></NavItem>
                </Nav>

                <TabContent className={activeTab === "1" ? "active" : ''} activeTab={activeTab}>
                  <div id="basic-apex">
                    <Chart options={apexAreaChart.options} series={apexAreaChart.series} type="area" height={350} />
                  </div>
                </TabContent>
                <TabContent className={activeTab === "2" ? "active" : ''} activeTab={activeTab}>
                  <div id="basic-apex">
                    <Chart options={apexAreaChart.weekOptions} series={apexAreaChart.weekSeries} type="area" height={350} />
                  </div>
                </TabContent>
                
              </CardBody>
            </Card>
          </Col>

          <Col xs="12">
            <Card>
              <CardHeader>
                <TabContent className={activeTab === "1" ? "active" : ''} activeTab={activeTab}>
                  <h5>{"Статистика за месяц"}</h5>
                </TabContent>
                <TabContent className={activeTab === "2" ? "active" : ''} activeTab={activeTab}>
                  <h5>{"Статистика за неделю"}</h5>
                </TabContent>
              </CardHeader>
              <CardBody>
                <TabContent className={activeTab === "1" ? "active" : ''} activeTab={activeTab}>
                  <Table>
                    <thead>
                      <tr>
                        <th>Дата</th>
                        <th>Подписки</th>
                        <th>Деньги</th>
                        <th>Новые подписки</th>
                        <th>Кто продлил</th>
                        <th>Доход с новых подписок</th>
                        <th>Доход с ребиллов</th>
                        <th>Общий доход</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">01.06.22</th>
                        <td>8 064</td>
                        <td>16 031</td>
                        <td>+203</td>
                        <td>@mark, @daniel, @stephen</td>
                        <td>2 468</td>
                        <td>984</td>
                        <td>10 387</td>
                      </tr>
                      <tr>
                        <th scope="row">02.06.22</th>
                        <td>2 322</td>
                        <td>13 453</td>
                        <td>+28</td>
                        <td>@kojima_hideo</td>
                        <td>1 586</td>
                        <td>465</td>
                        <td>11 217</td>
                      </tr>
                    </tbody>
                  </Table>
                </TabContent>
                <TabContent className={activeTab === "2" ? "active" : ''} activeTab={activeTab}>
                <Table>
                    <thead>
                      <tr>
                        <th>Дата</th>
                        <th>Подписки</th>
                        <th>Деньги</th>
                        <th>Новые подписки</th>
                        <th>Кто продлил</th>
                        <th>Доход с новых подписок</th>
                        <th>Доход с ребиллов</th>
                        <th>Общий доход</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">16.06.22</th>
                        <td>43 064</td>
                        <td>23 031</td>
                        <td>+2333</td>
                        <td>@durov</td>
                        <td>23 168</td>
                        <td>5489</td>
                        <td>35 425</td>
                      </tr>
                      <tr>
                        <th scope="row">17.06.22</th>
                        <td>64 436</td>
                        <td>31 754</td>
                        <td>+4367</td>
                        <td>@kojima_hideo, @durov</td>
                        <td>18 543</td>
                        <td>853</td>
                        <td>53 347</td>
                      </tr>
                    </tbody>
                  </Table>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        
        </Row>
      </Container>
    </Fragment>
  );
}

export default Statistic;