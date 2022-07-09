import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Input, CardFooter, Button, Table } from 'reactstrap'
import Switch from "react-switch";
import DatePicker from 'react-datepicker';

const Spam = () => {

    const [startDate, setStartDate] = useState(new Date());

    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
        document.querySelector('.delay').classList.toggle('show')
    };

    // Стейт ниже настроить для периодической отправки
    const [tempChecked, tempSetChecked] = useState(false);
    const temporaryChange = tempChecked => {
        tempSetChecked(tempChecked);
        document.querySelector('.period').classList.toggle('show')
    }

    

    return (
        <Fragment>
        <Breadcrumb parent="Главная" title="Рассылка" />
            <Container className="spam-container" fluid={true}>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Input type="select" name="projects">
                                            <option value="" disabled>Выбери проект</option>
                                            <option value="project-id-1">Проект 1</option>
                                            <option value="project-id-2">Проект 2</option>
                                            <option value="project-id-3">Проект 3</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="select" name="sendto">
                                            <option value="" disabled>Выбери получателей</option>
                                            <option value="to-id-1">Получатель 1</option>
                                            <option value="to-id-2">Получатель 2</option>
                                            <option value="to-id-3">Получатель 3</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <label className="switch-box">
                                            <Switch
                                            onChange={handleChange}
                                            checked={checked}
                                            className="react-switch me-3"
                                            onColor="#1ad100"
                                            onHandleColor="#05a400"
                                            handleDiameter={30}
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                            height={20}
                                            width={48}
                                            />
                                            <span>Отложенная рассылка</span>
                                        </label>
                                    </FormGroup>
                                    <Col sm="6">
                                        <FormGroup className="delay">
                                            <label htmlFor="date">Выберите дату и время</label>
                                            <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            showTimeSelect
                                            timeFormat="HH:mm"
                                            timeIntervals={15}
                                            timeCaption="time"
                                            dateFormat="MMMM d, yyyy h:mm aa"
                                            className="form-select"
                                            id="date"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <FormGroup>
                                        <label className="switch-box">
                                            <Switch
                                            onChange={temporaryChange}
                                            checked={tempChecked}
                                            className="react-switch me-3"
                                            onColor="#1ad100"
                                            onHandleColor="#05a400"
                                            handleDiameter={30}
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                            height={20}
                                            width={48}
                                            />
                                            <span>Периодическая рассылка</span>
                                        </label>
                                    </FormGroup>
                                    <Col sm="6">
                                        <FormGroup className="period">
                                            <label htmlFor="period">Количество дней в периоде между отправками</label>
                                            <Input 
                                            type="number"
                                            id="period"
                                            placeholder="Введите количество"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <FormGroup>
                                        <label htmlFor="spamText">Сообщение</label>
                                        <Input
                                        id="spamText"
                                        name="text"
                                        type="textarea"
                                        maxLength="4096"
                                        />
                                        <p>Не спамьте. Максимальная длина сообщения - 4096 символов.</p>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <CardFooter className="text-start">
                                <Button color="primary" className="me-3 mb-3">Сохранить сообщение</Button>
                                <Button color="primary" className="mb-3" disabled>Отправить 0 пользователям</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <Table>
                                <thead>
                                    <tr>
                                        <td>
                                            Активные
                                        </td>
                                        <td>
                                            Отложенные
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Нет ни одной активной рассылки
                                        </td>
                                        <td>
                                            Нет ни одной запланированной рассылки
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Table>
                                <thead>
                                    <tr>
                                        <td>
                                            Периодические
                                        </td>
                                        <td>
                                            Завершённые
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
                                    </tr>
                                </tbody>
                            </Table>    
                        </Card>  
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Spam;