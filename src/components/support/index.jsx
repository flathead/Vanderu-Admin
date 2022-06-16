import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, Form, Input, CardFooter, Button, CardHeader } from 'reactstrap'
import { classes } from '../../data/layouts';
import { Link } from 'react-router-dom';

const Support = () => {

    const defaultLayoutObj = classes.find(item => Object.values(item).pop(1) === 'compact-wrapper');
    const layout = localStorage.getItem('layout') || Object.keys(defaultLayoutObj).pop();
    
    return (
        <Fragment>
        <Breadcrumb parent="Другое" title="Тех поддержка" />
            <Container className="support-container" fluid={true}>
                <Row>
                    <Col>
                        <Card>
                            <Form>
                                <CardHeader>
                                    <p>Есть проблемы или нужна помощь? Отправьте Ваше сообщение поддержке.</p>
                                    <p>Почитайте <Link to={`${process.env.PUBLIC_URL}/app/faq/${layout}`}>ЧаВо</Link>, может решение Вашей проблемы уже существует.</p>
                                </CardHeader>
                                <CardBody>
                                    <span>Сообщение:</span>
                                    <Input
                                    type="textarea"
                                    maxlength="4090"
                                    className="area"
                                    />
                                    <p>Не спамьте. Максимальное кол-во символов - 4090.</p>
                                </CardBody>
                                <CardFooter className="text-start">
                                    <Button color="primary">Отправить сообщение</Button>
                                </CardFooter>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Support;