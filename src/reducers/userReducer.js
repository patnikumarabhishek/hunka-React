import { userConstants } from "../constants/userConstants"

const defaulState = {
    status: 'UNINIT',
    success: false,
    token: '',
    message: '',
    email: ''
}


export default (state = defaulState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                status: 'PENDING',
                email: action.req.email
            }
        case userConstants.LOGIN_SUCCESS:
        return {
            ...state,
            status: 'SUCCESS',
            token: action.res.token,
            success: action.res.success
        }
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                status: 'FAILURE',
                message: action.error.message,
                success: action.error.success
            }
        case userConstants.REGISTER_REQUEST:
            return {
                ...state,
                status: 'UNINIT',
                email: action.req.email
            }
        case userConstants.REGISTER_SUCCESS:
        return {
            ...state,
            status: 'SUCCESS',
            token: action.res.token,
            success: action.res.success
        }
        case userConstants.REGISTER_FAILURE:
        return {
            ...state,
            status: 'FAILURE',
            message: action.error.message,
            errors: action.error.errors
        }
        default:
            return state
    }
}