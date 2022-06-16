import React, { useState, useEffect } from 'react';
import man from '../assets/images/dashboard/profile.jpg';
import { Container, Row, Col, Form, Input, Label, Button, TabContent, TabPane } from 'reactstrap'
import { Jwt_token } from '../data/config'
import { handleResponse } from '../services/fack.backend'
import { useAuth0 } from '@auth0/auth0-react'
import { AUTH0, Phone } from '../constant';
import { classes } from '../data/layouts';

const Logins = () => {

  const { loginWithRedirect } = useAuth0()
  const [phone, setPhone] = useState("+7 999 123-45-67");
  const [selected] = useState("jwt");
  const defaultLayoutObj = classes.find(item => Object.values(item).pop(1) === 'compact-wrapper');
  const layout = localStorage.getItem('layout') || Object.keys(defaultLayoutObj).pop();

  const [value, setValue] = useState(
    localStorage.getItem('profileURL' || man)
  );
  const [name, setName] = useState(
    localStorage.getItem('Name')
  );

  useEffect(() => {

    localStorage.setItem('profileURL', value);
    localStorage.setItem('Name', name);
  }, [value, name]);



  const loginWithJwt = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: ({ phone })
    };

    return fetch('/users/authenticate', requestOptions)
      .then(handleResponse)
      .then(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        setValue(man);
        setName('Иван Иванов');
        localStorage.setItem('token', Jwt_token);
        window.location.href = `${process.env.PUBLIC_URL}/dashboard/default/${layout}`;
        return user;
      });
  };

  return (
    <Container fluid={true} className="p-0">
      <Row>
        <Col xs="12">
          <div className="login-card">
            <div>
              <div>
                <a className="logo" href="index.html">
                  <img className="img-fluid for-light" src={require("../assets/images/logo/login.png")} alt="" />
                  <img className="img-fluid for-dark" src={require("../assets/images/logo/logo_dark.png")} alt="" />
                </a>
              </div>
              <div className="login-main login-tab">
                <TabContent activeTab={selected} className="content-login">
                  <TabPane className="fade show" tabId={selected === "firebase" ? "firebase" : "jwt"}>
                    <Form className="theme-form d-flex flex-column align-items-center">
                      <h4 className="m-0">{selected === "firebase" ? "Sign In With Firebase" : "Авторизация"}</h4>
                      <p className="my-4 text-center">{"Введите номер телефона, используемый в Telegram."}</p>
                      <div className="mb-3 input-box">
                        <Label className="col-form-label">{Phone}</Label>
                        <Input className="form-control" type="text" required="" placeholder="Ваш номер" onChange={e => setPhone(e.target.value)} defaultValue={phone} />
                      </div>
                      <div className="login-btn mb-0 d-flex flex-column align-items-center">
                        <div className="checkbox ms-3 mb-4 mt-n4">
                          <Input id="checkbox1" type="checkbox" />
                          <Label className="text-muted mw-60" for="checkbox1">Я согласен с условиями <a href='#' target='_blank'>Пользовательского соглашения</a></Label>
                        </div>
                        
                        <Button className="vanderu-btn" onClick={() => loginWithJwt(phone)}>{"Подтвердить"}</Button>
                        
                      </div>
                      <a href="#" className="mt-4">Продолжить в Telegram</a>
                    </Form>
                  </TabPane>
                  <TabPane className="fade show" tabId="auth0">
                    <div className="auth-content">
                      <img src={require("../assets/images/auth-img.svg")} alt="" />
                      <h4>{"Welcome to login with Auth0"}</h4>
                      <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"}</p>
                      <Button color="info" onClick={loginWithRedirect}>{AUTH0}</Button>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </Col>
      </Row> 
    </Container>
  );
}

// export default withRouter(Logins);
export default Logins;