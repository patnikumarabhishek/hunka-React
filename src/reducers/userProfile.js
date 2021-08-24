import { userConstants } from "../constants/userConstants";

const defaultState = {
    status: 'UNINIT',
    userProfileData: {},
    success: false
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case userConstants.GET_PROFILE_DATA_REQUEST: 
            return {
                ...state,
                status: 'PENDING'
            }
        case userConstants.GET_PROFILE_DATA_SUCCESS:
            return {
                ...state,
                status: 'SUCCESS',
                data: action.res.user,
                success: true
            }
        case userConstants.GET_PROFILE_DATA_FAILURE:
            return {
                ...state,
                success: false,
                message: action.error.message
            }

        default:
            return state
    }
}