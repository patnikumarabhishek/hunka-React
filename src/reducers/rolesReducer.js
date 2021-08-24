import { roleConstants } from '../constants/roleConstants';

const defaultState = {
    status: 'UNINIT',
    success: false,
    roles: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case roleConstants.GET_ROLES_RESQUEST:
            return {
                ...state,
                status: 'PENDING'
            }

        case roleConstants.GET_ROLES_SUCCESS:
            return {
                ...state,
                status: 'SUCCESS',
                success: true,
                roles: action.res.roles
            }

        case roleConstants.GET_ROLES_FAILURE:
            return {
                ...state,
                status: 'FAILURE',
                success: false,
                message: action.error.message
            }

        default:
            return state
    }
}