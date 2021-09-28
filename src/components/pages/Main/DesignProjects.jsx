import React from 'react';
import styled from "styled-components";
import {Container, Section, SectionTitle} from "../../UI/steledComponents/Styled";
import ProjectList from "./ProjectList";

const BackBlock = styled.div`
  position: absolute;
  z-index: 0;
  background: #F5F5F5;
  top: 50px;
  right: 0;
  bottom: 0;
  width: 61.14%;
`;

const DesignProjects = () => {

    return (
        <Section>
            <SectionTitle top="153.5%" style={{margin: "50px 0 45px"}}>
                НАШИ ПРОЕКТЫ
            </SectionTitle>
            <BackBlock />
            <Container styles={{ zIndex: 10, maxWidth: "90%"}}>
                <ProjectList/>
            </Container>
        </Section>
    );
};

export default DesignProjects;