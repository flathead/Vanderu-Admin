import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Input, Col, Card, CardHeader, CardBody, Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Form } from 'reactstrap'
import { DollarSign, Hash, Settings, Type } from 'react-feather';
import { useForm } from 'react-hook-form'
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Покупатель',
        selector: row => row.buyer,
        sortable: true,
    },
    {
        name: 'Скриншот',
        selector: row => row.screenshot,
        sortable: false,
    },
    {
        name: 'Реквизиты',
        selector: row => row.req,
        sortable: false,
    },
    {
        name: 'Сумма',
        selector: row => row.sum,
        sortable: true,
    },
    {
        name: 'Комментарий',
        selector: row => row.comment,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        buyer: 'Yvette Nikolaus',
        screen: '<img src="http://placeimg.com/640/480" alt="" />',
        req: '6759-8996-9010-2692-39',
        sum: '93.72 ₨',
        comment: 'multi-byte Account'
    },
    {
        id: 2,
        buyer: 'Marianne Weissnat',
        screen: 'http://placeimg.com/640/480/technics',
        req: '3KKQsE47wc7iPa23Ve9A2DAKpFtJ',
        sum: '569.35 ¥',
        comment: 'Fresh zero override'
    },
    {
        id: 3,
        buyer: 'Garrett Kautzer',
        screen: 'http://placeimg.com/640/480/people',
        req: '6380-1197-4957-9145',
        sum: '93.72 ₱',
        comment: 'Fresh Rubber'
    },
]

function PayTable() {
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};

const Pay = () => {

    const [isCollaps0, setIsCollaps0] = useState(true);
    const [isCollaps1, setIsCollaps1] = useState(false);
    const [isCollaps2, setIsCollaps2] = useState(false);
    const [isCollaps3, setIsCollaps3] = useState(false);

    const { register, formState: { errors } } = useForm();

    const [cryptoModal, cryptoSetModal] = useState(false);
    const cryptoToggle = () => cryptoSetModal(!cryptoModal);

    const [qiwiModal, qiwiSetModal] = useState(false);
    const qiwiToggle = () => qiwiSetModal(!qiwiModal);

    /* const [yooModal, yooSetModal] = useState(false);
    const yooToggle = () => yooSetModal(!yooModal); */

    const [reqModal, reqSetModal] = useState(false);
    const reqToggle = () => reqSetModal(!reqModal);

    document.querySelectorAll('button.connected').forEach(function (elem) {
        elem.innerHTML = 'Отключить'
    })

    return (
        <Fragment>
            <Breadcrumb parent="Главная" title="Платёжные системы" />

            {/* Криптовалюты */}
            <Modal
            isOpen={cryptoModal}
            toggle={cryptoToggle}
            modalTransition={{ timeout: 2000 }}
            >
                <ModalHeader>
                    <h4 className="m-0">Добавление CryptoBot</h4>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <Row className="pb-2">
                            <Col>
                                <FormGroup>
                                    <p>Перейдите в <a href="https://t.me/CryptoBot">@CryptoBot</a>, создайте новое приложение и скопируйте токен.</p>
                                    <p>Для подключения автоподтверждения платежей необходимо установить эту ссылку в настройках WebHook:</p>
                                    <p>https://api.vanderu.ru/api/buy/notify/crypto/2</p>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Input
                                    type="text"
                                    placeholder="Токен"
                                    id="crypto_token"
                                    {...register('crypto_token', { required: true })}
                                    />
                                    <span style={{ color: "red" }}>{errors.crypto_token && 'Введите токен!'}</span>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <Button color="primary">Добавить токен</Button>
                </ModalFooter>
            </Modal>

            {/* QIWI */}
            <Modal
            isOpen={qiwiModal}
            toggle={qiwiToggle}
            modalTransition={{ timeout: 2000 }}
            >
                <ModalHeader>
                    <h4 className="m-0">Добавление QIWI</h4>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <Row className="pb-2">
                            <Col>
                                <FormGroup>
                                    <p>Описание метода.</p>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Input
                                    type="text"
                                    placeholder="Введите токен"
                                    id="qiwi_token"
                                    {...register('qiwi_token', { required: true })}
                                    />
                                    <span style={{ color: "red" }}>{errors.qiwi_token && 'Введите токен!'}</span>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <Button color="primary">Добавить токен</Button>
                </ModalFooter>
            </Modal>

            {/* Реквизиты */}
            <Modal
            isOpen={reqModal}
            toggle={reqToggle}
            modalTransition={{ timeout: 2000 }}
            >
                <ModalHeader>
                    <h4 className="m-0">Создание полуавтоматической системы</h4>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Input
                                    type="text"
                                    placeholder="Введите название"
                                    id="req_name"
                                    {...register('req_name', { required: true })}
                                    />
                                    <span style={{ color: "red" }}>{errors.req_name && 'Название обязательно'}</span>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                    type="text"
                                    placeholder="Реквизиты"
                                    id="req_key"
                                    {...register('req_key', { required: true })}
                                    />
                                    <span style={{ color: "red" }}>{errors.req_key && 'Введите реквизиты'}</span>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                    type="select"
                                    id="req_currency"
                                    {...register('req_currency', { required: true })}
                                    >
                                        <option value="rub" selected>RUB</option>
                                        <option value="usd">USD</option>
                                        <option value="eur">EUR</option>
                                    </Input>
                                    <span style={{ color: "red" }}>{errors.req_currency && 'Введите реквизиты'}</span>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                    type="number"
                                    value="1"
                                    maxlength="10"
                                    minlength="0"
                                    id="req_num"
                                    />
                                    <span style={{ color: "red" }}>{errors.req_num && 'Поле обязательно'}</span>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <Button color="primary">Отправить</Button>
                </ModalFooter>
            </Modal>

            <Container fluid={true} className="pay-container">
                    <Row className="default-according style-1">
                        <Col xs="12">
                            <Card>
                                <CardHeader className="connected">
                                    <span className="connected-span">ПОДКЛЮЧЕНО</span>
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps0(!isCollaps0)}
                                            data-toggle="collapse" data-target="#collapseicon" aria-expanded={isCollaps0} aria-controls="collapseicon">
                                            <Hash />
                                            {"Настройки оплаты криптовалютой"}
                                        </button>
                                    </h5>
                                </CardHeader>
                                <Collapse isOpen={isCollaps0}>
                                    <CardBody>
                                        <Button color="primary" className="connected" onClick={cryptoToggle}>Подключить</Button>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                        <Col xs="12">
                            <Card>
                                <CardHeader>
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps1(!isCollaps1)}
                                            data-toggle="collapse" data-target="#collapseicon" aria-expanded={isCollaps1} aria-controls="collapseicon">
                                            <Settings />
                                            {"Настройки оплаты QIWI"}
                                        </button>
                                    </h5>
                                </CardHeader>
                                <Collapse isOpen={isCollaps1}>
                                    <CardBody>
                                        <Button color="primary" onClick={qiwiToggle}>Добавить токен</Button>
                                        <Button color="primary">Отключить</Button>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                        <Col xs="12">
                            <Card>
                                <CardHeader>
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps2(!isCollaps2)}
                                            data-toggle="collapse" data-target="#collapseicon" aria-expanded={isCollaps2} aria-controls="collapseicon">
                                            <DollarSign />
                                            {"Настройки ЮMoney"}
                                        </button>
                                    </h5>
                                </CardHeader>
                                <Collapse isOpen={isCollaps2}>
                                    <CardBody>
                                        <Button color="primary">Подключить</Button>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                        <Col xs="12">
                            <Card>
                                <CardHeader>
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps3(!isCollaps3)}
                                            data-toggle="collapse" data-target="#collapseicon" aria-expanded={isCollaps3} aria-controls="collapseicon">
                                            <Type />
                                            {"Настройки платежей по реквизитам"}
                                        </button>
                                    </h5>
                                </CardHeader>
                                <Collapse isOpen={isCollaps3}>
                                    <CardBody>
                                        <Button color="primary" onClick={reqToggle}>Создать</Button>
                                        <Button color="primary">Переименовать</Button>
                                        <Button color="primary">Изменить реквизиты</Button>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <CardHeader>
                                    <h5>{"Подтверждения платежей"}</h5>
                                </CardHeader>
                                <CardBody>
                                    <PayTable
                                    direction="ltr"
                                    fixedHeaderScrollHeight="300px"
                                    highlightOnHover
                                    pagination
                                    responsive
                                    subHeader
                                    subHeaderAlign="right"
                                    subHeaderWrap
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
            </Container>
        </Fragment>
    );
}

export default Pay;