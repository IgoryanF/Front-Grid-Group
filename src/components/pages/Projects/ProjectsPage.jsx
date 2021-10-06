import React from 'react';
import ProjectList from "../Main/ProjectList";
import {Container, Section} from "../../UI/styledComponents/Styled";

const ProjectsPage = () => {
    return (
        <>
            <Section>
                <Container styles={{ maxWidth: "90%"}}>
                    <ProjectList limit={12} styles={{ maxWidth: "90%"}}/>
                </Container>
            </Section>
        </>
    );
};

export default ProjectsPage;