import React from 'react';
import MainTitle from "./MainTitle";
import CostAndServices from "./CostAndServices";
import BasicServices from "./BasicServices";
import DesignProjects from "./DesignProjects";
import Steps from "./Steps";

const MainPage = () => {
    return (
        <>
            <MainTitle/>
            <CostAndServices/>
            <BasicServices/>
            <DesignProjects/>
            <Steps/>
        </>
    );
};

export default MainPage;