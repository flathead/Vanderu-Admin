/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, FormGroup, Input, Button, Table, Toast, ToastHeader, ToastBody, CardHeader, Nav, NavItem, NavLink, TabContent } from 'reactstrap'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CheckCircle, Copy, Target } from 'react-feather';

const Partnership = () => {

    const [value1, setValue1] = useState("https://vanderu.ru/?ref=349f7h-238rh-23gtbs-w4thzf-34gbs");
    const [copied1, setCopied1] = useState(false);
    const [value2, setValue2] = useState("https://admin.vanderu.ru/?ref=349f7h-238rh-23gtbs-w4thzf-34gbs");
    const [copied2, setCopied2] = useState(false);
    const [value3, setValue3] = useState("https://t.me/Vanderu_bot?start=ref=349f7h-238rh-23gtbs-w4thzf-34gbs");
    const [copied3, setCopied3] = useState(false);

    const copyStyle = {
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0'
    }

    const [toastIsOpen, setToastIsOpen] = useState(false)
    const toggleToast = nextChecked => {
        setToastIsOpen(nextChecked);
        setTimeout( () => {
            setToastIsOpen(false);
        }, 4000)
    };
    const closeToast = () => {
        setToastIsOpen(false)
    }
    const toastStyle = {
        color: '#ffffff',
        backgroundColor: '#51bb25',
        display: 'flex',
        alignItems: 'center'
    }

    const [activeTab, setActiveTab] = useState("1")

    return (
        <Fragment>
        <Breadcrumb parent="Главная" title="Партнерская программа" />
            <Container className="partnership-container" fluid={true}>

            <Toast
            isOpen={toastIsOpen}
            fade={true}
            >
                <ToastHeader
                toggle={closeToast}
                style={toastStyle}
                >
                    <Copy /> Скопировано!
                </ToastHeader>
                <ToastBody>
                    Текст скопирован в буфер обмена.
                </ToastBody>
            </Toast>
            
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <span>Получайте комиссию <strong>25%</strong> с каждого приведенного клиента целый год.</span>
                            </CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Row>
                                        <Col xs="10">
                                            <Input
                                            type="text"
                                            value={value1}
                                            onChange={(e) => {
                                                setValue1(e.target.value);
                                                setCopied1(false);
                                            }}
                                            disabled
                                            />
                                        </Col>
                                        <Col xs="2" className="text-end">
                                            <CopyToClipboard
                                                /*  options={{ debug: props.debug, message: "" }} */
                                                text={value1}
                                                onCopy={() => setCopied1(true)}
                                            >
                                                <Button onClick={toggleToast} style={copyStyle} color="primary"><Copy /></Button>
                                            </CopyToClipboard>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <Col xs="10">
                                            <Input
                                            type="text"
                                            value={value2}
                                            onChange={(e) => {
                                                setValue2(e.target.value);
                                                setCopied2(false);
                                            }}
                                            disabled
                                            />
                                        </Col>
                                        <Col xs="2" className="text-end">
                                            <CopyToClipboard
                                                /*  options={{ debug: props.debug, message: "" }} */
                                                text={value2}
                                                onCopy={() => setCopied2(true)}
                                            >
                                                <Button onClick={toggleToast} style={copyStyle} color="primary"><Copy /></Button>
                                            </CopyToClipboard>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <Col xs="10">
                                            <Input
                                            type="text"
                                            value={value3}
                                            onChange={(e) => {
                                                setValue3(e.target.value);
                                                setCopied3(false);
                                            }}
                                            disabled
                                            />
                                        </Col>
                                        <Col xs="2" className="text-end">
                                            <CopyToClipboard
                                                /*  options={{ debug: props.debug, message: "" }} */
                                                text={value3}
                                                onCopy={() => setCopied3(true)}
                                            >
                                                <Button onClick={toggleToast} style={copyStyle} color="primary"><Copy /></Button>
                                            </CopyToClipboard>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <h4>Выплаты</h4>
                            </CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Row>
                                        <Col xs="12 my-1" sm="8">
                                            <Input
                                            disabled
                                            value="0 рублей к выплате"
                                            />
                                        </Col>
                                        <Col xs="12 my-1" sm="4">
                                            <Button color="primary" disabled>Недоступно</Button>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col xs="8">
                                            <Input
                                            disabled
                                            value="0 рублей выплачено"
                                            />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col xs="12 my-1" sm="8">
                                            <Input
                                            disabled
                                            value="Реквизитов нет"
                                            />
                                        </Col>
                                        <Col xs="12 my-1" sm="4">
                                            <Button color="primary">Редактировать</Button>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <Nav tabs className="border-tab">
                                    <NavItem><NavLink className={activeTab === "1" ? "active" : ''} onClick={() => setActiveTab("1")}><Target />{"Статистика"}</NavLink></NavItem>
                                    <NavItem><NavLink className={activeTab === "2" ? "active" : ''} onClick={() => setActiveTab("2")}><CheckCircle />{"История"}</NavLink></NavItem>
                                </Nav>

                                <TabContent className={activeTab === "1" ? "active" : ''} activeTab={activeTab}>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <td>
                                                    Выплата
                                                </td>
                                                <td>
                                                    Выплачено
                                                </td>
                                                <td>
                                                    Дата
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    ...
                                                </td>
                                                <td>
                                                    ...
                                                </td>
                                                <td>
                                                    ...
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </TabContent>
                                <TabContent className={activeTab === "2" ? "active" : ''} activeTab={activeTab}>
                                    Контент вкладки "История" не был прописан в ТЗ.
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Partnership;