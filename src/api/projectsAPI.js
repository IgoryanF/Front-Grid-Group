import axios from "axios";

const instance = axios.create({
    baseURL: "https://pacific-anchorage-53740.herokuapp.com/api/v1/projects/"
})

export const projectsAPI = {
    getProjects: async (page = 1, limit, token) => {
        return await instance.get(`?page=${page}&count=${limit}`, {
            cancelToken: token
        });
    }
}