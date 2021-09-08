import MainPage from "../components/pages/Main/MainPage";

export const publicRoutes = [
    {path: "/main", render: () => <MainPage/> , exact: true, title: "Главная"},
    {path: "/design", render: () => <MainPage/>, exact: true, title: "3D-Дизайн"},
    {path: "/renovation", render: () => <MainPage/>, exact: true, title: "Ремонт"},
    {path: "/construction", render: () => <MainPage/>, exact: true, title: "Строительство"},
    {path: "/projects", render: () => <MainPage/>, exact: true, title: "Проекты"},
    {path: "/landscape-design", render: () => <MainPage/>, exact: true, title: "Ландшафтный дизайн"},
]