import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Form, Media, Input, Label, CardFooter, Button, Modal, ModalBody, ModalHeader, ModalFooter, Table } from 'reactstrap'
import { FormGroup } from '@mobiscroll/react-lite';
import { useForm } from 'react-hook-form'

/*
 * Классы для обёртки инпута - .radio:
 * 
 * radio-pink - розовый
 * radio-green - зелёный
 * radio-gold - темно-желтый
 * radio-blue - синий
 * radio-purple - пурпурный
 * 
 * По аналогии - фон для бэйджей - bg-цвет
 */

const Tariffs = () => {

    const { register, formState: { errors } } = useForm();
    // Modal open state
    const [modal, setModal] = useState(false);
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);

  return (
    <Fragment>
      <Breadcrumb parent="Главная" title="Тарифы" />

      <Modal
      isOpen={modal}
      toggle={toggle}
      modalTransition={{ timeout: 2000 }}
      >
        <ModalHeader>
            <h4 className="m-0">Оплата сервиса</h4>
        </ModalHeader>
        <ModalBody>
            <Row className="pb-2">
                <Col>
                    <Form>
                        <FormGroup>
                            <Input
                            title="Подсказка"
                            id="paySelect"
                            name="pay_select"
                            type="select"
                            {...register('pay_select', { required: true })}
                            >
                            <option value="" disabled selected>
                                Выберите способ оплаты
                            </option>
                            <option>
                                1 способ
                            </option>
                            <option>
                                2 способ
                            </option>
                            <option>
                                3 способ
                            </option>
                            <option>
                                4 способ
                            </option>
                            <option>
                                5 способ
                            </option>
                            </Input>
                            <span style={{ color: "red" }}>{errors.pay_select && 'Выбор способа обязателен'}</span>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Input type="text" placeholder="Промокод" max="10" />
                    </FormGroup>
                </Col>
            </Row>
        </ModalBody>
        <ModalFooter className="justify-content-center">
            <Button color="primary">Перейти к оплате</Button>
        </ModalFooter>
      </Modal>
      <Container fluid={true}>
        <Row className="project-card">
          <Col sm="12">
            <Card className="height-equal">
                <CardHeader>
                    <span>Выберете подходящий тариф, по умолчанию все клиенты находятся на бесплатном тарифе "Lite"</span>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col sm="12">
                            <p className="mega-title m-b-5">Выберите тариф</p>
                        </Col>
                    </Row>
                    <Row>
                        <Form className="mega-vertical">
                            <Row>
                                <Col sm="4" md="3">
                                    <Card className="active-tariff">
                                        <Media className="p-20">
                                            <div className="radio radio-primary me-3">
                                                <Input id="radio1" type="radio" name="tariff" value="option1" onClick={toggle} />
                                                <Label for="radio1"></Label>
                                            </div>
                                            <Media body>
                                                <h6 className="mt-0 mega-title-badge">{"БЕСПЛАТНО"}<span className="badge bg-primary pull-right digits">{"lite"}</span></h6>
                                                <p>{"Условно-бесплатный тариф. Каждый 10 платеж отправляется на наши реквизиты."}</p>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                                <Col sm="4" md="3">
                                    <Card>
                                        <Media className="p-20">
                                            <div className="radio radio-pink me-3">
                                                <Input id="radio2" type="radio" name="tariff" value="option2" onClick={toggle} />
                                                <Label for="radio2"></Label>
                                            </div>
                                            <Media body>
                                                <h6 className="mt-0 mega-title-badge">{"2500 руб/мес"}<span className="badge bg-pink pull-right digits">{"medium"}</span></h6>
                                                <p>{"Неограниченное колличество подписок. Отсутствие рекламы."}</p>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                                <Col sm="4" md="3">
                                    <Card>
                                        <Media className="p-20">
                                            <div className="radio radio-green me-3">
                                                <Input id="radio3" type="radio" name="tariff" value="option3" onClick={toggle} />
                                                <Label for="radio3"></Label>
                                            </div>
                                            <Media body>
                                                <h6 className="mt-0 mega-title-badge">{"5000 руб/мес"}<span className="badge bg-green pull-right digits">{"hard"}</span></h6>
                                                <p>{"Личный менеджер, рассылки и все такое."}</p>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                                <Col sm="4" md="3">
                                    <Card>
                                        <Media className="p-20">
                                            <div className="radio radio-purple me-3">
                                                <Input id="radio4" type="radio" name="tariff" value="option4" onClick={toggle} />
                                                <Label for="radio4"></Label>
                                            </div>
                                            <Media body>
                                                <h6 className="mt-0 mega-title-badge">{"Годовой"}<span className="badge bg-purple pull-right digits">{"OMG"}</span></h6>
                                                <p>{"Lorem Ipsum dolor sit amet."}</p>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                            </Row>
                        </Form>
                    </Row>
                </CardBody>
                <CardFooter className="text-end">
                    <Button color="primary" className="m-r-15" type="submit" data-bs-original-title="" title="">Сохранить</Button>
                    <Button color="light" type="clear" data-bs-original-title="" title="">Отмена</Button>
                </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
            <Row>
                <Col>
                    <p>История оплат</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Table>
                            <thead>
                                <tr>
                                    <td>Дата</td>
                                    <td>Тариф</td>
                                    <td>Сумма</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12.03.2019</td>
                                    <td>Год</td>
                                    <td>5000 р.</td>
                                </tr>
                                <tr>
                                    <td>12.03.2020</td>
                                    <td>Год</td>
                                    <td>5000 р.</td>
                                </tr>
                                <tr>
                                    <td>23.03.2022</td>
                                    <td>Полгода</td>
                                    <td>3000 р.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Tariffs;