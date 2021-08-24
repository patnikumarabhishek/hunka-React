import { clientConstants } from "../constants/clientConstants"

const defaultState = {
    status: 'UNINIT',
    succes: false,
    clients: [],
    message: ''
}

export default (state = defaultState, action) => {
    console.log('action', action)
    switch(action.type) {
        case clientConstants.GET_CLIENTS_REQUEST:
            return {
                ...state,
                status: 'PENDING'
            }

        case clientConstants.GET_CLIENTS_SUCCESS:
            return {
                ...state,
                status: 'SUCCESS',
                clients: action.res.clients,
                success: true,
                message: action.res.message
            }

        case clientConstants.GET_CLIENTS_FAILURE:
            return{
                ...state,
                status: 'FAILURE',
                success: false,
                message: action.error.message
            }

        default:
            return state
    }
}