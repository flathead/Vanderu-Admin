// Dashbaord
import Default from '../components/dashboard/default'

// Users
import UserProfile from "../components/users/userProfile"
import UserEdit from "../components/users/userEdit"
import UserCards from "../components/users/userCards"

/*
 * Pages
 */

// FAQ 
import FaqComponent from "../components/faq"

// Поддержка
import Support from "../components/support"

// Партнёрство
import Partnership from '../components/partnership'

// Проект / создание проекта / внутренняя страница проекта 
import ProjectList from '../components/project/project'
import NewProject from '../components/project/new-project'
import InsideProject from '../components/project/inside-project'

// Тарифы (оплата сервиса)
import Tariffs from '../components/tariffs/tariffs'

// Рассылка
import Spam from '../components/spam'

// Статистика
import Statistic from '../components/statistic'

// Платёжные системы
import Pay from '../components/pay'

export const routes = [

	// Страницы
	{ path: `${process.env.PUBLIC_URL}/dashboard/`, Component: <Default /> },
	{ path: `${process.env.PUBLIC_URL}/pay/`, Component: <Pay /> },
	{ path: `${process.env.PUBLIC_URL}/project/inside/`, Component: <InsideProject /> },
	{ path: `${process.env.PUBLIC_URL}/statistic/`, Component: <Statistic /> },
	{ path: `${process.env.PUBLIC_URL}/tariff/`, Component: <Tariffs /> },
	{ path: `${process.env.PUBLIC_URL}/support/`, Component: <Support /> },
	{ path: `${process.env.PUBLIC_URL}/partnership/`, Component: <Partnership /> },
	{ path: `${process.env.PUBLIC_URL}/mailing/`, Component: <Spam /> },
	{ path: `${process.env.PUBLIC_URL}/project/project-list/`, Component: <ProjectList /> },
	{ path: `${process.env.PUBLIC_URL}/project/new-project/`, Component: <NewProject /> },
	{ path: `${process.env.PUBLIC_URL}/faq/`, Component: <FaqComponent /> },

	// Пользователь
	{ path: `${process.env.PUBLIC_URL}/app/users/userProfile/`, Component: <UserProfile /> },
	{ path: `${process.env.PUBLIC_URL}/app/users/userEdit/`, Component: <UserEdit /> },
	{ path: `${process.env.PUBLIC_URL}/app/users/userCards/`, Component: <UserCards /> },
]