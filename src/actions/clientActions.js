import { clientConstants } from '../constants/clientConstants'
import { clientService } from '../services/clientService'

export const clientActions = {
    getClients
}

function getClients (token) {
    return dispatch => {
        dispatch(request(token))

        clientService.getClients(token)
            .then(
                res => {
                    console.log('res', res.data)
                    dispatch(success(res.data))
                },
                error => {
                    console.log('err', error)
                    dispatch(failure(error))
                }
            )
    }


    function request(req) {
        return {
            type: clientConstants.GET_CLIENTS_REQUEST,
            req
        }
    }

    function success(res) {
        return {
            type: clientConstants.GET_CLIENTS_SUCCESS,
            res
        }
    }

    function failure(error) {
        return {
            type: clientConstants.GET_CLIENTS_FAILURE,
            error
        }
    }
}