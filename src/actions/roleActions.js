import { roleConstants } from "../constants/roleConstants";
import { roleService } from "../services/roleService";

export const roleActions = {
    getRoles
}

function getRoles(token) {
    return dispatch => {
        dispatch(request(token))

        roleService.getRoles(token)
            .then(
                res => {
                    dispatch(success(res.data))
                },
                error => {
                    console.log('error',error);
                    dispatch(failure(error))
                }
            );
    };

    function request(token) {
        return {
            type: roleConstants.GET_ROLES_RESQUEST,
            token
        }
    }

    function success(res) {
        return {
            type: roleConstants.GET_ROLES_SUCCESS,
            res
        }
    }

    function failure(error) {
        return {
            type: roleConstants.GET_ROLES_FAILURE,
            error
        }
    }
}
