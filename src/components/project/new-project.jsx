import React, { Fragment, useState, useRef } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button, Badge, Table } from 'reactstrap'
import { useForm } from 'react-hook-form'
import { addNewProject } from '../../redux/project-app/action'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import Switch from "react-switch";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

let i = 0

function addRowToTable() {
  const table = document.getElementById('tariff-table')
  i++
  let tableName = document.getElementById('tariff_name').value
  let tablePrice = document.getElementById('tariff_price').value
  let tablePeriod = document.getElementById('tariff_period').value
  let tableResourse = document.getElementById('tariff_resourse').value

  table.insertAdjacentHTML('beforeend', '<tr id="table-row-' + i + '"><td class="name">' + tableName + '</td><td class="price">' + tablePrice + '</td><td class="period">' + tablePeriod + '</td><td class="resourse">' + tableResourse + '</td></tr>')
}


const Newproject = (props) => {

  function useInput(defaultValue) {

    const [value] = useState(defaultValue); // добавить setValue, если нужно динамически обновлять значение
    
    function onChange(e) {
      if (e.target.value.length >= 2) {
        e.target.closest('.form-row').nextElementSibling.classList.add('show')
        /* setPercent(percentage + 25) */
      } else if (e.target.value.length < 2) {
        e.target.closest('.form-row').nextElementSibling.classList.remove('show')
        /* setPercent(percentage - 25) */
      }
    }
    
    return {
      value,
      onChange,
    };
  }

  
  const ref = useRef(null)
  const [percentage, setPercent] = useState(0);

  const formChange = event => {
    let showCounter = document.querySelectorAll('.form-row.show').length
    setPercent(showCounter * 25)
    console.log('Полоса прогресса заполнена на ' + percentage + '%. ' + showCounter + ' показанных элементов.')
  };


  const inputProps = useInput();

  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const AddProject = data => {
    console.log("data", data);
    if (data !== '') {
      dispatch(addNewProject(data))
      props.history(`${process.env.PUBLIC_URL}/project/project-list/`)
    } else {
      errors.showMessages();
    }
  };

  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };
  return (
    
    <Fragment>
      <Breadcrumb parent="Каталог проектов" title="Новый проект" />
      <Container fluid={true} className="projectlist new-project">
        <Row className="progress-container">
        <Col sm="12">
          <Card>
            <CardBody>
            <ProgressBar
              percent={percentage}
              filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
            >
              <Step transition="scale">
                {({ accomplished }) => (
                  <div className="progress-icon">
                    <img
                      style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                      width="40"
                      src="https://cdn-icons-png.flaticon.com/512/1783/1783356.png"
                      alt=""
                    />
                    <p>Название</p>
                  </div>
                )}
              </Step>
              <Step transition="scale">
                {({ accomplished }) => (
                  <div className="progress-icon">
                    <img
                      style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                      width="40"
                      src="https://cdn-icons-png.flaticon.com/512/6335/6335489.png"
                      alt=""
                    />
                    <p>Выбор ресурса</p>
                  </div>
                )}
              </Step>
              <Step transition="scale">
                {({ accomplished }) => (
                  <div className="progress-icon">
                    <img
                      style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                      width="40"
                      src="https://cdn-icons-png.flaticon.com/512/6335/6335569.png"
                      alt=""
                    />
                    <p>Тариф</p>
                  </div>
                )}
              </Step>
              <Step transition="scale">
                {({ accomplished }) => (
                  <div className="progress-icon">
                    <img
                      style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                      width="40"
                      src="https://cdn-icons-png.flaticon.com/512/6335/6335597.png"
                      alt=""
                    />
                    <p>Оплата</p>
                  </div>
                )}
              </Step>
              <Step transition="scale">
                {({ accomplished }) => (
                  <div className="progress-icon">
                    <img
                      style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                      width="40"
                      src="https://cdn-icons.flaticon.com/png/512/4436/premium/4436481.png?token=exp=1655074162~hmac=98f25ff32bd37233b4489fb6f9d61c71"
                      alt=""
                    />
                    <p>Готово!</p>
                  </div>
                )}
              </Step>
            </ProgressBar>
            </CardBody>
          </Card>
        </Col>
        </Row>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form className="theme-form" onChange={formChange} onSubmit={handleSubmit(AddProject)}>

                  <Row ref={ref} className="form-row">
                    <Col>
                      <FormGroup>
                        <Label>{"Придумай название проекта"}</Label>
                        <Input title="Подсказка" className="form-control" type="text" name="title" placeholder="Название проекта *" {...register('title', { required: true })} {...inputProps} />
                        <span style={{ color: "red" }}>{errors.title && 'Название обязательно'}</span>
                      </FormGroup>
                    </Col>
                  </Row>
                  
                  <Row ref={ref} className="form-row">
                  <Row>
                    <Col sm="8">
                      <FormGroup>
                        <Label for="resourseSelect">
                          Добавь ресурс <span className="">(можно выбрать сразу несколько)</span>
                        </Label>
                        <Input
                        title="Подсказка"
                        id="resourseSelect"
                        name="resourse_select"
                        type="select"
                        {...register('resourse_select', { required: true })}
                        {...inputProps}
                        >
                          <option value="" disabled selected>
                            Выбери ресурс, к которому подключить сервис
                          </option>
                          <option>
                            1 ресурс
                          </option>
                          <option>
                            2 ресурс
                          </option>
                          <option>
                            3 ресурс
                          </option>
                          <option>
                            4 ресурс
                          </option>
                          <option>
                            5 ресурс
                          </option>
                        </Input>
                        <span style={{ color: "red" }}>{errors.resourse_select && 'Выбор ресурса обязателен'}</span>
                      </FormGroup>
                    </Col>
                    <Col sm="4" className="d-flex align-items-center justify-content-end">
                      <Button color="primary">Добавить</Button>
                    </Col>
                  </Row>

                  <Row>
                    <div className="selected pb-4">
                      <span>Выбраны:</span>
                      <div className="list">
                        <Badge color="success">1</Badge>
                        <Badge color="success">2</Badge>
                      </div>
                    </div>
                  </Row>
                </Row>
                  
                <Row ref={ref} className="form-row">
                  <Row>
                    <p>{"Настрой и добавь тарифы к ресурсам (каналам/группам)"}</p>
                  </Row>
                  <Row>
                    <Col sm="4">
                      <FormGroup>
                        <Input title="Подсказка" className="form-control" type="text" name="tariff" id="tariff_name" placeholder="Название тарифа *" {...register('tariff', { required: true })} />
                        <span style={{ color: "red" }}>{errors.tariff && 'Название тарифа обязательно'}</span>
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Input title="Подсказка" className="form-control" type="text" name="tariff_price" id="tariff_price" placeholder="Стоимость тарифа *" {...register('tariff_price', { required: true })} />
                        <span style={{ color: "red" }}>{errors.tariff_price && 'Заполните поле стоимости тарифа'}</span>
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Input title="Подсказка" className="form-control" type="text" name="tariff_period" id="tariff_period" placeholder="Название проекта *" {...register('tariff_period', { required: true })} />
                        <span style={{ color: "red" }}>{errors.tariff_period && 'Название обязательно'}</span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="8">
                      <FormGroup>
                      <Input
                       title="Подсказка"
                        name="tariff_resourse"
                        type="select"
                        {...register('tariff_resourse', { required: true })}
                        {...inputProps}
                        id="tariff_resourse"
                        >
                          <option value="" disabled selected>
                            Выбери ресурс, для которого создать тариф
                          </option>
                          <option>
                            1 ресурс
                          </option>
                          <option>
                            2 ресурс
                          </option>
                          <option>
                            3 ресурс
                          </option>
                          <option>
                            4 ресурс
                          </option>
                          <option>
                            5 ресурс
                          </option>
                        </Input>
                        <span style={{ color: "red" }}>{errors.tariff_resourse && 'Название обязательно'}</span>
                      </FormGroup>
                    </Col>
                    <Col sm="4" className="d-flex align-items-center justify-content-end">
                      <Button color="primary" onClick={addRowToTable}>Добавить</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Table>
                      <thead>
                        <tr>
                          <td>
                            Название
                          </td>
                          <td>
                            Цена
                          </td>
                          <td>
                            Кол-во дней
                          </td>
                          <td>
                            Ресурс
                          </td>
                        </tr>
                      </thead>
                      <tbody id="tariff-table">

                      </tbody>
                    </Table>
                  </Row>
                </Row>

                <Row ref={ref} className="form-row">
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Добавьте возможные способы оплаты"}</Label>
                        <Input title="Подсказка" className="form-control" type="text" name="qiwi_token" placeholder="QIWI API-токен *" {...register('qiwi_token', { required: true })} {...inputProps} />
                        <span style={{ color: "red" }}>{errors.qiwi_token && 'Токен обязателен'}</span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col><a href="/#">Добавь оплату на карту или по реквизитам</a></Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Input title="Подсказка" className="form-control" type="text" name="pay_name" placeholder="Название платёжной системы (например, Карта Сбербанка) *" {...register('pay_name', { required: true })}/>
                        <span style={{ color: "red" }}>{errors.pay_name && 'Поле обязательно'}</span>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input title="Подсказка" className="form-control" type="text" name="pay_req" placeholder="Реквизиты (номер вашей карты для оплаты или адрес кошелька) *" {...register('pay_req', { required: true })}/>
                        <span style={{ color: "red" }}>{errors.pay_req && 'Поле обязательно'}</span>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input title="Подсказка" className="form-control" type="text" name="pay_time" placeholder="Сколько часов вам нужно на проверку и подтверждение платежа *" {...register('pay_time', { required: true })}/>
                        <span style={{ color: "red" }}>{errors.pay_time && 'Поле обязательно'}</span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  </Row>
                </Row>

                <Row ref={ref} className="form-row">
                    <Row>
                      <Col>
                        <FormGroup>
                        <label>
                          <Switch
                            onChange={handleChange}
                            checked={checked}
                            className="react-switch"
                          />
                          <span className="mx-2">Создать бота автоматически</span>
                        </label>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Input title="Подсказка" className="form-control" type="text" name="bot_name" placeholder="Название бота (например: Бот для канала Фильмы) *" {...register('bot_name', { required: true })} />
                          <span style={{ color: "red" }}>{errors.bot_name && 'Поле обязательно'}</span>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Input title="Подсказка" className="form-control" type="text" name="bot_nickname" placeholder="Никнейм бота (латинские символы, окончание на _bot) *" {...register('bot_nickname', { required: true })} {...inputProps} />
                          <span style={{ color: "red" }}>{errors.bot_nickname && 'Поле обязательно'}</span>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Row>
                  
                  <Row ref={ref} className="form-row py-4">
                    <Col>
                      <FormGroup>
                        <Button color="success" className="me-3">Добавить</Button>
                        <Link to={`${process.env.PUBLIC_URL}/project/project-list/`}>
                          <Button color="danger">{"Отменить"}</Button>
                        </Link>
                      </FormGroup>
                    </Col>
                  </Row>

                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Newproject;