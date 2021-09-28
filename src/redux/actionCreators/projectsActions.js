import {CHANGE_FETCHING_STATUS, SET_PROJECTS} from "../CONSTS";

const setProjectsData = (projects) => ({ type: SET_PROJECTS, payload: projects });
const changeFetchingStatus = (status) => ({ type: CHANGE_FETCHING_STATUS, payload: status })

export const getProjects = () => (dispatch) => {
    dispatch(changeFetchingStatus(true));
    dispatch(setProjectsData([]));
    dispatch(changeFetchingStatus(false));
}