import {CALL_ME_CHANGE_NAME, CALL_ME_CHANGE_PHONE} from "../CONSTS";

const initialState = {
    name: '',
    telephoneNumber: '',
    isFetching: false,
    error: ''
}

export const callMeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CALL_ME_CHANGE_NAME: {
            return { ...state, name: action.payload }
        }
        case CALL_ME_CHANGE_PHONE: {
            return { ...state, telephoneNumber: action.payload }
        }
        default: return state
    }
}
