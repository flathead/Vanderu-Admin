// TODO: Переписать для динамического роутинга
import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, Button, Nav, NavLink, NavItem, TabContent, Table} from 'reactstrap'
import DataTable from 'react-data-table-component';
import { CheckCircle, Circle, Delete, Edit, Settings } from 'react-feather';
import { DefaultLayout } from '../../../layout/theme-customizer';
import { Link } from 'react-router-dom';
import Switch from "react-switch";

const columns = [
    {
        name: 'Название',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Цена',
        selector: row => row.price,
        sortable: false,
    },
    {
        name: 'Кол-во дней',
        selector: row => row.days,
        sortable: false,
    },
    {
        name: 'Ресурс',
        selector: row => row.res,
        sortable: true,
    },
    {
        name: '',
        selector: row => row.edit,
        sortable: false,
    },
    {
        name: '',
        selector: row => row.del,
        sortable: false,
    }
];

const data = [
    {
        id: 1,
        name: 'National programming Alaska',
        price: '897.08',
        days: '52',
        res: 'empowering Australia',
        edit: <Button className="p-0" color="transparent" title="Редактировать"><Edit color="blue" /></Button>,
        del: <Button className="p-0" color="transparent" title="Удалить"><Delete color="red" /></Button>
    },
    {
        id: 2,
        name: 'Bedfordshire',
        price: '117.04',
        days: '33',
        res: 'Granite viral Director',
        edit: <Button className="p-0" color="transparent" title="Редактировать"><Edit color="blue" /></Button>,
        del: <Button className="p-0" color="transparent" title="Удалить"><Delete color="red" /></Button>
    },
    {
        id: 3,
        name: 'conglomeration tangible',
        price: '862.18',
        days: '45',
        res: '1080p Lead',
        edit: <Button className="p-0" color="transparent" title="Редактировать"><Edit color="blue" /></Button>,
        del: <Button className="p-0" color="transparent" title="Удалить"><Delete color="red" /></Button>
    },
]

const res_columns = [
    {
        name: 'Название',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Тип',
        selector: row => row.type,
        sortable: false,
    },
    {
        name: '',
        selector: row => row.edit,
        sortable: false,
    },
    {
        name: '',
        selector: row => row.del,
        sortable: false,
    }
];

const res_data = [
    {
        id: 1,
        name: 'Cambridgeshire Mobility',
        type: 'Канал',
        edit: <Button className="p-0" color="transparent" title="Редактировать"><Edit color="blue" /></Button>,
        del: <Button className="p-0" color="transparent" title="Удалить"><Delete color="red" /></Button>
    },
    {
        id: 2,
        name: 'Taka FTP Accountability',
        type: 'Канал',
        edit: <Button className="p-0" color="transparent" title="Редактировать"><Edit color="blue" /></Button>,
        del: <Button className="p-0" color="transparent" title="Удалить"><Delete color="red" /></Button>
    },
    {
        id: 3,
        name: 'superstructure Inverse implement',
        type: 'Группа',
        edit: <Button className="p-0" color="transparent" title="Редактировать"><Edit color="blue" /></Button>,
        del: <Button className="p-0" color="transparent" title="Удалить"><Delete color="red" /></Button>
    },
]

function TariffTable() {
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};

function ResourseTable() {
    return (
        <DataTable
            columns={res_columns}
            data={res_data}
        />
    );
};

const InsideProject = () => {

    const [activeTab, setActiveTab] = useState("1")

    const id = window.location.pathname.split('/').pop()
    const defaultLayout = Object.keys(DefaultLayout);
    const layout = id ? id : defaultLayout

    const [checked0, setChecked0] = useState(false);
    const handleChange0 = nextChecked => {
        setChecked0(nextChecked);
    };

    const [checked1, setChecked1] = useState(false);
    const handleChange1 = nextChecked => {
        setChecked1(nextChecked);
    };

    return (
        <Fragment>
        <Row>
            <Breadcrumb parent="Мои проекты" title="Название проекта" />
        </Row>

        
            <Container fluid={true} className="project-inside-container">

                <div className="fixed-delete-btn">
                    <div className="btn-wrapper">
                        <Button className="p-0" color="transparent"><Delete color="white" title="Удалить" /></Button>
                    </div>
                    <p className="p-0">Удалить проект</p>
                </div>

                <div className="fixed-switchers">
                    <div className="switch-wrapper">
                        <Switch
                            checked={checked0}
                            onChange={handleChange0}
                            onColor="#86d3ff"
                            onHandleColor="#2693e6"
                            handleDiameter={30}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={10}
                            width={38}
                            className="react-switch"
                            id="sw-1"
                        />
                        <label htmlFor="sw-1">В архив</label>
                    </div>
                    <div className="switch-wrapper">
                        <Switch
                            checked={checked1}
                            onChange={handleChange1}
                            onColor="#86d3ff"
                            onHandleColor="#2693e6"
                            handleDiameter={30}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={10}
                            width={38}
                            className="react-switch"
                            id="sw-1"
                        />
                        <label htmlFor="sw-1">На паузу</label>
                    </div>
                    <Button color="primary">Передать права</Button>
                </div>

                <Row>
                    <Col xs="12">
                        <Row>
                            <Col sm="9">
                                <Button className="me-3 mb-3" color="primary">Переименовать проект</Button>
                                <Button className="me-3 mb-3" color="primary">Сообщения и уведомления</Button>
                                <Button className="me-3 mb-3" color="primary">Добавить подписчика</Button>
                            </Col>
                            <Col sm="3" className="text-end">
                                <Button className="me-1 mb-2" color="primary">Сменить токен</Button>
                                <a href="/#" className="me-1 mb-2" title="Подсказка">@web_wanderu_bot</a>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12">
                        <Card>
                            <CardBody>
                                <Nav tabs className="border-tab">
                                    <NavItem><NavLink className={activeTab === "1" ? "active" : ''} onClick={() => setActiveTab("1")}>{"Основные"}</NavLink></NavItem>
                                    <NavItem><NavLink className={activeTab === "2" ? "active" : ''} onClick={() => setActiveTab("2")}>{"Тарифы"}</NavLink></NavItem>
                                    <NavItem><NavLink className={activeTab === "3" ? "active" : ''} onClick={() => setActiveTab("3")}>{"Ресурсы"}</NavLink></NavItem>
                                    <NavItem><NavLink className={activeTab === "4" ? "active" : ''} onClick={() => setActiveTab("4")}>{"Промокоды"}</NavLink></NavItem>
                                    <NavItem><NavLink className={activeTab === "5" ? "active" : ''} onClick={() => setActiveTab("5")}>{"UTM-метки"}</NavLink></NavItem>
                                    <NavItem><NavLink className={activeTab === "6" ? "active" : ''} onClick={() => setActiveTab("6")}>{"Промокоды"}</NavLink></NavItem>
                                    <NavItem><NavLink className={activeTab === "7" ? "active" : ''} onClick={() => setActiveTab("7")}>{"Рассылка"}</NavLink></NavItem>
                                    <NavItem><NavLink className={activeTab === "8" ? "active" : ''} onClick={() => setActiveTab("8")}>{"Платежи"}</NavLink></NavItem>
                                    <NavItem><NavLink className={activeTab === "9" ? "active" : ''} onClick={() => setActiveTab("9")}>{"История продаж"}</NavLink></NavItem>
                                </Nav>

                                <TabContent activeTab={activeTab} className={activeTab === "1" ? "active" : ''}>
                                    <Row>
                                        <Col sm="6">
                                            <h5>Статистика проекта</h5>

                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <td>
                                                            Статистика проекта
                                                        </td>
                                                        <td>
                                                            Сумма
                                                        </td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Заработано за всё время</td>
                                                        <td>500 RUB</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Заработано за месяц</td>
                                                        <td>500 RUB</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Активных подписок</td>
                                                        <td>1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Не продлили подписку</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Лидов</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Уникальных пользователей</td>
                                                        <td>1</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                        <Col sm="6">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h5>Подключенные ресурсы</h5>
                                                <Button className="p-0" color="transparent"><Settings /></Button>
                                            </div>

                                            <ResourseTable
                                                direction="ltr"
                                                fixedHeaderScrollHeight="300px"
                                                highlightOnHover
                                                pagination
                                                responsive
                                                subHeader
                                                subHeaderAlign="right"
                                                subHeaderWrap
                                                />
                                        </Col>
                                    </Row>
                                </TabContent>
                            </CardBody>
                        </Card>

                        <TabContent activeTab={activeTab} className={activeTab === "1" ? "active" : ''}>
                            <Card>
                                <CardBody>
                                        <Row>
                                            <Col sm="6">
                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                    <h5>Подключенные тарифы</h5>
                                                    <Button className="p-0" color="transparent"><Settings /></Button>
                                                </div>
                                                
                                                <TariffTable
                                                direction="ltr"
                                                fixedHeaderScrollHeight="300px"
                                                highlightOnHover
                                                pagination
                                                responsive
                                                subHeader
                                                subHeaderAlign="right"
                                                subHeaderWrap
                                                />

                                                <div className="text-end">
                                                    <Link to={`${process.env.PUBLIC_URL}/app/tariffs/tariffs/${layout}`}><Button className="mt-3 me-3" color="primary">Добавить</Button></Link>
                                                    <Button className="mt-3" color="primary">Редактировать</Button>
                                                </div>
                                            </Col>
                                            <Col sm="6">
                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                    <h5>Подключенные платёжные системы</h5>
                                                    <Button className="p-0" color="transparent"><Settings /></Button>
                                                </div>

                                                <Row>
                                                    <Col sm="6" className="d-flex flex-column">
                                                        <div className="d-flex align-items-center mb-3">
                                                            <CheckCircle className="me-2" /><span>Оплаты криптовалютой</span>
                                                        </div>
                                                        <div className="d-flex align-items-center mb-3">
                                                            <Circle className="me-2" /><span>QIWI</span>
                                                        </div>
                                                    </Col>
                                                    <Col sm="6" className="d-flex flex-column">
                                                        <div className="d-flex align-items-center mb-3">
                                                            <CheckCircle className="me-2" /><span>ЮMoney</span>
                                                        </div>
                                                        
                                                        <div className="d-flex align-items-center mb-3">
                                                            <Circle className="me-2" /><span>Платежи по реквизитам</span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                </CardBody>
                            </Card>
                        </TabContent>
                    </Col>

                    <Col sm="12">
                        <Card>
                            <CardBody className="links">
                                <a href="/#">Рассылка</a>
                                <a href="/#">Подтверждение платежей</a>
                                <a href="/#">Создать промокод</a>
                                <a href="/#">Создать UTM-метку</a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default InsideProject;