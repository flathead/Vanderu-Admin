import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, Button, Nav, NavLink, NavItem, TabContent, Table, FormGroup} from 'reactstrap'
import DataTable from 'react-data-table-component';
import { CheckCircle, Circle, Delete, Edit, Settings, X } from 'react-feather';
import { Link } from 'react-router-dom';
import Switch from "react-switch";

const pay_columns = [
    {
        name: 'Покупатель',
        selector: row => row.buyer,
        sortable: true,
    },
    {
        name: 'Скриншот',
        selector: row => row.screenshot,
        sortable: false,
    },
    {
        name: 'Реквизиты',
        selector: row => row.req,
        sortable: false,
    },
    {
        name: 'Сумма',
        selector: row => row.sum,
        sortable: true,
    },
    {
        name: 'Комментарий',
        selector: row => row.comment,
        sortable: true,
    },
];

const pay_data = [
    {
        id: 1,
        buyer: 'Yvette Nikolaus',
        screen: '<img src="http://placeimg.com/640/480" alt="" />',
        req: '6759-8996-9010-2692-39',
        sum: '93.72 ₨',
        comment: 'multi-byte Account'
    },
    {
        id: 2,
        buyer: 'Marianne Weissnat',
        screen: 'http://placeimg.com/640/480/technics',
        req: '3KKQsE47wc7iPa23Ve9A2DAKpFtJ',
        sum: '569.35 ¥',
        comment: 'Fresh zero override'
    },
    {
        id: 3,
        buyer: 'Garrett Kautzer',
        screen: 'http://placeimg.com/640/480/people',
        req: '6380-1197-4957-9145',
        sum: '93.72 ₱',
        comment: 'Fresh Rubber'
    },
]

const res1_columns = [
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
        selector: row => row.del,
        sortable: false,
    }
];

const res1_data = [
    {
        id: 1,
        name: 'Микро сигналы',
        type: 'Канал',
        del: <Button title="Удалить" color="transparent"><X /></Button>
    },
    {
        id: 2,
        name: 'Канал немилинг сигналы',
        type: 'Канал',
        del: <Button title="Удалить" color="transparent"><X /></Button>
    }
]

const promo_columns = [
    {
        name: 'Название',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Код',
        selector: row => row.code,
        sortable: false,
    },
    {
        name: 'Размер скидки',
        selector: row => row.per,
        sortable: false,
    },
    {
        name: 'Дата окончания',
        selector: row => row.date,
        sortable: true,
    },
    {
        name: '',
        selector: row => row.del,
        sortable: false,
    }
];

const promo_data = [
    {
        id: 1,
        name: 'Promo ytube',
        code: 'Promo22',
        per: '30 p.',
        date: '22.08.22/00:00 UTC',
        del: <Button title="Удалить" color="transparent"><X /></Button>
    },
    {
        id: 2,
        name: 'Проект сигналы',
        code: 'Promo28',
        per: '60 p.',
        date: '28.08.22/00:00 UTC',
        del: <Button title="Удалить" color="transparent"><X /></Button>
    }
]

const utm_columns = [
    {
        name: 'Источник',
        selector: row => row.source,
        sortable: true,
    },
    {
        name: 'Тип',
        selector: row => row.type,
        sortable: true,
    },
    {
        name: 'Рекламная компания',
        selector: row => row.ads,
        sortable: true,
    },
    {
        name: 'Ссылка',
        selector: row => row.link,
        sortable: false,
    },
    {
        name: '',
        selector: row => row.del,
        sortable: false,
    }
];

const utm_data = [
    {
        id: 1,
        source: 'Hills Tools',
        type: 'New',
        ads: 'Representative',
        link: 'http://generous-treat.name',
        del: <Button title="Удалить" color="transparent"><X /></Button>
    },
    {
        id: 2,
        source: 'Money Computer optical',
        type: 'benchmark',
        ads: 'system',
        link: 'http://frail-abrogation.org',
        del: <Button title="Удалить" color="transparent"><X /></Button>
    }
]

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

const tar1_columns = [
    {
        name: 'ID',
        selector: row => row.ids,
        sortable: true,
    },
    {
        name: 'Дней',
        selector: row => row.days,
        sortable: true,
    },
    {
        name: 'Цена',
        selector: row => row.price,
        sortable: true,
    },
    {
        name: 'Со скидкой',
        selector: row => row.sale,
        sortable: true,
    },
    {
        name: 'Заголовок',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Активный',
        selector: row => row.active,
        sortable: true,
    },
    {
        name: '',
        selector: row => row.del,
        sortable: false,
    }
];

const tar1_data = [
    {
        id: 1,
        ids: 'Y_q9CdJ0YnJGSjP',
        days: '23',
        price: '930.70',
        sale: '526.57',
        title: 'Japan',
        active: 'Да',
        del: <Button className="p-0" color="transparent" title="Удалить"><X /></Button>
    },
    {
        id: 2,
        ids: 'ogsS4ASUl6BM_vq',
        days: '223',
        price: '389.56',
        sale: '201.36',
        title: 'Handcrafted',
        active: 'Да',
        del: <Button className="p-0" color="transparent" title="Удалить"><X /></Button>
    }
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

const his_columns = [
    {
        name: 'ID',
        selector: row => row.ids,
        sortable: true,
    },
    {
        name: 'Пользователь',
        selector: row => row.user,
        sortable: true,
    },
    {
        name: 'Сумма',
        selector: row => row.sum,
        sortable: true,
    },
    {
        name: 'Стоимость',
        selector: row => row.cost,
        sortable: false,
    },
    {
        name: 'Платёжная система',
        selector: row => row.pay,
        sortable: false,
    },
    {
        name: 'Реферал',
        selector: row => row.ref,
        sortable: false,
    },
    {
        name: 'Промокод',
        selector: row => row.promo,
        sortable: false,
    },
    {
        name: 'Дата покупки',
        selector: row => row.date,
        sortable: false,
    }
];

const his_data = [
    {
        id: 1,
        ids: 'kcS7WTGX3ZZtWE3',
        user: '@Alan',
        sum: '309.86',
        cost: '2',
        pay: 'ЮMoney',
        ref: '@Bobbie',
        promo: 'disastrous-recorder',
        date: 'Thu May 25 2023 21:06:23 GMT+0300 (Москва, стандартное время)'
    },
    {
        id: 2,
        ids: 'X4XXDhVgGm6nWgu',
        user: '@Meggie',
        sum: '754.96',
        cost: '2',
        pay: 'Криптовалюта',
        ref: '@Floyd',
        promo: 'Madeline_Braun',
        date: 'Sat Jun 26 2021 21:15:01 GMT+0300 (Москва, стандартное время)'
    },
    {
        id: 3,
        ids: 'DiEQwbsu_Mbf9jk',
        user: '@Elmo',
        sum: '740.71',
        cost: '2',
        pay: 'ЮMoney',
        ref: '@Anjali',
        promo: 'Grayce.Renner8',
        date: 'Sat Jun 18 2022 15:45:01 GMT+0300 (Москва, стандартное время)'
    },
]

function HistoryTable() {
    return (
        <DataTable
            columns={his_columns}
            data={his_data}
        />
    );
};

function Tariff1Table() {
    return (
        <DataTable
            columns={tar1_columns}
            data={tar1_data}
        />
    );
};

function UTMTable() {
    return (
        <DataTable
            columns={utm_columns}
            data={utm_data}
        />
    );
};

function PromoTable() {
    return (
        <DataTable
            columns={promo_columns}
            data={promo_data}
        />
    );
};

function PayTable() {
    return (
        <DataTable
            columns={pay_columns}
            data={pay_data}
        />
    );
};

function Res1Table() {
    return (
        <DataTable
            columns={res1_columns}
            data={res1_data}
        />
    );
};

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

    const [checked0, setChecked0] = useState(false);
    const handleChange0 = nextChecked => {
        setChecked0(nextChecked);
    };

    const [checked1, setChecked1] = useState(false);
    const handleChange1 = nextChecked => {
        setChecked1(nextChecked);
    };

    const transparent = {
        background: 'transparent',
        boxShadow: 'none',
    }

    return (
        <Fragment>
        <Row>
            <Breadcrumb parent="Мои проекты" title="Название проекта" />
        </Row>

        
            <Container fluid={true} className="project-inside-container">

                <Row>
                    <Card>
                        <CardBody className="p-2">
                            <Col xs="12">
                                <div className="switchers">
                                    <Col sm="2">
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
                                    </Col>

									<Col xs="my-0" sm="7 text-center" className="text-center my-4">
                                        <Button color="primary">Сменить токен</Button>
                                        
                                    </Col>

                                    <Col sm="3" className="d-flex text-end flex-column">
										<Button className="mb-1" color="primary">Передать права</Button>
										<Button color="danger">Удалить проект</Button>
									</Col>
                                </div>
                            </Col>
                        </CardBody>
                    </Card>
                </Row>

                <Row>
                    <Card style={transparent}>
                        <CardBody className="p-2">
                            <Col xs="12">
                                <Row>
                                    <Col sm="9">
                                        <Button className="me-3 mb-3" color="primary">Переименовать проект</Button>
                                        <Button className="me-3 mb-3" color="primary">Сообщения и уведомления</Button>
                                        <Button className="me-3 mb-3" color="primary">Добавить подписчика</Button>
                                    </Col>
									<Col sm="3" className="d-flex justify-content-sm-end">
										<a href="/#" title="Подсказка">@web_wanderu_bot</a>
									</Col>
                                </Row>
                            </Col>
                        </CardBody>
                    </Card>
                </Row>

                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody>
                                <Nav tabs className="border-tab">
                                    <NavItem><NavLink className={activeTab === "1" ? "active" : ''} onClick={() => setActiveTab("1")}>{"Основные"}</NavLink></NavItem>
                                    <NavItem><NavLink className={activeTab === "2" ? "active" : ''} onClick={() => setActiveTab("2")}>{"Тарифы"}</NavLink></NavItem>
                                    <NavItem><NavLink className={activeTab === "3" ? "active" : ''} onClick={() => setActiveTab("3")}>{"Ресурсы"}</NavLink></NavItem>
                                    <NavItem><NavLink className={activeTab === "4" ? "active" : ''} onClick={() => setActiveTab("4")}>{"Промокоды"}</NavLink></NavItem>
                                    <NavItem><NavLink className={activeTab === "5" ? "active" : ''} onClick={() => setActiveTab("5")}>{"UTM-метки"}</NavLink></NavItem>
                                    <NavItem><NavLink className={activeTab === "7" ? "active" : ''} onClick={() => setActiveTab("7")}>{"Рассылка"}</NavLink></NavItem>
                                    <NavItem><NavLink className={activeTab === "8" ? "active" : ''} onClick={() => setActiveTab("8")}>{"Платежи"}</NavLink></NavItem>
                                    <NavItem><NavLink className={activeTab === "9" ? "active" : ''} onClick={() => setActiveTab("9")}>{"История продаж"}</NavLink></NavItem>
                                </Nav>

                                <TabContent activeTab={activeTab} className={activeTab === "1" ? "active" : ''}>
                                    <Row className="my-4">
                                        <Col sm="12">
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
                                    </Row>
									<Row>
										<Col sm="12 mt-4">
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

                                <TabContent activeTab={activeTab} className={activeTab === "2" ? "active" : ''}>
                                    <Row className="my-4">
                                        <Col>
                                            <h5>Тарифы</h5>
        
                                            <Tariff1Table
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

                                <TabContent activeTab={activeTab} className={activeTab === "3" ? "active" : ''}>
                                    <Row className="my-4">
                                        <Col>
                                            <h5>Ресурсы</h5>
        
                                            <Res1Table
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

                                <TabContent activeTab={activeTab} className={activeTab === "4" ? "active" : ''}>
                                    <Row className="my-4">
                                        <Col xs="12">
                                            <h5>Промокоды</h5>
        
                                            <PromoTable
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
                                        <Col xs="12" className="mt-4">
                                            <h5>Создание промокодов</h5>

                                            <FormGroup>
                                                <Button color="primary" className="me-3">Создать</Button>
                                                <Button color="primary">Продлить</Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </TabContent>

                                <TabContent activeTab={activeTab} className={activeTab === "5" ? "active" : ''}>
                                    <Row className="my-4">
                                        <Col xs="12">
                                            <h5>UTM-метки</h5>
        
                                            <UTMTable
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
                                        <Col xs="12" className="mt-4">
                                            <h5>Создание UTM-метки</h5>

                                            <FormGroup className="d-flex flex-wrap gap-3">
                                                <Button color="primary" className="me-3">Создать</Button>
                                                <Button color="primary" className="me-3">Статистика</Button>
                                                <Button color="primary">Переименовать рекл. компанию</Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </TabContent>

                                <TabContent activeTab={activeTab} className={activeTab === "8" ? "active" : ''}>
                                    <Row className="my-4">
                                        <Col>
                                            <h5>Подтверждение платежей</h5>
        
                                            <PayTable
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

                                <TabContent activeTab={activeTab} className={activeTab === "9" ? "active" : ''}>
                                    <Row className="my-4">
                                        <Col>
                                            <h5>История продаж</h5>
        
                                            <HistoryTable
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
                                        <Row className="my-4">
                                            <Col sm="12">
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

                                                <div className="text-start">
                                                    <Link to={`${process.env.PUBLIC_URL}/tariff/`}><Button className="mt-3 me-3" color="primary">Добавить</Button></Link>
                                                    <Button className="mt-3" color="primary">Редактировать</Button>
                                                </div>
                                            </Col>
                                        </Row>
										<Row>
											<Col sm="12 mt-4">
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
                                <button className={activeTab === "7" ? "active" : ''} onClick={() => setActiveTab("7")}>Рассылка</button>
                                <button className={activeTab === "8" ? "active" : ''} onClick={() => setActiveTab("8")}>Подтверждение платежей</button>
                                <button className={activeTab === "4" ? "active" : ''} onClick={() => setActiveTab("4")}>Создать промокод</button>
                                <button className={activeTab === "5" ? "active" : ''} onClick={() => setActiveTab("5")}>Создать UTM-метку</button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default InsideProject;