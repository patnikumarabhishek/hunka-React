import { permissionConstants } from '../constants/permissionConstants';

const defaultState = {
    status: 'UNINIT',
    success: false,
    message: '',
    permissions: [],
    count: 0
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case permissionConstants.GET_PERMISSIONS_REQUEST:
            return {
                ...state,
                status: 'PENDING'
            }
        case permissionConstants.GET_PERMISSIONS_SUCCESS:
            return {
                ...state,
                status: 'SUCCESS',
                message: action.res.message,
                permissions: action.res.permissions.data,
                count: action.res.permissions.total,
                success: true
            }
        
        case permissionConstants.GET_PERMISSIONS_FAILURE:
            return {
                ...state,
                status: 'FAILURE',
                message: action.error.message,
                success: action.error.success
            }

        default:
            return state
    }
}