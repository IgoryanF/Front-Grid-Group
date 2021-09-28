import React from 'react';
import {compose} from "redux";
import ProjectList from "./ProjectList";
import {getProjects} from "../../../redux/actionCreators/projectsActions";
import {connect} from "react-redux";

const ProjectListContainer = ({ getProjects }) => {
    return (
        <ProjectList/>
    );
};

const mapStateToProps = (state) => ({
})

export default compose(connect(null, { getProjects }))(ProjectListContainer);