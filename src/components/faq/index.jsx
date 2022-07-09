import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { FileText, PlusSquare, HelpCircle } from 'react-feather';

import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, CardHeader, Media, Collapse } from 'reactstrap';

const FaqComponent = () => {

    
    const [isCollaps, setIsCollaps] = useState(false);
    const [isCollaps1, setIsCollaps1] = useState(false);
    const [isCollaps2, setIsCollaps2] = useState(false);
    const [isCollaps3, setIsCollaps3] = useState(false);
    const [isCollaps4, setIsCollaps4] = useState(false);
    const [isCollaps5, setIsCollaps5] = useState(false);
    const [isCollaps6, setIsCollaps6] = useState(false);

    const colorWhite = {color: "white", textDecoration: "underline"}


    return (
        <Fragment>
            <Breadcrumb parent="Другое" title="ЧаВо" />
            <Container fluid={true}>
                <div className="faq-wrap">
                    <Row>
                        <Col xl="4 xl-100">
                            <Card className="bg-primary">
                                <CardBody>
                                    <Media className="faq-widgets">
                                        <Media body>
                                            <h5>{"Часто задаваемые вопросы"}</h5>
                                            <p>Если вы не нашли решения своей проблемы, напишите сообщение в <Link style={colorWhite} to={`${process.env.PUBLIC_URL}/support/`}>тех. поддержку</Link>.</p>
                                        </Media><FileText />
                                    </Media>
                                </CardBody>
                            </Card>
                        </Col>
                        
                        <Col lg="12">
                            <div className="header-faq">
                                <h5 className="mb-0">{"Быстрые ответы на вопросы"}</h5>
                            </div>
                            <Row className="default-according style-1 faq-accordion" id="accordionoc">
                                <div className="col sm-12">
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps(!isCollaps)}
                                                    data-toggle="collapse" data-target="#collapseicon" aria-expanded={isCollaps} aria-controls="collapseicon">
                                                    <HelpCircle />
                                                    {"Что умеет этот бот?"}
                                                </button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps}>
                                            <CardBody>Подробный ответ здесь: <a href="https://t.me/c/1196087271/4">https://t.me/c/1196087271/4</a></CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps1(!isCollaps1)}
                                                    data-toggle="collapse" data-target="#collapseicon2" aria-expanded={isCollaps1} aria-controls="collapseicon2">
                                                    <HelpCircle /> {"Какие тарифы есть у сервиса?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps1}>
                                            <CardBody>Подробный ответ здесь: <a href="https://t.me/c/1196087271/4">https://t.me/c/1196087271/4</a></CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps2(!isCollaps2)}
                                                    data-toggle="collapse" data-target="#collapseicon3" aria-expanded={isCollaps2} aria-controls="collapseicon2">
                                                    <HelpCircle />{"Как подключить @VanderuBot и начать получать оплаты?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps2}>
                                            <CardBody>Пошаговую инструкцию и описание можно найти здесь: <a href="https://t.me/c/1196087271/5">https://t.me/c/1196087271/5</a></CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps3(!isCollaps3)}
                                                    data-toggle="collapse" data-target="#collapseicon4" aria-expanded={isCollaps3} aria-controls="collapseicon2">
                                                    <HelpCircle /> {"Как настроить приемы платежей QIWI?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps3}>
                                            <CardBody>Подробный ответ здесь: <a href="https://t.me/c/1196087271/9">https://t.me/c/1196087271/9</a></CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps4(!isCollaps4)}
                                                    data-toggle="collapse" data-target="#collapseicon5" aria-expanded={isCollaps4}>
                                                    <HelpCircle /> {"Как настроить прием Яндекс.Деньги в своем боте для подписок?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps4}>
                                            <CardBody>Подробный ответ здесь: <a href="https://t.me/c/1196087271/10">https://t.me/c/1196087271/10</a></CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps5(!isCollaps5)}
                                                    data-toggle="collapse" data-target="#collapseicon7" aria-expanded={isCollaps5} aria-controls="collapseicon2">
                                                    <HelpCircle />{'Договор-оферта на использование сервиса Vanderu ООО "Вандеру"'}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps5}>
                                            <CardBody><a href="https://telegra.ph/Dogovor-oferta-09-02-2">https://telegra.ph/Dogovor-oferta-09-02-2</a></CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps6(!isCollaps6)}
                                                    data-toggle="collapse" data-target="#collapseicon8" aria-expanded={isCollaps6} aria-controls="collapseicon2">
                                                    <HelpCircle /> {'Политика конфиденциальности сервиса Vanderu ООО "Вандеру"'}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps6}>
                                            <CardBody><a href="https://telegra.ph/Politika-konfidencialnosti-09-04-3">https://telegra.ph/Politika-konfidencialnosti-09-04-3</a></CardBody>
                                        </Collapse>
                                    </Card>
                                </div>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="project-card">
                        <Col md="12" className="project-list">
                            <Card>
                            <Row>
                                <Col md="6">
                                <h4>{"Тех поддержка"}</h4>
                                </Col>
                                <Col md="6">
                                <div className="text-end">
                                    <Link className="btn btn-primary" style={{ color: 'white' }} to={`${process.env.PUBLIC_URL}/support/`}> <PlusSquare />{"Написать"}</Link>
                                </div>
                                </Col>
                            </Row>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};

export default FaqComponent;