import axios from "axios";

export const emailFormApi = {
    sendMessage: (message, cancelToken) => {
       return axios.post('https://pacific-anchorage-53740.herokuapp.com/api/v1/email/send/',
           {...message}, {
           cancelToken
           })
    }
}