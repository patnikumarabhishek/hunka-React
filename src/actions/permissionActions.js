import { permissionConstants } from "../constants/permissionConstants";
import { permissionService } from "../services/permissionService"

export const permissionActions = {
    getPermissions
}

function getPermissions(token) {
    return dispatch => {
        dispatch(request(token));

        permissionService.getPermissions(token)
            .then(
                res => { 
                    console.log('res',res.data)
                    dispatch(success(res.data));
                },
                error => {
                    console.log('error', error)
                    dispatch(failure(error));
                }
            );
    };

    function request(token) {
        return {
            type: permissionConstants.GET_PERMISSIONS_REQUEST,
            token
        }
    }

    function success(res) {
        return {
            type: permissionConstants.GET_PERMISSIONS_SUCCESS,
            res
        }
    }

    function failure(error) {
        return {
            type: permissionConstants.GET_PERMISSIONS_FAILURE,
            error
        }
    }
}