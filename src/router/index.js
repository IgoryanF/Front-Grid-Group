import MainPage from "../components/pages/Main/MainPage";
import Project from "../components/pages/Project/Project";

export const publicRoutes = [
    {path: "/", render: () => <MainPage/> , exact: true, title: "Главная"},
    {path: "/design", render: () => <MainPage/>, exact: true, title: "3D-Дизайн"},
    {path: "/renovation", render: () => <MainPage/>, exact: true, title: "Ремонт"},
    {path: "/construction", render: () => <MainPage/>, exact: true, title: "Строительство"},
    {path: "/projects", render: () => <MainPage/>, exact: true, title: "Проекты"},
    {path: "/projects/:id", render: () => <Project/>, exact: true, title: "Проект"},
    {path: "/landscape-design", render: () => <MainPage/>, exact: true, title: "Ландшафтный дизайн"},
]