import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, Form, Input, CardFooter, Button, CardHeader } from 'reactstrap'
import { Link } from 'react-router-dom';

const Support = () => {
    
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
                                    <p>Почитайте <Link to={`${process.env.PUBLIC_URL}/faq/`}>ЧаВо</Link>, может решение Вашей проблемы уже существует.</p>
                                </CardHeader>
                                <CardBody>
                                    <span>Сообщение:</span>
                                    <Input
                                    type="textarea"
                                    maxLength="4090"
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