import React from 'react';
import {Container,Row,Col,Form,FormGroup,Label,Input,Button} from 'reactstrap' 
import { useState } from 'react';
const Forgetpwd = (props) => {

    const [togglePassword,setTogglePassword] = useState(false)
    const [password,setPassword] = useState("")

    const handleChange = (e) => {
      setPassword(e.target.value)
    }
    const HideShowPassword  = (tPassword) => {
      setTogglePassword(!tPassword)
    }
    
    return (
      <Container fluid={true}>
      <Row>
          <Col xs="12">     
            <div className="login-card">
              <div>
                <div><a className="logo" href="#javascript"><img className="img-fluid for-light" src={require("../../assets/images/logo/login.png")} alt="looginpage"/><img className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="looginpage"/></a></div>
                <div className="login-main"> 
                  <Form className="theme-form">
                    <h4>Сбросить пароль</h4>
                    <FormGroup>
                      <Label className="col-form-label">Введите номер телефона</Label>
                      <Row>
                        <Col md="3">
                          <Input className="form-control mb-1" type="text" defaultValue="+ 91"/>
                        </Col>
                        <Col md="9">
                          <Input className="form-control mb-1" type="tel" defaultValue="000-000-0000"/>
                        </Col>
                        <Col xs="12">
                          <Button color="primary" className="m-t-10" type="submit">Отправить</Button>
                        </Col>
                      </Row>
                    </FormGroup>
                    <div className="text-center mt-4 mb-4"><span className="reset-password-link">{"Не получили код подтверждения?"}  <a className="btn-link font-danger" href="#javascript">Отправить заново</a></span></div>
                    <FormGroup>
                      <Label className="col-form-label pt-0">Введите код</Label>
                      <Row>
                        <Col>
                          <Input className="form-control text-center opt-text" type="text" defaultValue="00" maxLength="2"/>
                        </Col>
                        <Col>
                          <Input className="form-control text-center opt-text" type="text" defaultValue="00" maxLength="2"/>
                        </Col>
                        <Col>
                          <Input className="form-control text-center opt-text" type="text" defaultValue="00" maxLength="2"/>
                        </Col>
                      </Row>
                    </FormGroup>
                    <h6 className="mt-4">{"Create Your Password"}</h6>
                    <FormGroup>
                      <Label className="col-form-label">Новый пароль</Label>
                      <Input className="form-control" type={togglePassword ? "text" : "password" } name="login[password]" value={password} onChange={(e) => handleChange(e)} required="" placeholder="*********"/>
                      <div className="show-hide" onClick={() => HideShowPassword(togglePassword)}><span className={togglePassword ? "" : "show"}></span></div>
                    </FormGroup>
                    <FormGroup>
                      <Label className="col-form-label">Повторите пароль</Label>
                      <Input className="form-control" type="password" name="login[password]" required="" placeholder="*********"/>
                    </FormGroup>
                    <FormGroup className="mb-0">
                      <div className="checkbox ms-3">
                        <Input id="checkbox1" type="checkbox"/>
                        <Label className="text-muted" for="checkbox1">Запомнить пароль</Label>
                      </div>
                      <Button color="primary" type="submit">Отправить</Button>
                    </FormGroup>
                    <p className="mt-4 mb-0">{"Уже есть пароль?"}<a className="ms-2" href="#javascript">Войти</a></p>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default Forgetpwd;