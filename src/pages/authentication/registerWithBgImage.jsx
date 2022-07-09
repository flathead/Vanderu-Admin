import React,{useState} from 'react';
import {Container,Row,Col,Form,FormGroup,Input,Label,Button} from 'reactstrap'
import { GitHub, Twitter, Facebook } from 'react-feather';

const RegisterWithBgImage = (props) => {

    const [togglePassword,setTogglePassword] = useState(false)
    const [password,setPassword] = useState("")

    const handleChange = (e) => {
      setPassword(e.target.value)
    }
    const HideShowPassword  = (tPassword) => {
      setTogglePassword(!tPassword)
    }

    return (
      <Container fluid={true} className="p-0">
      <Row>
        <Col xl="5" style={{ backgroundImage: `url(${require("../../assets/images/login/3.jpg")})`,backgroundSize:"cover",backgroundPosition:"center",display:"block" }}>
          <img className="bg-img-cover bg-center" src={require("../../assets/images/login/3.jpg")} alt="looginpage"/>
        </Col>
        <Col xl="7" className="p-0"> 
          <div className="login-card">
            <div>
              <div><a className="logo" href="#javascript"><img className="img-fluid for-light" src={require("../../assets/images/logo/login.png")} alt="looginpage"/><img className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="looginpage"/></a></div>
              <div className="login-main"> 
                <Form className="theme-form">
                  <h4>{"Создание аккаунта"}</h4>
                  <p>{"Введите детали для создания аккаунта"}</p>
                  <FormGroup>
                    <Label className="col-form-label pt-0">Ваше имя</Label>
                    <Row>
                      <Col xs="6">
                        <Input className="form-control" type="text" required="" placeholder="First name"/>
                      </Col>
                      <Col xs="6">
                        <Input className="form-control" type="text" required="" placeholder="Last name"/>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">Email</Label>
                    <Input className="form-control" type="email" required="" placeholder="Test@gmail.com"/>
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">Пароль</Label>
                    <Input className="form-control" type={togglePassword ?  "text" : "password" } name="login[password]" value={password} onChange={(e) => handleChange(e)} required="" placeholder="*********"/>
                    <div className="show-hide" onClick={() => HideShowPassword(togglePassword)}><span className={togglePassword ? "" : "show"}></span></div>
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <div className="checkbox ms-3">
                      <Input id="checkbox1" type="checkbox"/>
                      <Label className="text-muted" for="checkbox1">{"Согласен с "}<a className="ms-2" href="#javascript">Политикой конфиденциальности</a></Label>
                    </div>
                    <Button color="primary" type="submit">Создать аккаунт</Button>
                  </FormGroup>
                  <h6 className="text-muted mt-4 or">{"Либо, создайте аккаунт с"}</h6>
                  <div className="social mt-4">
                    <div className="btn-showcase">
                      <Button color="light">
                        <Facebook className="txt-fb" />
                      </Button>
                      <Button color="light">
                        <i className="icon-social-google txt-googleplus"></i>
                      </Button>
                      <Button color="light">
                        <Twitter className="txt-twitter" />
                      </Button>
                      <Button color="light">
                        <GitHub />
                      </Button>
                    </div>
                  </div>
                  <p className="mt-4 mb-0">{"Уже есть аккаунт?"}<a className="ms-2" href="#javascript">Войти</a></p>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      </Container>
    );
}

export default RegisterWithBgImage;