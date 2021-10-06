import React from 'react';
import MainTitle from "./MainTitle";
import CostAndServices from "./CostAndServices";
import BasicServices from "./BasicServices";
import DesignProjects from "./DesignProjects";
import Steps from "./Steps";
import GetCatalogToEmail from "./GetCatalogToEmail";

const MainPage = () => {
    return (
        <>
            <MainTitle/>
            <CostAndServices/>
            <BasicServices/>
            <DesignProjects/>
            <Steps/>
            <GetCatalogToEmail/>
        </>
    );
};

export default MainPage;