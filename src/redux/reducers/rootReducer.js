import {callMeReducer} from "./callMeReducer";
import projectsReducer from "./projectsReducer";


export const rootReducer = {
    callMeReducer: callMeReducer,
    projects: projectsReducer
}