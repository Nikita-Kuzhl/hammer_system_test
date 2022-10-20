import {
    DashboardOutlined,
    FileTextOutlined,
    GiftOutlined,
    MailOutlined,
    MobileOutlined,
    PictureOutlined,
    SettingOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UsergroupAddOutlined,
    UserOutlined
} from '@ant-design/icons';
import {APP_PREFIX_PATH} from 'configs/AppConfig'

const coreNavTree = [{
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'Основные',
    icon: '',
    breadcrumb: false,
    submenu: [
        {
            key: 'main-dashboard',
            path: `${APP_PREFIX_PATH}/main/dashboard`,
            title: 'Дашборд',
            icon: DashboardOutlined,
            breadcrumb: true,
            submenu: []
        },
        {
            key: 'main-catalog',
            path: `${APP_PREFIX_PATH}/main/catalog`,
            title: 'Каталог',
            icon: ShoppingCartOutlined,
            breadcrumb: false,
            submenu: [
                {
                    key: 'catalog-item',
                    path: `${APP_PREFIX_PATH}/main/catalog`,
                    title: 'Каталог',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                },
                {
                    key: 'catalog-category',
                    path: `${APP_PREFIX_PATH}/main/category`,
                    title: 'Категории',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                },
                {
                    key: 'catalog-collection',
                    path: `${APP_PREFIX_PATH}/main/collection`,
                    title: 'Категории',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                },
                {
                    key: 'catalog-combo',
                    path: `${APP_PREFIX_PATH}/main/combo`,
                    title: 'Комбо',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                },
            ]
        },
        {
            key: 'main-order',
            path: `${APP_PREFIX_PATH}/main/order`,
            title: 'Заказы',
            icon: ShoppingOutlined,
            breadcrumb: true,
            submenu: []
        },
        {
            key: 'main-client',
            path: `${APP_PREFIX_PATH}/main/client`,
            title: 'Клиенты',
            icon: UserOutlined,
            breadcrumb: false,
            submenu: [
                {
                    key: 'client-list',
                    path: `${APP_PREFIX_PATH}/main/client/list`,
                    title: 'Список клиентов',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'client-group',
                    path: `${APP_PREFIX_PATH}/main/client/group`,
                    title: 'Группы клиентов',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                },
            ]
        },
        {
            key: 'main-banner',
            path: `${APP_PREFIX_PATH}/main/banner`,
            title: 'Баннеры',
            icon: PictureOutlined,
            breadcrumb: true,
            submenu: []
        },
        {
            key: 'main-code',
            path: `${APP_PREFIX_PATH}/main/code`,
            title: 'Промокоды',
            icon: GiftOutlined,
            breadcrumb: true,
            submenu: []
        },
        {
            key: 'main-offline_dot',
            path: `${APP_PREFIX_PATH}/main/offline`,
            title: 'Оффлайн точки',
            icon: ShopOutlined,
            breadcrumb: false,
            submenu: [
                {
                    key: 'offline_dot-address',
                    path: `${APP_PREFIX_PATH}/main/offline/address`,
                    title: 'Адреса',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                },
                {
                    key: 'offline_dot-geo',
                    path: `${APP_PREFIX_PATH}/main/offline/geo`,
                    title: 'Геозоны',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                },
            ]
        },
        {
            key: 'main-employees',
            path: `${APP_PREFIX_PATH}/main/employees`,
            title: 'Сотрудники',
            icon: UsergroupAddOutlined,
            breadcrumb: true,
            submenu: []
        },
        {
            key: 'main-mailing',
            path: `${APP_PREFIX_PATH}/main/mailing`,
            title: 'Рассылки',
            icon: MailOutlined,
            breadcrumb: true,
            submenu: []
        },
    ]
}]

const systemNavTree = [
    {
        key: 'system',
        path: `${APP_PREFIX_PATH}/system`,
        title: 'СИСТЕМНЫЕ',
        icon: '',
        breadcrumb: false,
        submenu: [
            {
                key: 'system-settings',
                path: `${APP_PREFIX_PATH}/system/settings`,
                title: 'Рассылки',
                icon: SettingOutlined,
                breadcrumb: true,
                submenu: []
            },
            {
                key: 'system-mobile',
                path: `${APP_PREFIX_PATH}/system/mobile`,
                title: 'Мобильное приложение',
                icon: MobileOutlined,
                breadcrumb: true,
                submenu: []
            },
            {
                key: 'system-logs',
                path: `${APP_PREFIX_PATH}/system/logs`,
                title: 'Логи',
                icon: FileTextOutlined,
                breadcrumb: true,
                submenu: []
            },
        ]
    },
]

const navigationConfig = [
    ...coreNavTree,
    ...systemNavTree
]

export default navigationConfig;
